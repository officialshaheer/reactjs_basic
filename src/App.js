import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

	state = {
		persons: [
		{ name: 'Manu', age: 27 },
		{ name: 'Meenu', age: 19 },	
		{ name: 'Stephanie', age: 29 },
		]	
	}

	switchNameHandler = (newName) => {
		// console.log('was clicked!');
		this.setState( {

				persons: [
				{ name: newName, age: 27 },
				{ name: 'Meenu', age: 19 },	
				{ name: 'Stephanie', age: 26 },
				]
		} )
	}

	nameChangedHandler = (event) => {
		// console.log('was clicked!');
		this.setState( {

				persons: [
				{ name: 'Manu', age: 27 },
				{ name: event.target.value, age: 29 },	
				{ name: 'Stephanie', age: 29 },
				]
		} )
	}



	render() {

		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};


  // Single element creation
  return (
    <div className="App">
      <h1>Hi, Im a React App</h1>
      <p>This is really working! </p>
      <button style={style} onClick={ () => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} />      
      <Person
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age} 
       click={this.switchNameHandler.bind(this, 'Max!')}
       changed={this.nameChangedHandler}>My Hobbies : Drumming </Person>
      <Person
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age} />

    </div>

  );
  
//   //infinite element creation 
// return React.createElement ('div', { className: 'App' } , React.createElement('h1','null','Does this work now?') );

	}
}
export default App;
