import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStock } from "../../Features/Items";

const Admin = () => {
  const { items, loading } = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [stockItem, setStockItem] = React.useState(0);

  const handleUpdateStock = (data) => {
    if (stockItem) {
      dispatch(updateStock({ ...data, stock: parseInt(stockItem) }));
      console.log("data if : ", data);
      alert("Stock berhasil di update");
    } else {
      dispatch(updateStock({ ...data, stock: 0 }));
      console.log("data else : ", data);
    }
  };

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div
          className="container"
          style={{ display: "grid", marginTop: "20px" }}
        >
          <div className="row">
            <div className="col-12">
              <table className="table table-hover">
                <thead>
                  <tr className="table-light">
                    <th scope="col">No</th>
                    <th scope="col">Product</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
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
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={item?.stockItem}
                          min="0"
                          onChange={(e) => setStockItem(e.target.value)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleUpdateStock(item)}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;


