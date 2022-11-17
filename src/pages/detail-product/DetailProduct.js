import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../features/cartRedux";
import { StarFill } from "react-bootstrap-icons";
import AddMinBtn from '../../components/ValueItem/ValueProd'

const DetailProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  const [ cartReady, setCartReady ] = useState(false);

  useEffect(() => {

    if (!cartReady) {

      setProduct(location.state);
      setQuantity(cart.totalQuantity);

      setCartReady(true);
    }

  }, [location]);

  const handleQuantity = (type) => {
    if (type === "inc") {

      setQuantity(quantity + 1);
    
    } else {

      // 
      quantity > 0 && setQuantity(quantity - 1);
    }
  };

  const addCart = (item) => {
    let a = cart?.products.filter((data) => data?.id === item?.id);
    if (a.length === 0) {
      dispatch(addProduct({ ...product, quantity }));
    } else {
      dispatch(
        updateProduct({ ...product, quantity })
      );
    }
    navigate("/");
  };

  const needLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="container mx-auto rounded min-vh-100
    "
    >
      <div className="card mb-3 p-5 mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="row no-gutters mx-auto">
          <div className="col-md-5">
            <img
              src={product?.image}
              alt={product?.title}
              className="card-img"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <span className="card-text text-muted">
                Categories : {product?.category}
              </span>
              <h3 className="card-title">{product?.title}</h3>
              <div className="card-text d-flex mt-3">
                <StarFill style={{ color: "orange" }} />
                <p className="ms-2">
                  {product?.rating?.rate} | Terjual {product?.rating?.count}
                </p>
              </div>
              <hr className="mb-3" />
              <h5 className="card-text mb-3">${product?.price}</h5>
              <p className="mb-4">{product?.description}</p>
              <div className="card-text">
                <AddMinBtn
                  value={quantity}
                  minBtn={() => handleQuantity('dec')}
                  addBtn={() => handleQuantity('inc')}
                  stock={product?.stock}
                />
                <button
                  className="mt-3 py-2 px-4"
                  variant="contained"
                  onClick={() => {
                    user == null ? (needLogin()) : (addCart(product));
                  }}
                  disabled={(quantity < 1 || user?.email === "admin@bukapedia.com" )}
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
