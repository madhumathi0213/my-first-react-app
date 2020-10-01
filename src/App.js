import React,{Component} from 'react';
import './App.css';
import Header from './header/Header.js';
import Products from './Products/Products';
import {ProductItem} from './ProductList';

class App extends Component {
  
  state={
    ProductItem:ProductItem,
    search:null,
    search_price:null
}
searchHandler=(event)=>{
    let text=event.target.value;
    this.setState({search:text})
}
searchPrice=(event)=>{
  let price =event.target.value;
  this.setState({search_price:price})
}
SearchFilterHandler=()=>{
     
    return this.state.ProductItem.filter((item)=> item.name.toLowerCase().includes(this.state.search));
}
SearchByPriceHandler=()=>{
    return this.state.ProductItem.filter((item) =>item.price >= this.state.search_price);
}
 render(){
  let items=this.state.ProductItem;
  let items1=this.state.ProductItem;
  if(this.state.search != null)
  {
  items = this.SearchFilterHandler()
  }
  if(this.state.search_price != null)
  {
    items1=this.SearchByPriceHandler()
  }
    return (
      <fragment>
        <Header search={this.searchHandler} search_price={this.SearchFilterHandler}/>
        <Products item={items} price={items1}/>
      </fragment>
    )
  }
}

export default App;
