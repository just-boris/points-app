import './styles.css';
import React from 'react';

export default function Slider({title}) {
    return (<label className="Slider">
        {title}
        <input type="range"/>
    </label>);
}
