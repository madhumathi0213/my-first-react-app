import React,{Component} from 'react';
import logo from './logo.png';
import './Header.css';
import {ProductItem} from '../ProductList';
class Header extends Component
{
    state={
        ProductItem:ProductItem,
        search:null
    }
    searchHandler=(event)=>{
        let text=event.target.value;
        this.setState({search:text})
    }
    SearchFilterHandler=()=>{
        let items=this.state.ProductItem;
        if(this.state.search != "") {
             items=items.filter((item)=> item.name.includes(this.state.search))
        }
        return items;
    }
    render() {
        const filteredList = this.SearchFilterHandler()
        const item = filteredList.map(item => (
            <div className="Product">
                <div><img src={item.image}></img></div>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
            ))
        return(
        <div className="header">
            <div className="top-bar">
                <img src={logo}></img>
                <input type="text" placeholder="search" onChange={(event)=>this.searchHandler(event)}></input>
                <ul>
                    <li>Skin Care</li>
                    <li>Hair Care</li>
                    <li>Oral Care</li>
                    <li>Baby Care</li>
                </ul>
                <div>{item}</div>
            </div>
        </div>);
    }

}
export default Header;