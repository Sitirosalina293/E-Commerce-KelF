import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemFail, itemStart, itemSuccess } from "../../Features/Items";
import CardProduct from "../SalesReport";

const Home = (props) => {
  // const navigate = useNavigate();
  const item = useDispatch();
  const { items, loading } = useSelector((state) => state.item);

  const Api = "https://fakestoreapi.com/products";

  const getData = () => {
    item(itemStart());
    axios
      .get(Api)
      .then((res) => {
        console.log("res data home : ", res.data);
        const createData = res.data.map((item) => {
          item.stock = 20;
          item.sold = 0;
          return item;
        });
        item(itemSuccess(createData));
      })
      .catch((err) => {
        item(itemFail([]));
      });
  };
  

  useEffect(() => {
    if (items.length === 0) {
      getData();
    }
  }, []);

  useEffect(() => {}, [items]);

  return (
    <div
      className=""
      style={{ maxWidth: "20rem" }}
    >
      {loading ? (
        Array.from(Array(10)).map((item, index) => (
          <div className="card-header" key={index}>
            Loading...
          </div>
        ))
      ) : (
        <div className="container" style={{ display : 'grid'}}>
          <div className="row">
            {items.map((item, index) => (
              <div className="col-sm-4 py-4" key={index}>
                <CardProduct item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
