import './styles.css';
import React from 'react';
import {compose, withState, mapProps} from 'recompose';
import Slider from '../Slider';

const initialSkills = {
  agility: 0,
  charisma: 0,
  strength: 0,
  intellect: 0,
  luck: 0
};
const maxAvailable = 10;

function App({available, skills, setSkills}) {
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
          onChange={value => setSkills({...skills, [skill]: value})} />
      )}
    </div>
  );
}

export default compose(
  withState('skills', 'setSkills', initialSkills),
  mapProps(({skills, ...props}) => {
    const totalSpent = Object.keys(skills).reduce((total, skill) => total + skills[skill], 0);
    return {
      skills, ...props,
      available: maxAvailable - totalSpent
    }
  })
)(App);
