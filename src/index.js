import React from 'react'
import reactDom from 'react-dom'
import './index.css'

function BookList() {
    return (
        <section className="BookList">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}
// const Person = () => <h1>Farid Abou Diab</h1>
// const Message = () => <p>This is my message</p>
const Image = () => (
    <img
        src="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg"
        alt=""
    />
)
const Book = () => {
    return (
        <article className="Book">
            <Image> </Image>
            <Title />
            <Author />
        </article>
    )
}
const Title = () => (
    <h1>
        Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the
        Poor and Middle Class Do Not!
    </h1>
)
const Author = () => <h4>Robert T. Kiyosaki</h4>
// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'HELLO FARID!')
//     )
// }

reactDom.render(<BookList />, document.getElementById('root'))
