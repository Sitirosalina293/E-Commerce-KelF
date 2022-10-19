import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { itemFail, itemStart, itemSuccess } from "../../Features/Items";

const Home = (props) => {
  // const navigate = useNavigate();
  const item = useDispatch();
  const { items, loading } = useSelector((state) => state.items);

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
        items(itemSuccess(createData));
      })
      .catch((err) => {
        item(itemFail([]));
      });
  };

  useEffect(() => {
    if(items.length === 0) {
      getData();
    }
  }, []);

  useEffect(() => {
    
  }, [items]);
  

  return (
      <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
        {
          loading ? (
            Array.from(Array(10)).map((item, index) => (
              <div className="card-header" key={index}>Loading...</div>
            ))
          ) : (
            items.map((item, index) => (
              <div className="card-header" key={index}>{item.title}</div>
            ))
          )
          
          
        }
      </div>
  );
};

export default Home;
