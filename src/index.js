import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// JSX rules
// return single element </>
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class 
// close every element
// formatting


function Greeting() {
  return (
    <div onClick className=''>
      <Person/>
      <Message/>
      <h1>My first component</h1>
      </div>
  );
}

// Nested Components, React Tools
const Person = () => <h2>John Doe</h2>

const Message = () => {
  return <p>This is my message</p>
}


// The following 2 Greetings are identical
// function Greeting() {
//   return (
//     <div onClick className=''><h1>hello world</h1></div>
//   );
// }
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }



ReactDom.render(<Greeting />, document.getElementById("root"));
