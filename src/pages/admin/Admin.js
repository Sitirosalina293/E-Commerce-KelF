import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStock } from '../../features/productRedux';
import { Spinner } from 'react-bootstrap';

const Admin = () => {
  const { products, loading } = useSelector((state) => state.item);
  const dispatch = useDispatch()
  const [newStock, setNewStock] = useState(0)

  const handleUpdateStock = (data) => {
    if (newStock) {
      dispatch(updateStock({ ...data, stock: parseInt(newStock) }))
    } else {
      dispatch(updateStock({ ...data, stock: 0 }))
    }
  }

  return (
    <>
      {loading ? <Spinner/>
        : products.length !== 0 ?
          products.map((row) => (
            <div className="card p-4 m-4" key={row?.id}>
              <div className="flex flex-col md:flex-row">
                <div className="img-wrapper grid place-items-center" style={{ width: '130px', height: '130px' }}>
                  <img src={row?.image} alt={row?.title} className="w-8/12 h-28 object-contain" />
                </div>
                <div className="w-full">
                  <h1>
                    {row?.title}
                  </h1>
                  <p>
                    {row?.description.slice(0, 200)}...
                  </p>
                </div>
                <div className="m-4 flex flex-row items-center justify-center">
                  <input
                    id="outlined-basic"
                    label="Stock"
                    variant="outlined"
                    type="number"
                    size="small"
                    defaultValue={row?.stock}
                    onChange={(e) => setNewStock(e.target.value)}
                  />
                  <div className="justify-end ml-4">
                    <button
                      variant="contained"
                      onClick={() => handleUpdateStock(row)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          <div className="w-full text-center">
            <p>Data Not Found</p>
          </div>
      }
    </>
  );
};

export default Admin;
