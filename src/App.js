import React,{Component} from 'react';
import './App.css';
import Header from './header/Header.js';
import Products from './Products/Products';
class App extends Component {
  
  usernameHandler = (event) => {
    this.setState({username:event.target.value});
  }
  render(){
    return (
      <fragment>
        <Header/>
        <Products/>
      </fragment>
    )
  }
}

export default App;
