import React from 'react';

const userInput =(props)=> {
    return <input type="text" placeholder="enter the text here...." onChange={props.change}/>;
}
export default userInput;