import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart, checkOut } from "../../features/cartRedux";
import { productCheckout } from "../../features/productRedux";
import CartItem from "../../components/CartItem";
import { toast, ToastContainer } from "react-toastify";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showMessage = (data) => {
    if (data === "success") {
      toast.success("Checkout Success");
    } else {
      toast.error("Checkout Failed");
    }
  };

  const handleCheckout = (cart) => {
    if (cart.products.length !== 0) {
      cart.products.map((data) => {
        return dispatch(
          checkOut({
            ...data,
          })
        );
      });
      dispatch(productCheckout(cart));
      dispatch(removeCart());
      showMessage("success");
    }
    if (cart.products.length === 0) {
      showMessage("failed");
    }
  };

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <div>
          <h4
            className="fw-bold mb-4"
            style={{ width: "100%", textAlign: "center" }}
          >
            Shopping Cart
          </h4>
        </div>
        <div className="container-item flex flex-wrap gap-8 justify-between">
          <div className="my-4 mx-auto" style={{ flex: "3" }}>
            {cart.products.length !== 0 ? (
              cart.products.map((item, i) => <CartItem data={item} key={i} />)
            ) : (
              <h4>No items</h4>
            )}
          </div>
        </div>
      </div>
      <div className="mb-4" style={{ alignContent: "center" }}>
        <div
          className="shadow-sm mx-auto px-3 py-3 mb-0"
          style={{ minWidth: "300px", maxWidth: "500px" }}
        >
          <div className="row p-3">
            <p className="col">Total Product</p>
            <p className="col" style={{ textAlign: "right" }}>
              {cart.totalQuantity}
            </p>
          </div>
          <div className="row p-3">
            <p className="col">Total Price</p>
            <p className="col" style={{ textAlign: "right" }}>
              ${cart.totalPrice}
            </p>
          </div>
          <div className="row mx-auto">
            <button
              className="btn bg-success text-white"
              onClick={() => handleCheckout(cart)}
              type="button"
            >
              Checkout
            </button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
