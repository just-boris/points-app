import './styles.css';
import React from 'react';

export default function Slider({title, value, onChange}) {
  return (<label className="Slider row">
    <div className="row__col Slider__title">{title}</div>
    <div className="row__col row__col_flex">
      <input type="range" max={10} className="Slider__control" value={value} onChange={e => onChange(+e.target.value)} />
    </div>
    <div className="row__col">
      {value} pts
    </div>
  </label>);
}
