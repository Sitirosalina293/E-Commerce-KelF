import React from 'react';

const AddMinBtn = ({ value, minBtn, addBtn, stock }) => {
  return (
    <div>
      <div className='d-flex'>
        <button
          className="rounded"
          onClick={minBtn}
          disabled={(value===0)}
          style={{ width:'30px', height:'30px' }}
        ><p className="mx-auto my-auto">-</p></button>
        <div style={{textAlign:'center', width:'50px' }}>
          <p className="my-auto" style={{  fontSize: "18px" }}>{value}</p>
        </div>
        <button
          className="rounded"
          disabled={(value === stock)||(value > stock) }
          onClick={addBtn}
          style={{ width:'30px', height:'30px' }}
        >
          <p className="mx-auto my-auto">+</p>
        </button>
      </div>
      {value === stock ? (
        <div>
          <p className="text-danger">Max Quantity</p>
        </div>
      ) : ('')}
    </div>
  );
};

export default AddMinBtn;
