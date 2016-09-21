import './styles.css';
import React from 'react';
import {compose, withReducer, mapProps} from 'recompose';
import Slider from '../Slider';

function App({skills, available, updateSkills}) {
  return (
    <div className="App">
      <h1 className="App__title">Spend your points</h1>
      <div className="row">
        <div className="row__col">
          Choose wisely, points left:
        </div>
        <div className="row__col row__col_flex">
            <input type="text" className="App__left" readOnly value={available} />
        </div>
      </div>
      {Object.keys(skills).map(skill =>
        <Slider key={skill} title={skill} value={skills[skill]}
          onChange={value => updateSkills({type: 'UPDATE', skill, value})} />
      )}
    </div>
  );
}

const initialState = {
  skills: {
    agility: 0,
    charisma: 0,
    strength: 0,
    intellect: 0,
    stamina: 0
  },
  available: 10
};

export function skillsReducer(state = initialState, action) {
  if(action.type === 'UPDATE') {
    const delta = state.skills[action.skill] - action.value;
    const available = state.available + delta;
    const skills = {...state.skills, [action.skill]: action.value};
    return available < 0 ? state : { skills, available };
  }
  return state;
}

export default compose(
  withReducer('state', 'updateSkills', skillsReducer, skillsReducer(undefined, {type: 'INIT'})),
  mapProps(props => ({...props, ...props.state}))
)(App);
