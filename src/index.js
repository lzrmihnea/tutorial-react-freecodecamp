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

const books = [{
  id: 1,
  author: 'Iain Banks',
  title: "The wasp factory",
  img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434940562l/567678._SY475_.jpg"
}, {
  id: 2,
  author: 'Herman Hesse',
  title: 'Siddhartha',
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428715580l/52036.jpg'
}, {
  id: 3,
  author: 'Albert Camus',
  title: 'The Stranger',
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590930002l/49552._SY475_.jpg'
}, {
  id: 4,
  author: 'Timothy F.Geithner',
  title: 'Stress Test: Reflections on Financial Crises',
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1418769295l/22889809.jpg'
}];


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return <article className='book'>
    <Image img={img} />
    <Title title={title} />
    <Author author={author} />
  </article>
}
const Image = (props) => {
  return (<img src={props.img} alt="" />);
}
const Title = (props) => {
  return (<h1>{props.title}</h1>)
}
const Author = (props) => (
  <h4>
    {props.author}
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
