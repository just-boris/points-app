import React from 'react';
import {shallow} from 'enzyme';
import Slider from './';

describe('<Slider />', () => {
  function Page(component) {
    this.input = () => component.find('input');
  }

  function createComponent() {
    const onChange = jest.fn();
    const component = shallow(<Slider title="test" value={5} onChange={onChange} />)
    const page = new Page(component);
    return {component, page, onChange};
  }

  it('should render slider', () => {
    const {component} = createComponent();
    expect(component.get(0)).toMatchSnapshot();
  });

  it('should call handler when value was changed', () => {
    const {page, onChange} = createComponent();

    page.input().simulate('change', {target: {value: '3'}});

    expect(onChange).toBeCalledWith(3);
  })
});
