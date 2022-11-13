import { useNavigate } from 'react-router-dom';
import { Star } from 'react-bootstrap-icons';

const CardProducts = ({item, index}) => {
  const navigate = useNavigate();

  const handleClickProduct = (item) => {
    navigate(`/detail-item`, { state: item });
  }

  return (
    <div className="card box-shadow h-100" key={index} onClick={() => handleClickProduct(item)}>
      <img
        src={item?.image}
        className="card-img-top p-2"
        style={{ height: "20rem" }}
        alt={item?.title}
      />
      <div className="card-body">
        <h5 className="card-title">{item?.title.slice(0, 50)}</h5>
        <p className="card-text">{item.description.slice(0, 100)}...</p>
      </div>
      <div className='mb-2 ms-3'>
        <h4 className="card-text">$ {item.price}</h4>
        <p className="card-text"><Star/>{item.price}.</p>
      </div>
    </div>
  );
};

export default CardProducts;
