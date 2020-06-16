import React from 'react';
import styles from './Cockpit.css';

const Cockpit = (props) => {
    const appliedStyles = [];

    if(props.showPersons){
        appliedStyles.push(styles.clicked);
    }

    return (
        <div className={ styles.Cockpit }>
            <h1>Yash's First React Code</h1>
            <p>This is a paragraph written in JSX</p>

            <button className={ appliedStyles.join(` `) } key="45asd" onClick={() => props.switchNameHandler(`Yash`)}>Switch Names</button>
            <button className={ appliedStyles.join(` `) } key="465dg" onClick={ props.togglePersonsHandler }>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;