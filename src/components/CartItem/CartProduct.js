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
    <div className="">
      <div className="row justify-content-lg-between">
        <div className="col-sm-2 me-2 p-3">
          <img src={data.image} alt={data.title} style={{height:'12rem'}}/>
        </div>
        <div className="col-sm-6">
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
        <div className="col-sm-2">
          <AddMinBtn
            value={data.quantity}
            minBtn={() => handleQuantity('dec')}
            addBtn={() => handleQuantity('inc')}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;