import React, { useEffect, useState, Text } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaMinusSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { removeItem } from "../../Features/Carts";

const CartItems = (data) => {
const dispatch = useDispatch();
const handleDel = () => {
    dispatch(removeItem({ ...data }));
};
const location = useLocation();
const [item, setItem] = useState({});
const user = useSelector((state) => state.user.currUser);

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
                      src={data?.image}
                      alt={data?.title}
                      width="250"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">
                      {data?.category}
                    </span>
                    <h5 className="text-uppercase">{data?.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${data?.price}</span>
                    </div>
                  </div>
                  <p className="about">{data?.description}</p>
                  {user?.email ? (
                    ""
                  ) : (
                    <>
                      <div className="d-flex flex-row align-items-center mt-4 mb-5">
                        <div className="quantity d-flex flex-column">
                          <span className="text-uppercase text-gray">
                            Quantity
                          </span>
                          <div className="d-flex flex-row align-items-center">
                            <button
                              className="dec qty-btn"
                              onClick={() => handleQty("dec")}
                            >
                              <FaMinusSquare />
                            </button>

                            <div
                              className="valueQty"
                              style={{ width: "50px", textAlign: "center" }}
                            >
                              <span className="qty">{qty}</span>
                            </div>

                            <button
                              className="inc qty-btn"
                              onClick={() => handleQty("inc")}
                              disabled={qty === item?.stock}
                            >
                              <BsFillPlusSquareFill />
                            </button>
                          </div>
                          {qty === item?.stock ? (
                            <span className="text-danger">
                              Stock is not enough
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    // const handleCheckout = (cart) => {
    //   const inibaru = cart.products.map(item => item.id)
    //   if (cart.products.length !== 0) {
    //     cart.products.map((data) => {
    //       return dispatch(checkOut({
    //         ...data
    //       }));
    //     })
    //   }
    //   dispatch(productCheckout(cart));
    //   dispatch(removeCart());
    // }
  
    return (
      <div id="cart">
        <Text>
          Shopping Cart
        </Text>
        <div className="container-item flex flex-wrap gap-8 justify-between">
          <div className="item-cart-container" style={{ flex: '3' }}>
            {cart.items.length !== 0 ? (
              cart?.items.map((item, i) => <CartItems data={item} key={i} />)
            ) : (
              <Text>No items</Text>
            )}
          </div>
          <div className="summary flex-1">
            <div className="wrap-inner border border-gray-300 rounded-xl p-6">
            <Text>No items</Text>
              <div className="total-product flex justify-between mt-7">
              <Text>No items</Text>
                <Text>{cart.totalQuantity}</Text>
              </div>
              <div className="total-product flex justify-between mt-3">
              <Text>No items</Text>
                <Text variant="string">
                  ${cart.totalPrice.toFixed(2)}
                </Text>
              </div>
            </div>
            {/* <button
              className="mt-4 bg-black w-full py-2 text-white rounded-lg hover:opacity-80"
              onClick={() => handleCheckout(cart)}
            >
              Checkout
            </button> */}
          </div>
        </div>
      </div>
    );
  };

export default CartPage;
