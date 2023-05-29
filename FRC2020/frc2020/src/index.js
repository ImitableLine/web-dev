import React from "react";
/* import ReactDom from "react-dom"; // for older stuff */
import { createRoot } from "react-dom/client";

//css
import "./index.css";
import { books } from "./books";
import SpecificBook from "./Book";
import { greeting } from "./testing/testing";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

function BookList() {
  // needs to have a capatalized function name
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <SpecificBook key={book.id} book={book}></SpecificBook>;
      })}
    </section>
  );
}

root.render(<BookList />);

/* function Greeting() {
  // needs to have a capatalized function name
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
}
 */

/* const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51EOewQhNiL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Hello"
  />
); */
/* const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Auther = () => <h4>Sandra Magsamen</h4>; */

/* const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>This is my message.</p>;
};
 */
/* ReactDom.render(<Greeting />, document.getElementById("root")); */

/* <Book
        img={firstbook.img}
        title={firstbook.title}
        author={firstbook.author}
      ></Book>
      <Book
        img={secondbook.img}
        title={secondbook.title}
        author={secondbook.author}
      /> */

/* const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames); */
