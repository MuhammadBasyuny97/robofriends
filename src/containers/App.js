import React from 'react';
import './App.css';
import {robots} from '../robots'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll'
import 'tachyons';

class App extends React.Component {
	constructor(){
		
		super();

		this.state = {
			robots: robots,
			searchfield:''

		}
	}
	componentDidMount(){
		     /*fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}) );*/
				      
	}

	onSearchChange =(event) =>{
		this.setState({searchfield: event.target.value})
	
		
	}

	render(){
        const {robots, searchfield} = this.state;
	      const FilteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		  })


       	return !robots.length ? <h1>Loading</h1> :  //ternary conditional operator
			
	               (
				       <div className = 'tc'>
					       <h1 className= 'f1'>RoboFriends</h1>
					       <SearchBox SearchChange = {this.onSearchChange}
					         SearchField = {searchfield}/>
					        <Scroll> 
					       		<CardList robots = {FilteredRobots} />
					        </Scroll>
				       </div>
		       )
         }

}



export default App;