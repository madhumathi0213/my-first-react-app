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
SearchFilterHandler=()=>{
     
    return this.state.ProductItem.filter((item)=> item.name.toLowerCase().includes(this.state.search));
}
SearchByPriceHandler=()=>{
  let it=this.state.ProductItem.filter((item) =>item.price.contains(this.state.search_price));
}
 render(){
  let items=this.state.ProductItem;
  if(this.state.search != null)
  {
  items = this.SearchFilterHandler()
  }
  if(this.state.search_price != null)
  {
    
  }
    return (
      <fragment>
        <Header search={this.searchHandler} search_price={this.SearchFilterHandler}/>
        <Products item={items}/>
      </fragment>
    )
  }
}

export default App;
