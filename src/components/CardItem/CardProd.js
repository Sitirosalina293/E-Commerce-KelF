import { useNavigate } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { BsCurrencyDollar } from "react-icons/bs";

const CardProducts = ({ item, index }) => {
  const navigate = useNavigate();

  const handleClickProduct = (item) => {
    navigate(`/detail-item`, { state: item });
  };

  return (
    <div
      className="card shadow-sm h-100"
      style={{ border: "none" }}
      key={index}
      onClick={() => handleClickProduct(item)}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6 me-2 p-3">
            <img
              src={item?.image}
              alt={item?.title}
              style={{ height: "5rem" }}
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="card-body">
            <p className="fontTitle">{item?.title.slice(0, 50)}...</p>
            <div className="d-flex">
              <BsCurrencyDollar style={{ color: "black" }} />
              <h4 className="fontPrice">{item?.price}</h4>
            </div>
            <div className="d-flex ">
              <StarFill style={{ color: "orange" }} />
              <p className="fontTitle ms-2">
                {item?.rating.rate} | Terjual {item?.rating.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
