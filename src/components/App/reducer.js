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

export default function skillsReducer(state = initialState, action) {
  if(action.type === 'UPDATE') {
    const delta = state.skills[action.skill] - action.value;
    const available = state.available + delta;
    const skills = {...state.skills, [action.skill]: action.value};
    return available < 0 ? state : { skills, available };
  }
  return state;
}
