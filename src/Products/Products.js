import React,{Component} from 'react';
import './Products.css';


class Products extends Component
{
    render() {
        const Product_Item =this.props.item;
        const price=this.props.price;
        console.log(price);
        const items =price.map(item => (
            <div className="Products">
                <div>
                    <img src={item.image}></img>
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                </div>
            </div>
        ))
        const item = Product_Item.map(item => (
            <div className="Products">
                <div>
                    <img src={item.image}></img>
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                </div>
            </div>
            ))
        return(
        <div>{item},{items}</div>
        )
    }    
}
export default Products;