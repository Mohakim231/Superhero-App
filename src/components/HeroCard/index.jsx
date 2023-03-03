import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = (id, name, alter, gender, height, weight, eye, hair, occupation, base) => {

    return (
        <div className='hero-card'>
            <h3><Link to={`/heroes/:id`}>{name}</Link></h3>
            <p>Info:</p>
            <li></li>
        </div>
    )
}