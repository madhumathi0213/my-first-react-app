import React,{Component} from 'react';
import './Products.css';


class Products extends Component
{
    render() {
        const Product_Item =this.props.item;
        console.log(Product_Item);
        const item = Product_Item.map(item => (
            <div className="Product">
                <div><img src={item.image}></img></div>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
            ))
            console.log(item);
        return(<div>{item}</div>)
    }    
}
export default Products;