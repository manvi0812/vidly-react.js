import React from "react";

const Input = ({ name, label, error, value, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type='text'
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
      {/* if error is truthy, error is returned otherwise the div tag */}
    </div>
  );
};

export default Input;
