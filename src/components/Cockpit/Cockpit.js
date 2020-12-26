import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let assignedClasses = []; // red bold
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;    
    }
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red); 
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold); // red bold
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hello Moto</h1>
        <p className={assignedClasses.join(' ')}> This is really working!</p>
        <button className={btnClass} onClick={props.clicked}> Switch Name </button>       
     
    </div>
      );
}

export default cockpit;