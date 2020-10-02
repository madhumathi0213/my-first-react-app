import React,{Component} from 'react';
import './App.css';
import Header from './Header.js';
import {ProductItem} from './ProductList';
import Products from './Products';

class App extends Component {
  
  state={
    item: ProductItem,  
    search:null,
    search_price:null
}
searchHandler=(event)=>{
    let text=event.target.value;
    // this.setState({search:text})
    const i= ProductItem.filter((item)=> item.name.toLowerCase().includes(text));
    this.setState({item:i})
    // console.log("i",i);

}
searchPrice=(event)=>{
  let price =event.target.value;
  // this.setState({search_price:price})
  const j= ProductItem.filter((item) =>item.price >= price);
    this.setState({item:j})
    // console.log("j",j);

}
 render(){

    return (
      <fragment>
        <Header search={this.searchHandler} search_price={this.searchPrice}/>
        <Products  item={this.state.item}/>
      </fragment>
    )
  }
}

export default App;
