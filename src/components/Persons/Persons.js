import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    render = () => {
        console.log(`[Persons.js] render`);

        return this.props.persons.map((person) => {
            return (
                <Person
                name={ person.name }
                age={ person.age }
                key={ person.id }
                id={ person.id }
                changeNameHandler={ (e) => { this.props.changeNameHandler(e.target.value, person.id) } }
                removeComponentHandler={ () => { this.props.removeComponentHandler(person.id) } } />
            );
        });
    }
}

export default Persons;