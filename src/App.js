import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
    state = {
        persons: [
            { name: `Shaan`, age: 15 },
            { name: `Sat`, age: 42 },
            { name: `Usha`, age: 44 }
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

    onChangeHandler = (e) => {
        this.setState({
            persons: [
                { name: e.target.value, age: 15 },
                { name: `Sat`, age: 42 },
                { name: `Usha`, age: 44 }
            ]
        })
    }

    render = () => {
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    <Person
                        name={ this.state.persons[0].name }
                        age={ this.state.persons[0].age }
                        onChangeHandler={ this.onChangeHandler }/>
        
                    <Person
                        name={ this.state.persons[1].name } 
                        age={ this.state.persons[1].age }/>
        
                    <Person
                        name={ this.state.persons[2].name } 
                        age={ this.state.persons[2].age }>
                            I love Indian curry!
                    </Person>
                </div>
            );
        }

        return <div className="App">
            <h1>Yash's First React Code</h1>
            <p>This is a paragraph written in JSX</p>

            <button onClick={() => this.switchNameHandler(`Yash`)}>Switch Names</button>
            <button onClick={ this.togglePersonsHandler }>Toggle Persons</button>

            { persons }
        </div>
    }
}


export default App;