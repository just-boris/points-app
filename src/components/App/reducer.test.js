import skillsReducer from './reducer';

describe('skillsReducer', () => {
  it('update skills with value', () => {
    const finalState = [
      {type: 'INIT'},
      {type: 'UPDATE', skill: 'charisma', value: 5},
      {type: 'UPDATE', skill: 'stamina', value: 4}
    ].reduce(skillsReducer, undefined);
    expect(finalState).toEqual({
      skills: {
        agility: 0,
        charisma: 5,
        intellect: 0,
        stamina: 4,
        strength: 0
      },
      available: 1
    });
  });

  it('should not allow to update when there is no more available points', () => {
    const finalState = [
      {type: 'INIT'},
      {type: 'UPDATE', skill: 'charisma', value: 5},
      {type: 'UPDATE', skill: 'stamina', value: 5},
      {type: 'UPDATE', skill: 'strength', value: 1}
    ].reduce(skillsReducer, undefined);
    expect(finalState).toEqual({
      skills: {
        agility: 0,
        charisma: 5,
        intellect: 0,
        stamina: 5,
        strength: 0
      },
      available: 0
    });
  });
});
