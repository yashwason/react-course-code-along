import React, { useEffect } from 'react';
import styles from './Cockpit.css';

const Cockpit = (props) => {
    const appliedStyles = [];

    useEffect(() => {
        console.log(`[Cockpit.js] useEffect (render)`);
    }, [ props.showCockpit ]);


    if(props.showPersons) appliedStyles.push(styles.clicked);

    let optionalMarkup =
        <div>
            <h1>{ props.title }</h1>
            <p>Manage persons using this React App</p>

            <button className={ appliedStyles.join(` `) } key="45asd" onClick={ props.switchNameHandler }>Switch Names</button>
            <button className={ appliedStyles.join(` `) } key="465dg" onClick={ props.togglePersonsHandler }>Toggle Persons</button>
        </div>


    if(!props.showCockpit) optionalMarkup = null;

    return (
        <div className={ styles.Cockpit }>
            <button className={ appliedStyles.join(` `) } key="a98ad" onClick={ props.toggleCockpit }>Toggle Cockpit</button>

            { optionalMarkup }
        </div>
    );
};

export default Cockpit;