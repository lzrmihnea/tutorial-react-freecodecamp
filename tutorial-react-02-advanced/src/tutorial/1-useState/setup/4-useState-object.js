import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random'
  });
  const [name,setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random person')
  const changeMessage = () => {
    // setPerson({...person, message: 'Hello world'}); // overrides only the message field of the person
    setMessage('Hello world');
  }
  return (<>
  <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>change message</button>
  </>);
};

export default UseStateObject;
