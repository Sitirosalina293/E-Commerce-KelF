import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCart, checkOut } from '../../features/cartRedux';
import { productCheckout } from '../../features/productRedux';
import CartItem from '../../components/CartItem/CartProduct'

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const handleCheckout = (cart) => {
    if (cart.products.length !== 0) {
      cart.products.map((data) => {
        return dispatch(checkOut({
          ...data
        }));
      })
    }
    dispatch(productCheckout(cart));
    dispatch(removeCart());
  }

  return (
    <div id="cart">
      <h4>
        Shopping Cart
      </h4>
      <div className="container-item flex flex-wrap gap-8 justify-between">
        <div className="item-cart-container" style={{ flex: '3' }}>
          {cart.products.length !== 0 ? (
            cart.products.map((item, i) => <CartItem data={item} key={i} />)
          ) : (
            <h4>No items</h4>
          )}
        </div>
        <div className="summary flex-1">
          <div className="wrap-inner border border-gray-300 rounded-xl p-6">
            <h5>Your order summary</h5>
            <div className="total-product flex justify-between mt-7">
              <p>Total Product</p>
              <p>{cart.totalQuantity}</p>
            </div>
            <div className="total-product flex justify-between mt-3">
              <p>Total Price</p>
              <p>
                ${cart.totalPrice}
              </p>
            </div>
          </div>
          <button
            className="mt-4 bg-black w-full py-2 text-white rounded-lg hover:opacity-80"
            onClick={() => handleCheckout(cart)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
