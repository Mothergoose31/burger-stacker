import React from 'react';
import IngredientList from './IngredientList'
import './App.css';
import BurgerPane from './BurgerPane'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ],
  stack: []
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.clearStack = this.clearStack.bind(this);

  }
  clearStack(){
    this.setState({
      stack:[]
    })
  }
  addIngredient(e,i){
    e.preventDefault();

    const stackCopy = Array.from(this.state.stack);
    stackCopy.push(this.state.ingredients[i]);
    
    this.setState({
      stack:stackCopy
    })
    
        
      }
  render(){
    
    

    return(
    
      <body>
        <h1>Make a Burger!</h1>
        <div class = 'ingredients'> 
          < IngredientList ingredients = {this.state.ingredients}/>
        </div> 
        <div class = 'burgerpane'>
          <BurgerPane stack = {this.state.stack}/>
          <button name = 'clear' onClick ={this.clearStack } > Clear</button>
        </div>
      </body>
    )
  }
}

export default App;
