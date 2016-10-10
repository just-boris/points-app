import './styles.css';
import React from 'react';
import {compose, withReducer, mapProps} from 'recompose';
import skillsReducer from './reducer';
import Slider from '../Slider';

export function App({skills, available, updateSkills}) {
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

App.displayName = 'App';

export default compose(
  withReducer('state', 'updateSkills', skillsReducer, skillsReducer(undefined, {type: 'INIT'})),
  mapProps(props => ({...props, ...props.state}))
)(App);
