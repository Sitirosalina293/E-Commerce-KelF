import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart, checkOut } from "../../features/cartRedux";
import { productCheckout } from "../../features/productRedux";
import CartItem from "../../components/CartItem/CartProduct";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCheckout = (cart) => {
    if (cart.products.length !== 0) {
      cart.products.map((data) => {
        return dispatch(
          checkOut({
            ...data,
          })
        );
      });
    }
    dispatch(productCheckout(cart));
    dispatch(removeCart());
  };

  return (
    <div className="min-vh-100">
      <div
        className="container"
      >
        <div>
          <h4
            className="fw-bold mb-4"
            style={{ width: "100%", textAlign: "center" }}
          >
            Shopping Cart
          </h4>
        </div>
        <div className="container-item flex flex-wrap gap-8 justify-between">
          <div className="my-4" style={{ flex: "3" }}>
            {cart.products.length !== 0 ? (
              cart.products.map((item, i) => <CartItem data={item} key={i} />)
            ) : (
              <h4>No items</h4>
            )}
          </div>
        </div>
      </div>
      <div
        className="shadow-lg mx-auto "
        style={{ width: "50%", alignContent: "left", justifyContent: "left"  }}
      >
        <div className="px-3 py-3" style={{ width: "40%" }}>
          <div className="d-flex flex-nowrap">
            <p className="order-1 p-2">Total Product</p>
            <p className="order-2 p-2" style={{ textAlign: "right" }}>
              {cart.totalQuantity}
            </p>
          </div>
          <div className="d-flex flex-nowrap">
            <p className="order-1 p-2">Total Price</p>
            <p className="order-2 p-2" style={{ textAlign: "right" }}>
              ${cart.totalPrice}
            </p>
          </div>
          <div class="d-grid gap-2 col-1 mx-auto">
            <button
              class="btn bg-success text-white"
              onClick={() => handleCheckout(cart)}
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
