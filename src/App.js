import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/container/Menu";
import {Button} from "./components/presentational/Button";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      animationInterval: 20
    };

    this.speedUp = this.speedUp.bind(this);
    this.slowDown = this.slowDown.bind(this);

  }

  speedUp(){
    if(this.state.animationInterval > 1.31){
      this.setState(() => ({
        animationInterval: this.state.animationInterval - 1
      }))
    }
  }

  slowDown(){
    this.setState(() => ({
      animationInterval: this.state.animationInterval + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{animation: `App-logo-spin infinite ${this.state.animationInterval}s linear`}}
          />
          <div>
            <Button name="Speed up" speed={this.speedUp}/>
            <Button name="Slow down" speed={this.slowDown}/>
            <Button name="Sport" speed={()=>this.setState({animationInterval: 0.3})}/>
          </div>
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
