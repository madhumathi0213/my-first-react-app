import React,{Component} from 'react';
import logo from './logo.png';
import './Header.css';
class Header extends Component
{
    render() {
        return(
        <div className="header">
            <div className="top-bar">
                <img src={logo}></img>
                <input type="text" placeholder="search" onChange={this.props.search}></input>
                <input type="number" placeholder="search by price" onChange={this.props.search_price}></input>
                <ul>
                    <li>Skin Care</li>
                    <li>Hair Care</li>
                    <li>Oral Care</li>
                    <li>Baby Care</li>
                </ul>
            </div>
        </div>);
    }

}
export default Header;