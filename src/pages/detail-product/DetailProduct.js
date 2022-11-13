import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../../features/cartRedux';

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
  };

  const needLogin = () => {
    navigate('/login');
  };

  return (
    <div className='container'>
      <div>
        <div className="h-full flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.title}
            style={{ width: '200px' }}
          />
        </div>
      </div>
      <div >
        <h3>
          {product?.title}
        </h3>
        <div className="flex items-center gap-2 my-3">
          star
          <p>
            {product?.rating?.rate}
          </p>
        </div>
        <hr className="mb-3" />
        <h5>${product?.price}</h5>
        <p>
          {product?.description}
        </p>
        <div className="flex items-center mt-4 gap-2">
          <span className="inline-block text-xs">Categories</span>
          <p
          >
            {product?.category}
          </p>
        </div>
        {user?.email ? '' :
          <>
            <div className="count flex mt-5 items-center">
              <button
                aria-label='min-button'
                size="large"
                onClick={() => handleQuantity('dec')}
              >
                -
              </button>
              <span className="text-2xl leading-normal">{quantity}</span>
              <button
                aria-label='min-button'
                size="large"
                disabled={quantity === product?.stock}
                onClick={() => handleQuantity('inc')}
              >
                +
              </button>
              {quantity === product?.stock ?
                <div>
                  <p>
                    Max Quantity
                  </p>
                </div> : ''
              }
            </div>
            <button
              variant="contained"
              onClick={() => {
                user ? addCart(product) : needLogin();
              }}
              disabled={quantity < 1}
            >
              Add to cart
            </button>
          </>
        }
      </div>
    </div>
  );
};

export default DetailProduct;
