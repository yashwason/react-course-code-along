import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={ props.click }>My name is { props.name } and I am { props.age } years old.</p>
            <strong>{ props.children }</strong>

            <input type="text" onChange={ props.changeNameHandler } value={ props.name }/>

            <button onClick={ props.removeComponentHandler }>Remove Person</button>
        </div>
    )
}

export default Person;