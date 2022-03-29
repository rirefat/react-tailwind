import React from 'react';
import './Link.css'

const Link = (props) => {
    const {name, link} = props.route;
    // console.log(link)
    return (
        <li className='mr-6'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;