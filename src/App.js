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
     
    return this.state.ProductItem.filter((item)=> item.name.includes(this.state.search));
}
searchPriceHandler=(event) =>{
  let price=event.target.value;
  this.setState({search_price:price})
}
// SearchByPriceHandler=()=>{
//   return this.state.ProductItem.filter((item)=>item.price<=this.state.search_price);
// }
 render(){
  let items=this.state.ProductItem;
  if(this.state.search != "")
  {
  items = this.SearchFilterHandler()
  }
  // if(this.state.search_price!=="")
  // {
  //   items =this.SearchByPriceHandler()
  // }
     return (
      <fragment>
        <Header search={this.searchHandler}/>
        <Products item={items} price={items}/>
      </fragment>
    )
  }
}

export default App;
