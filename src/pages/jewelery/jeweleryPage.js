import { useSelector } from "react-redux";
import React from 'react'
import Spinners from "../../components/Loader";
import CardProducts from "../../components/CardItem/CardProd";

export default function JeleryPage() {
    const { products, loading } = useSelector((state) => state.item);

    let jewelery = products?.filter((item)=>item?.category === "jewelery")

  return (
    <div className="container">
      {loading ? (
        <Spinners />
      ) : products.length !== 0 ? (
        <div className="container mb-5" style={{ display: "grid" }}>
          <div className="row">
            {jewelery.map((item) => (
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
}
