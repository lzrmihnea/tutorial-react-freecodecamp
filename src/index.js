import React from "react";
import ReactDom from "react-dom";

// css 
import './index.css'

// stateless functional component
// always return JSX

// JSX rules
// return single element </>
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class 
// close every element
// formatting

const author = 'Iain Banks';
const title = "The wasp factory";
const image = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434940562l/567678._SY475_.jpg";

function BookList() {
  return (
    <section className='booklist'>
      <Book job='developer'/>
      <Book title='random title' number={22}/>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return <article className='book'>
    <Image />
    <Title />
    <Author />
    <p>{props.job}</p>
    <p>{props.number}</p>
  </article>
}
const Image = () => {
  return (<img src={image} alt="" />);
}
const Title = () => {
  return (<h1>{title}</h1>)
}
const Author = () => (
  <h4>
    {author}
  </h4>)

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
