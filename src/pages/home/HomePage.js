import axios from "axios";
import { useEffect } from "react";
import CardProducts from "../../components/CardItem/CardProd";
import { useDispatch, useSelector } from "react-redux";
import Spinners from "../../components/Loader";
import {
  productFail,
  productStart,
  productSuccess,
} from "../../features/productRedux";
import conAPI from "../../components/API/getAPI";
import Banner from "../../components/Carousel";

const API = `${conAPI()}products`;

const HomePage = () => {
  const product = useDispatch();
  const { products, loading } = useSelector((state) => state.item);

  const getData = () => {
    product(productStart());
    axios
      .get(API)
      .then((res) => {
        const addSomeData = res.data.map((e) => {
          e.stock = 20;
          e.sold = 0;
          return e;
        });
        product(productSuccess(addSomeData));
      })
      .catch((err) => {
        product(productFail([]));
      });
  };

  useEffect(() => {
    if (products.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="container">
      <Banner />
      {loading ? (
        <Spinners />
      ) : products.length !== 0 ? (
        <div className="container mb-5" style={{ display: "grid" }}>
          <div className="container">
            <p className="h2 text-left custom">
              <span className="spanCustom">Semua Product</span>
            </p>
          </div>
          <div className="row">
            {products.map((item) => (
              <div className="col-sm-3 py-4" key={item?.id}>
                <CardProducts
                  loading={loading}
                  item={item}
                  index={item?.id}
                  key={item?.id}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full mt-6">
          <p>Halaman Gagal Dimuat</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
