import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

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
        const buttonStyle = {
            padding: `10px`,
            borderRadius: `3px`,
            border: `1px solid #f00`,
            fontWeight: 600,
            fontSize: `1.2em`,
            margin: `20px`,
            color: `#fff`,
            background: `rgb(10, 156, 10)`
        };
        
        let persons = null;
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

            buttonStyle.background = `#f00`;
        }

        const classList = [];
        if(this.state.persons.length <= 1){
            classList.push(`bold`);
        }
        if(this.state.persons.length <= 2){
            classList.push(`red`);
        }

        return <div className="App">
            <h1>Yash's First React Code</h1>
            <p className={ classList.join(` `) }>This is a paragraph written in JSX</p>

            <button style={ buttonStyle } onClick={() => this.switchNameHandler(`Yash`)}>Switch Names</button>
            <button style={ buttonStyle } onClick={ this.togglePersonsHandler }>Toggle Persons</button>

            { persons }
        </div>
    }
}


export default App;