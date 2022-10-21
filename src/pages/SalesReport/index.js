import React from "react";
import { useNavigate } from "react-router-dom";

const CardProduct = (props) => {
  const { index, item } = props;
  const navigation = useNavigate();

  const handleItem = (item) => {
    navigation(`/detail-item`, { state: item });
  };

  return (
    <div className="card box-shadow h-100" key={index}>
      <img
        src={item.image}
        className="card-img-top"
        style={{ height: "50%" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text" style={{ height: "40%" }}>
          {item.description}.
        </p>
        <p className="card-text">{item.price}.</p>
        <a onClick={() => handleItem(item)} className="btn btn-success">detail</a>
        <a href={''} className="btn btn-success">Add to cart</a>
      </div>
    </div>
  );
};

export default CardProduct;
