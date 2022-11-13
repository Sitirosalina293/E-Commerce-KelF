import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const CardProducts = ({item, index}) => {
  const navigate = useNavigate();

  const handleClickProduct = (item) => {
    navigate(`/detail-item`, { state: item });
  }

  return (
      <div>
      <div
        key={index}
        className="d-flex"
        onClick={() => handleClickProduct(item)}
      >
        {item ? (
          <div>
            <img
              className="max-w-full max-h-full"
              alt={item?.title}
              src={item?.image}
            />
          </div>
        ) : (<Spinner/>)}

        {item ? (
          <div className="w-full mt-4">
            <p>
              {item?.title?.slice(0, 50)}...
            </p>
            <div className="flex items-center my-2">
              $ 
              <p>{item?.price}</p>
            </div>
            <div className="flex items-center">
              star
              <p>
                {item?.rating?.rate}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full mt-4">
            <Spinner/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProducts;
