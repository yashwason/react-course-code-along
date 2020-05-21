import React, { Component } from 'react';

import Person from './Person/Person';
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
        let persons = null,
            appliedStyles = [];
        if(this.state.showPersons){
            persons = (
                <div>
                    { this.state.persons.map((person) => {
                        return <Person
                        name={ person.name }
                        age={ person.age }
                        key={ person.id }
                        changeNameHandler={ (e) => { this.changeNameHandler(e.target.value, person.id) } }
                        removeComponentHandler={ () => { this.removeComponentHandler(person.id) } }/>
                    }) }
                </div>
            );

            appliedStyles.push(styles.clicked);
        }

        return (
            <div className={ styles.App }>
                <h1>Yash's First React Code</h1>
                <p>This is a paragraph written in JSX</p>

                <button className={ appliedStyles.join(` `) } key="45asd" onClick={() => this.switchNameHandler(`Yash`)}>Switch Names</button>
                <button className={ appliedStyles.join(` `) } key="465dg" onClick={ this.togglePersonsHandler }>Toggle Persons</button>

                { persons }
            </div>
        );
    }
}


export default App;