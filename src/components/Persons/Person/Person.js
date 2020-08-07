import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

import AuthContext from '../../../context/auth';

import styles from './Person.css';


class Person extends PureComponent{
    static contextType = AuthContext;

    render = () => {
        console.log(`[Person.js] render`);

        return (
            <div className={ styles.Person }>
                { this.context.isAuthenticated ? <p>Reminder that you're logged in</p> : null }

                <p>My name is { this.props.name } and I am { this.props.age } years old.</p>

                <input
                 type="text" onChange={ this.props.changeNameHandler }
                 value={ this.props.name }
                 ref={ this.props.toSetRef ? (elemInput) => this.firstInputElem = elemInput : null }
                />

                <button onClick={ this.props.removeComponentHandler }>Remove Person</button>
            </div>
        );
    }

    componentDidMount = () => {
        console.log(`[Person.js] componentDidMount`);
        
        if(this.firstInputElem) this.firstInputElem.focus();
    }
}


Person.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    changeNameHandler: propTypes.func.isRequired,
    removeComponentHandler: propTypes.func.isRequired
};


export default Person;