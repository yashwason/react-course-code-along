import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person) => {
    return (
        <Person
         name={ person.name }
         age={ person.age }
         key={ person.id }
         changeNameHandler={ (e) => { props.changeNameHandler(e.target.value, person.id) } }
         removeComponentHandler={ () => { props.removeComponentHandler(person.id) } } />
    );
});

export default Persons;