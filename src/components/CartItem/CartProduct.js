import AddMinBtn from '../ValueItem/ValueProd';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../features/cartRedux';

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleDel = () => {
    dispatch(removeProduct({ ...data }));
  };

  const handleQuantity = (type) => {
    if (type === 'inc') {
      dispatch(updateProduct({
        ...data,
        quantity: data.quantity + 1,
      }));
    } else {
      data.quantity > 1 && dispatch(updateProduct({
        ...data,
        quantity: data.quantity - 1,
      }));
    }
  };

  return (
    <div id="cart-item" className="h-36 flex justify-between mb-6 w-full">
      <div className="content-cart h-full flex gap-8">
        <div
          className="img-wrapper h-full grid place-items-center"
          style={{ width: '130px' }}
        >
          <img src={data.image} alt={data.title} className="h-8/12 w-8/12" />
        </div>
        <div className="desc-item-cart flex flex-col justify-between pb-4">
          <div className="top">
            <h5>{data?.title?.slice(0, 40)}..</h5>
            <p>
              Price: ${data.price}
            </p>
          </div>
          <button className="w-max" onClick={handleDel}>
            delete
          </button>
        </div>
      </div>
      <div className="add-item">
        <AddMinBtn
          value={data.quantity}
          minBtn={() => handleQuantity('dec')}
          addBtn={() => handleQuantity('inc')}
        />
      </div>
    </div>
  );
};

export default CartItem;