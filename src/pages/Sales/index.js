import React from "react";
import { useSelector } from "react-redux";

const SalesReportPage = () => {
  const { items } = useSelector((state) => state.item);
  return (
    <table className="table table-hover">
      <thead>
        <tr className="table-light">
          <th scope="col">No</th>
          <th scope="col">Product</th>
          <th scope="col">Harga</th>
          <th scope="col">Terjual</th>
          <th scope="col">Pendapatan</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item, index) => (
            <tr className="table-primary" key={item?.id}>
              <th scope="row">{index + 1}</th>
              <td style={{
                flexDirection: 'row',
                display: 'flex',
              }}>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="w-8/12 h-28 object-contain"
                  style={{ maxWidth: "100px" }}
                />
                <div className="content"
                  style={{
                    marginLeft: '10px',
                  }}
                >
                  <p>{item?.title}</p>
                  <p>{item?.description}</p>
                </div>
              </td>
              <td>{item?.price}</td>
              <td>{item?.sold}</td>
              <td>{item?.price * item?.sold}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default SalesReportPage;
