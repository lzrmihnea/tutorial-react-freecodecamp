import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Peter');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (<>
    {/* <h1>{firstValue}</h1> */}
    {/* <h1>value: {secondValue}</h1> */}
    <h1>{text || 'John Doe'}</h1>
    <button className="btn" onClick={() => setIsError(!isError)}>
      toggle error
      </button>
    {/* <h1>{isError && "Error..."}</h1> */}
    {isError? (<p>there's an error</p>) : (<p>no error</p>)}
  </>);
};

export default ShortCircuit;
