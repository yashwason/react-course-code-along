import React, { useEffect, useRef, useContext, Fragment } from 'react';
import propTypes from 'prop-types';

import AuthContext from '../../context/auth';

import styles from './Cockpit.css';


const Cockpit = (props) => {
    const appliedStyles = [],
        toggleCockpitBtnRef = useRef(null),
        togglePersonsBtnRef = useRef(null),
        toggleAuthStatusBtnRef = useRef(null),
        authContext = useContext(AuthContext);

    useEffect(() => {
        console.log(`[Cockpit.js] 1st useEffect (render)`);

        if(props.showCockpit) toggleCockpitBtnRef.current.textContent = `Hide Cockpit`;
        else toggleCockpitBtnRef.current.textContent = `Show Cockpit`;

    }, [ props.showCockpit ]);


    useEffect(() => {
        console.log(`[Cockpit.js] 2nd useEffect (render)`);

        if(props.showPersons) togglePersonsBtnRef.current.textContent = `Hide Persons`;
        else togglePersonsBtnRef.current.textContent = `Show Persons`;

    }, [ props.showPersons ]);


    useEffect(() => {
        console.log(`[Cockpit.js] 3rd useEffect (render)`);

        if(authContext.isAuthenticated) toggleAuthStatusBtnRef.current.textContent = `Logout`;
        else toggleAuthStatusBtnRef.current.textContent = `Login`;

    }, [ authContext.isAuthenticated ]);


    if(props.showPersons) appliedStyles.push(styles.clicked);

    let optionalMarkup = <Fragment>
            { authContext.isAuthenticated ? <h1>LOGGED IN</h1> : <h1>LOGGED OUT</h1> }

            <h1>{ props.title }</h1>
            <p>Manage persons using this React App</p>

            <button className={ appliedStyles.join(` `) } key="45asd" onClick={ props.switchNameHandler }>Switch Names</button>

            <button
             className={ appliedStyles.join(` `) }
             key="465dg"
             onClick={ props.togglePersonsHandler }
             ref={ togglePersonsBtnRef }
            >Show Persons</button>

            <button
             className={ appliedStyles.join(` `) }
             key="65as4"
             onClick={ authContext.loginHandler }
             ref={ toggleAuthStatusBtnRef }
            >Login</button>
        </Fragment>;


    if(!props.showCockpit) optionalMarkup = null;

    return (
        <div className={ styles.Cockpit }>
            { optionalMarkup }

            <button
             className={ appliedStyles.join(` `) }
             key="a98ad"
             onClick={ props.toggleCockpit }
             ref={ toggleCockpitBtnRef }
            >Hide Cockpit</button>
        </div>
    );
};


Cockpit.propTypes = {
    showCockpit: propTypes.bool.isRequired,
    showPersons: propTypes.bool.isRequired,
    title: propTypes.string.isRequired,
    switchNameHandler: propTypes.func.isRequired,
    togglePersonsHandler: propTypes.func.isRequired,
    toggleCockpit: propTypes.func.isRequired
}

export default Cockpit;