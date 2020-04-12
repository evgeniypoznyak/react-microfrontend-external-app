import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { mount, shallow } from 'enzyme';

let wrapper;
let mountWrapper;

beforeAll(() => {
  wrapper = shallow(<Home />);
  mountWrapper = mount(<Home />);
});

describe('<Home/>', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
    expect(wrapper.children.length).toBe(1);
  });

  it('Should contain text "external" and "Hi" ', () => {
    const { container } = render(<Home />);
    expect(screen.getByText(/external/i).textContent).toContain('Hi');
    expect(container.firstChild.textContent).toContain('Hi');
  });

  it('should render Home with children', () => {
    const app = mountWrapper.find(Home);
    expect(app).toHaveLength(1);
    expect(app.children).toHaveLength(1);
  });
});
