import React from 'react'
import {ListItem} from "../presentational/ListElement";
import {Basket} from "../presentational/Basket";

class Menu extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fruits: ['Apple 🍎', 'Pear 🍐', 'Carrot 🥕', 'Pepper 🌶', 'Orange 🍊'],
      hasFruits: 'fruits',
      isBasketFul: false,
      basketText: ''
    };

    this.takeFruits = this.takeFruits.bind(this);
  }

  takeFruits(){
    if(!this.state.isBasketFul){
      this.setState({
        hasFruits: 'nothing',
        isBasketFul: true,
        basketText: 'You have fill the basket!'
      })
    }
    else{
      this.setState({
        hasFruits: 'fruits',
        isBasketFul: false,
        basketText: 'Basket is empty'
      })
    }
  }

  render(){
    return(
      <div className="container">
        <div className="fruits-container">
          <h3>Shopping products</h3>
          {
            this.state.fruits.map((fruit) =>
            <ListItem
              fruit={fruit}
              key={fruit}
              show={this.state.hasFruits}
            />
          )}
        </div>
        <Basket takeFruits={this.takeFruits} message={this.state.basketText}/>
      </div>
    )
  }
}

export default Menu;