import 'jasmine-collection-matchers';
import 'jasmine-enzyme/lib/jest';
import React from 'react';
import {shallow} from 'enzyme';
import App from './';

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
