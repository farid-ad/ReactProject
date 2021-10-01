import React from "react";
import reactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/71Ptolb7qnL._AC_UL200_SR200,200_.jpg",
    title: "Peril",
    autthor: "Bob Woodward",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg",
    title: "The Wish",
    autthor: "Nicholas Sparkss",
  },

  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg",
    title:
      "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    autthor: "Robert T. Kiyosaki",
  },

  {
    id: 4,
    img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL200_SR200,200_.jpg",
    title:
      "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life",
    autthor: "Mark Manson",
  },

  {
    id: 5,
    img: "https://images-na.ssl-images-amazon.com/images/I/61kp7tknNIS._AC_UL200_SR200,200_.jpg",
    title:
      "The Secret of Life: Rosalind Franklin, James Watson, Francis Crick, and the Discovery of DNA's Double Helix",
    autthor: "Howard Markel",
  },
  {
    id: 6,
    img: "https://images-na.ssl-images-amazon.com/images/I/81RuAzKrHkL._AC_UL200_SR200,200_.jpg",
    title: "The 5 Love Languages: The Secret to Love that Lasts Paperback",
    autthor: "Gary Chapman",
  },
];

function BookList() {
  return (
    <section className="BookList">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, autthor }) => {
  // const { img, title, autthor } = props;

  return (
    <article className="Book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{autthor}</h4>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));

// const Person = () => <h1>Farid Abou Diab</h1>
// const Message = () => <p>This is my message</p>
// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'HELLO FARID!')
//     )
// }
