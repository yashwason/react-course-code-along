import React, { Component } from 'react';
import styled from 'styled-components';

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
        const StyledButton = styled.button`
            padding: 10px;
            border-radius: 3px;
            border: 1px solid #f00;
            font-weight: 600;
            font-size: 1.2em;
            margin: 20px;
            color: #fff;
            background: ${ (props) => props.showPersons ? `#f00` : `rgb(10, 156, 10)` };
            transition: all 0.25s;
            
            &:hover{
                background: ${ (props) => props.showPersons ? `salmon` : `rgb(30, 185, 30)` };
                transform: scale(1.05);
            }
        `;
        
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
        }

        return (
            <div className="App">
                <h1>Yash's First React Code</h1>
                <p>This is a paragraph written in JSX</p>

                <StyledButton key="45asd" showPersons={ this.state.showPersons } onClick={() => this.switchNameHandler(`Yash`)}>Switch Names</StyledButton>
                <StyledButton key="465dg" showPersons={ this.state.showPersons } onClick={ this.togglePersonsHandler }>Toggle Persons</StyledButton>

                { persons }
            </div>
        );
    }
}


export default App;