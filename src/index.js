import React from "react";
import reactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="BookList">
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

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
