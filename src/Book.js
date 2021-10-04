import React from "react";

const Book = ({ img, title, autthor }) => {
  // const { img, title, autthor } = props;

  const clickHandler = () => {
    alert("You choose an amazing book!!!");
  };

  return (
    <article className="Book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{autthor}</h4>
      <button type="button" onClick={clickHandler}>
        Buy Now
      </button>
    </article>
  );
};

export default Book;
