import React from 'react';
import reactDom from 'react-dom';
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL200_SR200,200_.jpg',
  title: 'Peril',
  autthor: 'Bob Woodward',
};
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg',
  title: 'The Wish',
  autthor: 'Nicholas Sparkss',
};

function BookList() {
  return (
    <section className="BookList">
      <Book
        title={firstBook.title}
        autthor={firstBook.autthor}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        autthor={secondBook.autthor}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = props => {
  return (
    <article className="Book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.autthor}</h4>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById('root'));

// const Person = () => <h1>Farid Abou Diab</h1>
// const Message = () => <p>This is my message</p>
// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'HELLO FARID!')
//     )
// }
