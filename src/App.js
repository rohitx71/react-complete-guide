import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

class App extends Component {

    
    state = {
      persons: [
        { id: 'fggs1', name: 'Max', score: 28},
        { id: 'ffdfsdfs2', name: 'Maxy', score: 248},
        { id: 'ffsfs3', name: 'Maxwell', score: 128},
      ],
      test: [],
      showPersons: false
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({
        persons: persons
      })
    }

    
    render() {
      let persons = null;
      let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} score={person.score} click={() => this.deletePersonHandler(index)} key={person.id} change={(event) => this.nameChangedHandler(event, person.id)}>            </Person>
          })}
      </div> 
      )
      btnClass = classes.Red;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let assignedClasses = []; // red bold
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red); 
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // red bold
    }
    
      return (

      <div className={classes.App}>
       <h1>Hello Moto</h1>
       <p className={assignedClasses.join(' ')}> This is really working!</p>
       <button className={btnClass} onClick={this.togglePersonsHandler}> Switch Name </button>       
       {persons}
    
     </div>

      );
    }

    // return React.createElement('div', null, React.createElement('h1', {'className': 'App'}, 'this is h1'));
  }


export default App;
