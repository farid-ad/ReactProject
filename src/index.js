import React from 'react'
import reactDom from 'react-dom'

function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    )
}
const Person = () => <h1>Farid Abou Diab</h1>
const Message = () => <p>This is my message</p>
// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'HELLO FARID!')
//     )
// }

reactDom.render(<Greeting />, document.getElementById('root'))
