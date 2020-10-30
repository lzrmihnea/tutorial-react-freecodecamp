import React from "react";
import ReactDom from "react-dom";

// css 
import './index.css'

import {data} from './books'
import Book from './Book'

// stateless functional component
// always return JSX

// JSX rules
// return single element </>
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class 
// close every element
// formatting


function BookList() {
  // atribute, eventHandler
  // onClick, onMouseOver

  return (
    <article className='booklist'>
      {data.map((book) => {
        return (
          <Book key={book.id} {...book} />
        )
      })}
    </article>
  );
}

// Nested Components, React Tools

// The following 2 Greetings are identical
// function Greeting() {
//   return (
//     <div onClick className=''><h1>hello world</h1></div>
//   );
// }
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// }


ReactDom.render(<BookList />, document.getElementById("root"));
