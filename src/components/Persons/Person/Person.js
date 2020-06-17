import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import styles from './Person.css';


class Person extends PureComponent{
    render = () => {
        console.log(`[Person.js] render`);

        return (
            <div className={ styles.Person }>
                <p>My name is { this.props.name } and I am { this.props.age } years old.</p>

                <input type="text" onChange={ this.props.changeNameHandler } value={ this.props.name }/>

                <button onClick={ this.props.removeComponentHandler }>Remove Person</button>
            </div>
        );
    }
}


Person.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    changeNameHandler: propTypes.func,
    removeComponentHandler: propTypes.func
};


export default Person;