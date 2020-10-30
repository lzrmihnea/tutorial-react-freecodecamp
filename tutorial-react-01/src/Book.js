import React from 'react'


const clickHandler = () => {
    alert('hello world');
}

const Book = ({ img, title, author }) => {
    return <article className='book'>
        <Image img={img} />
        <Title title={title} />
        <Author author={author} />
    </article>
}
const Image = (props) => {
    return (
        <img src={props.img} alt="" />
    );
}
const Title = (props) => {
    return (
        <div>
            <h1 onClick={() => console.log(props.title)}> {props.title}</h1 >
            <button type="button" onClick={clickHandler}>
                Reference example
      </button>
        </div>
    )
}
const Author = (props) => {
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <div>
            <h4>{props.author}</h4>
            < button type="button" onClick={() => complexExample(props.author)} >
                More complex example
      </button>
        </div>
    )
}

export default Book