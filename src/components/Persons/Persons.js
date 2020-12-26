import React from 'react';
import Person from './Person/Person'

const persons = (props) => 
    props.persons.map((person, index) => {
        return <Person
         name={person.name}
         score={person.score} 
         click={() => props.clicked(index)} 
         key={person.id} 
         change={(event) => props.changed(event, person.id)}>
    </Person>
      }
);

export default persons;

