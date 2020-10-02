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
                </div>
                <div >
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price}</p>
                </div>
                <div><h6>Quantity</h6></div>

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