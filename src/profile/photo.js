import React from 'react';
import './photo.css';

const Photo = (props) => {
    
    return (
    <div>
        <img src={props.src}/>
        {props.children}
    </div>
    )
}
export default Photo ;