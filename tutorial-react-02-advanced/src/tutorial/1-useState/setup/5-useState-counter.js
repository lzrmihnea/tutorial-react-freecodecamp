import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const modifyBy = (newValue) => {
    if (newValue === 0) {
      setValue(0);
    } else {
      setValue(value + newValue);
    }
  };

  const complexIncrease = (newValue) => {
    setTimeout(() => { setValue(value + newValue) }, 2000);
  };

  return (<>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => modifyBy(1)}>+</button>
      <button className="btn" onClick={() => modifyBy(0)}>0</button>
      <button className="btn" onClick={() => modifyBy(-1)}>-</button>
      <button className="btn" onClick={() => complexIncrease(1)}>increase later</button>
    </section>
  </>);
};

export default UseStateCounter;
