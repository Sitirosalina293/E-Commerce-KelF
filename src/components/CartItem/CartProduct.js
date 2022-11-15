import AddMinBtn from '../ValueItem/ValueProd';
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../features/cartRedux';
import { TrashFill } from 'react-bootstrap-icons';

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
    <div>
      <div className='mx-auto mb-4 shadow-sm row p-2 w-100'>
        <img className="mx-auto col-lg-1 p-2" src={data.image} alt={data.title} style={{minWidth:'5rem', maxWidth:'10rem'}}/>
        <div className="my-auto col-lg-8">
          <h5>{data?.title?.slice(0, 40)}..</h5>
          <p>
            Price: ${data.price}
          </p>
        </div>
        <div className="my-auto col-lg-2">
          <div className='d-flex'>
            <AddMinBtn className="col-sm-3"
              value={data.quantity}
              minBtn={() => handleQuantity('dec')}
              addBtn={() => handleQuantity('inc')}
              stock={data.stock}
            />
            <TrashFill className='col-sm-2 ms-3 my-auto' style={{  fontSize: "18px" }} onClick={handleDel}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;