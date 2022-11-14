import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../features/cartRedux';
import { StarFill, PlusCircleFill, DashCircleFill  } from 'react-bootstrap-icons';

const DetailProduct = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setProduct(location.state);
  }, [location]);

  const handleQuantity = (type) => {
    if (type === 'inc') {
      setQuantity(quantity + 1);
    } else {
      quantity > 0 && setQuantity(quantity - 1);
    }
  };

  const addCart = (item) => {
    let a = cart?.products.filter((data) => data?.id === item?.id);
    if (a.length === 0) {
      dispatch(
        addProduct({ ...product, quantity })
      );
    } else {
      dispatch(
        updateProduct({ ...product, quantity: a[0].quantity + quantity })
      );
    }
    navigate("/")
  };

  const needLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container mx-auto rounded'>
      <div className='card mb-3 p-5 mx-auto' style ={{maxWidth : '1000px' }}>
        <div className='row no-gutters mx-auto'>
          <div className="col-sm-5">
            <img
              src={product?.image}
              alt={product?.title}
              className="card-img"
            />
          </div>
          <div className='col-sm-7'>
            <div className='card-body'>
              <span className="card-text text-muted">Categories : {product?.category}</span>
              <h3 className='card-title'>
                {product?.title}
              </h3>
              <div className='card-text d-flex mt-3'>
                <StarFill style={{ color:"orange" }}/>
                <p className="ms-2">
                  {product?.rating?.rate} | Terjual {product?.rating?.count}</p>
              </div>
              <hr className="mb-3" />
              <h5 className='card-text mb-3'>${product?.price}</h5>
              <p className='mb-4'>
                {product?.description}
              </p>
              <div className="card-text">
                <div className='mb-3 mx-4'>
                  <DashCircleFill 
                  onClick={() => handleQuantity('dec')}
                  style={{fontSize:"23px"}}/>
                  <span className="mx-2"style={{fontSize:"18px"}}>{quantity}</span>
                  <PlusCircleFill 
                  disabled={quantity === product?.stock} 
                  onClick={() => handleQuantity('inc')}
                  style={{fontSize:"23px"}}/>
                  {quantity === product?.stock ?
                    <div>
                      <p>
                        Max Quantity
                      </p>
                    </div> :
                    quantity > product?.stock ?
                    <div>
                      <p>
                        Product sudah habis
                      </p>
                    </div> : ('')
                    }
              </div>
              <button
                className='py-2 px-4'
                variant="contained"
                onClick={() => {
                  user ? addCart(product) : needLogin();
                }}
                disabled={quantity < 1}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DetailProduct;
