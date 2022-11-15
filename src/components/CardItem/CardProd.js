import { useNavigate } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

const CardProducts = ({item, index}) => {
  const navigate = useNavigate();

  const handleClickProduct = (item) => {
    navigate(`/detail-item`, { state: item });
  }

  return (
    <div 
      className="card shadow-sm h-100" 
      style={{ border:"none" }}
      key={index} 
      onClick={() => handleClickProduct(item)}
    >
      <img
        src={item?.image}
        className="p-1"
        style={{ height: "10rem", 'objectFit': 'scale-down' }}
        alt={item?.title}
      />
      <div className="card-body">
        <p className="fontTitle">{item?.title.slice(0, 50)}...</p>
      </div>
      <div className='mx-3'>
        <p className="fontPrice">$ {item?.price}</p>
      </div>
      <div className='d-flex mx-3'>
        <StarFill style={{ color:"orange" }}/>
        <p className="fontTitle ms-2">
          {item?.rating.rate} | Terjual {item?.rating.count}</p>
      </div>
    </div>
  );
};

export default CardProducts;
