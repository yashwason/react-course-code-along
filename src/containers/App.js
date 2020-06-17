import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid/dist/index';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

import styles from './App.css';


class App extends Component{
    state = {
        persons: [
            { name: `Shaan`, age: 15, id: uuidv4() },
            { name: `Usha`, age: 44, id: uuidv4() },
            { name: `Sat`, age: 42, id: uuidv4() }
        ],
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log(`[App.js] getDerivedStateFromProps`);
        return null;
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log(`[App.js] shouldComponentUpdate`);
        return true;
    }

    componentDidMount = () => {
        console.log(`[App.js] componentDidMount`);
    }

    render = () => {
        console.log(`[App.js] render`);

        let persons = null;
        if(this.state.showPersons){
            persons = <Persons
                persons={ this.state.persons }
                changeNameHandler={ this.changeNameHandler }
                removeComponentHandler={ this.removeComponentHandler } />
        }


        return (
            <div className={ styles.App }>
                <Cockpit
                 title={ this.props.appTitle }
                 showPersons={ this.state.showPersons }
                 switchNameHandler={ this.switchNameHandler }
                 togglePersonsHandler={ this.togglePersonsHandler }
                 toggleCockpit={ this.toggleCockpitHandler }
                 showCockpit={ this.state.showCockpit } />

                { persons }
            </div>
        );
    }



    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: `Yash`, age: 15, id: uuidv4() },
                { name: `Sat`, age: 42, id: uuidv4() },
                { name: `Usha`, age: 44, id: uuidv4() }
            ]
        });
    }

    togglePersonsHandler = () => {
        this.setState((prevState, props) => {
            return { showPersons: !prevState.showPersons }
        });
    }

    changeNameHandler = (name, id) => {
        this.setState((prevState, props) => {
            const { persons, concernedPersonIdex } = this.findPersonIndex(prevState, id);
            persons[concernedPersonIdex].name = name;
            
            return { persons };
        });
    }

    removeComponentHandler = (id) => {
        this.setState((prevState, props) => {
            const { persons, concernedPersonIdex } = this.findPersonIndex(prevState, id);
            persons.splice(concernedPersonIdex, 1);
            
            return { persons };
        });
    }

    toggleCockpitHandler = () => {
        this.setState((prevState, props) => {
            return { showCockpit: !prevState.showCockpit }
        });
    }

    findPersonIndex = (state, id) => {
        const persons = [ ...state.persons ];
        const concernedPersonIdex = persons.findIndex((person) => person.id === id);

        return { persons, concernedPersonIdex };
    }
}


export default App;