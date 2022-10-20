import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addItem, updateItems } from "../../Features/Carts";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";

const DetailItem = () => {
  const location = useLocation();
  const [item, setItem] = useState({});
  const user = useSelector((state) => state.user.currUser);
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  useEffect(() => {
    setItem(location.state);
  }, [location]);

  const handleQty = (e) => {
    if (e === "inc") {
      setQty(qty + 1);
    } else {
      qty > 0 && setQty(qty - 1);
    }
  };

  const handleAddToCart = (item) => {
    let a = cart?.items.filter((data) => data.id === item.id);
    if (a.length > 0) {
      dispatch(addItem({ ...item, qty }));
    } else {
      dispatch(updateItems({ ...item, qty: a[0].qty + qty }));
    }
  };

  const handleNeedLogin = () => {
    navigation("/login");
  };

  return (
    <div className="container mt-1 mb-2">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img
                      id="main-image"
                      src={item?.image}
                      alt={item?.title}
                      width="250"
                    />
                  </div>
                  <div className="thumbnail text-center">
                    <img
                      onclick="change_image(this)"
                      src={item?.image}
                      alt={item?.title}
                      width="70"
                    />
                    <img
                      onclick="change_image(this)"
                      src={item?.image}
                      alt={item?.title}
                      width="70"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">
                      {item?.category}
                    </span>
                    <h5 className="text-uppercase">{item?.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${item?.price}</span>
                    </div>
                  </div>
                  <p className="about">{item?.description}</p>
                  {
                    user?.email ? '' :
                    <>
                        <div className="d-flex flex-row align-items-center mt-4 mb-5">
                            <div className="quantity d-flex flex-column">
                                <span className="text-uppercase text-gray">Quantity</span>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="dec qty-btn" onClick={() => handleQty("dec")}>
                                        <FaMinusSquare />
                                    </div>
                                    <div className="valueQty"
                                        style={{ width: "50px", textAlign: "center" }}
                                    >
                                        <span className="qty">{qty}</span>
                                    </div>
                                    <div className="inc qty-btn" onClick={() => handleQty("inc")}>
                                        <BsFillPlusSquareFill />
                                    </div>
                                </div>
                                {
                                    qty === item?.stock ?
                                    <span className="text-danger">Stock is not enough</span> : ''

                                }
                            </div>
                        </div>
                        <div className="cart mt-4 align-items-center">
                            <button className="btn btn-danger text-uppercase mr-2 px-4"
                            variant="contained"
                            onClick={
                                () => {
                                    user ? handleAddToCart(item) : handleNeedLogin()
                                }
                            }
                            >
                            Add to cart
                            </button>
                            <i className="fa fa-heart text-muted"></i>
                            <i className="fa fa-share-alt text-muted"></i>
                        </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
