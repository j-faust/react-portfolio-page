// importing React
import React from 'react';
// importing card styling and boostrap style
import '../styles/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// exporting the card function and using props to dynamicalls generate cards
export default function Card(props) {
    return (
        <div className='card text-center shadow'>
            <div className='overflow'>
            <a href={props.projlink}>
                <img src={props.imgsrc} alt="Web App Icons" className='card-img-top' />
            </a>
            </div>
            <div className='card-body text-dark'>
                <h2 className='card-title'>{props.title}</h2>
                <p className='card-text text-secondary'>
                    {props.projdesc}
                </p>
            </div>
        </div>
    );
}
