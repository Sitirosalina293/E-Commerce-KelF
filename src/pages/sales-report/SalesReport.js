import React from 'react';
import { useSelector } from 'react-redux';

export default function SalesReportPage() {
  const { products } = useSelector((state) => state.item);
  console.log(products)
  return (
    <>
      {products.length === 0 ? ('') : (
      <div className='container border rounded p-5'>
        <div className='row fw-bold p-2 justify-content-lg-between'>
          <div className='col-sm-8'>Product</div>
          <div className='col'>Harga</div>
          <div className='col'>Terjual</div>
          <div className='col'>Pendapatan</div>
        </div>
        <hr/>
        {products.map((item) => (
          <div className='row p-2 justify-content-lg-between' key={item?.id}>
            <div className='col-sm-8'>{item?.title}</div>
            <div className='col' style={{ textAlign:'right' }}>$ {item?.price}</div>
            <div className='col'style={{ textAlign:'right' }}>{item?.sold}</div>
            <div className='col'style={{ textAlign:'right' }}>{item?.sold * item?.price}</div>
          </div>
        ))}
      </div>
      )}
    </>
  );
}
