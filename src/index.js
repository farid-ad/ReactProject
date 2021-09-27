import React from 'react'
import reactDom from 'react-dom'

function Greeting() {
    return (
        <div>
            <h1>This is Farid and this is my first compo nent</h1>
        </div>
    )
}

// const Greeting = () => {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h1', {}, 'HELLO FARID!')
//     )
// }

reactDom.render(<Greeting />, document.getElementById('root'))
