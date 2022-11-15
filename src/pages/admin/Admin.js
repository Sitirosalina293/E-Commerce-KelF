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
    <div className='container'>
      {loading ? <Spinner/>
        : products.length !== 0 ?
          products.map((row) => (
            <div className="card p-2 m-2" style={{ minWidth:'200px' }} key={row?.id}>
              <div className="row justify-content-lg-between">
                <img className="col-lg-1 p-3 mx-auto" style={{ minWidth: '7rem', maxWidth:'15rem'}} src={row?.image} alt={row?.title} />
                <div className="col-lg-8 p-3 my-auto">
                  <h5>{row?.title}</h5>
                  <p>{row?.description}</p>
                </div>
                <div className="d-flex col-lg-2 my-auto" style={{ height:'20%' }}>
                  <input
                    className='me-3'
                    label="Stock"
                    type="number"
                    defaultValue={row?.stock}
                    onChange={(e) => setNewStock(e.target.value)}
                    style={{ width:'45px' }}
                    min={0}
                  />
                  <button
                    className='rounded px-3'
                    variant="contained"
                    onClick={() => handleUpdateStock(row)}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))
          :
          <div className="w-full text-center">
            <p>Data Not Found</p>
          </div>
      }
    </div>
  );
};

export default Admin;
