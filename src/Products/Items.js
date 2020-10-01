import React from 'react';


const Items =(props)=>{
    return<div>
        <div>{props.image}</div>
        <div><h3>{props.name}</h3></div>
        <div>{props.price}</div>
    </div>
}
export default Items;