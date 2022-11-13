import axios from 'axios';
import { useEffect } from 'react';
import CardProducts from '../../components/CardItem/CardProd';
import { useDispatch, useSelector } from 'react-redux';
import {
  productFail,
  productStart,
  productSuccess,
} from '../../features/productRedux';
import conAPI from '../../components/API/getAPI';
import { Spinner } from 'react-bootstrap';

const API=`${conAPI()}products`;

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.item);

  const getData = () => {
    dispatch(productStart());
    axios
      .get(API)
      .then((res) => {
        const addSomeData = res.data.map((e) => {
          e.stock = 20;
          e.sold = 0;
          return e
        })
        dispatch(productSuccess(addSomeData));
      })
      .catch((err) => {
        dispatch(productFail([]));
      });
  };

  useEffect(() => {
    if (products.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className='container'>
      {loading ? (<Spinner/>
      ) : products?.length !== 0 ? (
        products?.map((item) => (
          <CardProducts
            loading={loading}
            item={item}
            index={item?.id}
            key={item?.id}
          />
        ))
      ) : (
        <div className="w-full mt-6">
          <p>
            Halaman Gagal Dimuat
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
