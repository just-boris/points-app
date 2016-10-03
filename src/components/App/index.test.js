import 'jasmine-collection-matchers';
import 'jasmine-enzyme/lib/jest';
import React from 'react';
import {shallow} from 'enzyme';
import App, {skillsReducer} from './';

describe('App', () => {
  describe('<App />', () => {
    function Page(component) {
      this.sliders = () => component.find('Slider');
      this.sliderByKey = key => component.find(`Slider[title="${key}"]`)
    }

    function createComponent() {
      const component = shallow(<App/>);
      const page = new Page(component);
      return {component, page};
    }

    it('should render sliders', () => {
      const {page} = createComponent();

      expect(page.sliders()).toHaveLength(5);
    });

    it('should call update on slider change', () => {
      const key = 'intellect';
      const {page, component} = createComponent();

      expect(page.sliderByKey(key)).toHaveProp('value', 0);
      page.sliderByKey(key).props().onChange(5);
      component.update();

      expect(page.sliderByKey(key)).toHaveProp('value', 5);
    });
  });

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
});
