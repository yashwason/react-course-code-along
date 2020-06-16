import React, { Component } from 'react';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

import styles from './App.css';


class App extends Component{
    state = {
        persons: [
            { id: `a9s87d`, name: `Shaan`, age: 15 },
            { id: `8as9d2`, name: `Sat`, age: 42 },
            { id: `as54ds`, name: `Usha`, age: 44 }
        ],
        showPersons: false
    }

    switchNameHandler = (name) => {
        this.setState({
            persons: [
                { name: name, age: 15 },
                { name: `Sat`, age: 42 },
                { name: `Usha`, age: 44 }
            ]
        });
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    changeNameHandler = (name, id) => {
        const persons = [ ...this.state.persons ];
        const concernedPersonIdex = persons.findIndex((person) => person.id === id);
        persons[concernedPersonIdex].name = name;
        this.setState({ persons });
    }

    removeComponentHandler = (id) => {
        const persons = [ ...this.state.persons ];
        const concernedPersonIdex = persons.findIndex((person) => person.id === id);
        persons.splice(concernedPersonIdex, 1);
        this.setState({ persons });
    }

    render = () => {
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
                 showPersons={ this.state.showPersons }
                 switchNameHandler={ this.switchNameHandler }
                 togglePersonsHandler={ this.togglePersonsHandler } />

                { persons }
            </div>
        );
    }
}


export default App;