import React,{Component} from 'react';
import './Products.css';
import App  from "./App";

class Products extends Component
{
    render() {
        // console.log("i",this.props.i);
        // console.log("j",this.props.j);
        console.log("item",this.props.item);

        const item =this.props.item.map(item => (
            <div className="Products">
                <div>
                    <img src={item.image}></img>
                    <h1>{item.name}</h1>
                    <h4>{item.price}</h4>
                </div>
            </div>
            ))
         return(
        <div>
            {item}
            {/* {this.props.item.map(item=>console.log(item))} */}
        </div>
        )
    }    
}
export default Products;