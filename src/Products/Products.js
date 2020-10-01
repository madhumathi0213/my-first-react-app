import React,{Component} from 'react';
import './Products.css';
import {ProductItem} from '../ProductList';


class Products extends Component
{
    state={ProductItem:ProductItem}
    render() {
        const item = this.state.ProductItem.map(item => (
        <div className="Product">
            <div><img src={item.image}></img></div>
            <div>{item.name}</div>
            <div>{item.price}</div>
        </div>
        ))
        return(<div>{item}</div>)
    }    
}
export default Products;