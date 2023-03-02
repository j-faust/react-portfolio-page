import React from 'react';
// importing card styling
import '../../styles/Card.css';

export default function Card(props) {
    <div className='card'>
        <div className='card-content'>
            <img src={props.img} alt="Web App Icons"/>
            <h2>{props.title}</h2>
        </div>
    </div>
}