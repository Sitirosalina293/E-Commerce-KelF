import React from 'react';
import { useSelector } from 'react-redux';

export default function SalesReportPage() {
  const { products } = useSelector((state) => state.item);
  console.log(products)
  return (
    <div className='container'>
      {products.length !== 0 ? (
      <table>
        <thead>
          <tr>
              <th>Product</th>
              <th>Harga</th>
              <th>Terjual</th>
              <th>Pendapatan</th>
          </tr>
        </thead>
        <tbody>
            {products.map((item) => (
              <tr key={item?.id}>
                <td component="th" scope="row">
                  {item?.title}
                </td>
                <td align="right">$ {item?.price}</td>
                <td align="right">{item?.sold}</td>
                <td align="right">{item?.sold * item?.price}</td>
              </tr>
            ))}
        </tbody>
      </table>) :(<h4>No data</h4>)}
    </div>
  );
}
