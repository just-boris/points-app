import './styles.css';
import React from 'react';

export default function Slider({title, value}) {
  return (<label className="Slider row">
    <div className="row__col Slider__title">{title}</div>
    <div className="row__col row__col_flex">
      <input type="range" className="Slider__control" value={value} />
    </div>
    <div className="row__col">
      {value} pts
    </div>
  </label>);
}
