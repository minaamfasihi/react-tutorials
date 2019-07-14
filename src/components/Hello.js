import React from 'react';

const Hello = () => {
    // using JSX
    // return (
    //     <div>
    //         <h1>Hello Munnu</h1>
    //     </div>
    // )

    // using React.createElement(<html-tag-to-be-rendered>, <optional-props>, <children of the html element>)
    
    // now <h1>Minaam</h1> will be rendered as a string, h1 wont become a DOM node.
    // return React.createElement(
    //     'div',
    //     null,
    //     '<h1>Minaam</h1>'
    // )

    // now h1 will render as a text node, and not as h1 element.
    // return React.createElement(
    //     'div',
    //     null,
    //     'h1',
    //     'Minaam'
    // )

    // finally what we want.    
    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello Minaam')
    // )

    // the second arg takes key value pairs and they show up as properties of the HTML element.
    // return React.createElement(
    //     'div',
    //     {id: 'hello', class: 'dummyClass'}, // but class will give an error because it's a reserved keyword.
    //     React.createElement('h1', null, 'Hello Minaam')
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'}, // ok
        React.createElement('h1', null, 'Hello Minaam')
    )
}

export default Hello;
