import './styles.css';
import React, { Component } from 'react';
import Slider from '../Slider';

class App extends Component {
  state = {
    pointsLeft: 10,
    skills: {
      agility: 0,
      charisma: 0,
      strength: 0,
      intellect: 0,
      luck: 0
    }
  }

  render() {
    const {pointsLeft, skills} = this.state;
    return (
      <div className="App">
        <h1 className="App__title">Spend your points</h1>
        <div className="row">
          <div className="row__col">
            Choose wisely, points left:
          </div>
          <div className="row__col row__col_flex">
              <input type="text" className="App__left" value={pointsLeft} />
          </div>
        </div>
        {Object.keys(skills).map(skill =>
          <Slider key={skill} title={skill} value={skills[skill]} />
        )}
      </div>
    );
  }
}

export default App;
