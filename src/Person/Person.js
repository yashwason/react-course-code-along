import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = (props) => {
    const PersonStyles = {
        '@media (max-width: 500px)': {
            width: `80%`
        }
    }

    return (
        <div className="Person" style={ PersonStyles }>
            <p onClick={ props.click }>My name is { props.name } and I am { props.age } years old.</p>
            <strong>{ props.children }</strong>

            <input type="text" onChange={ props.changeNameHandler } value={ props.name }/>

            <button onClick={ props.removeComponentHandler }>Remove Person</button>
        </div>
    )
}

export default Radium(Person);