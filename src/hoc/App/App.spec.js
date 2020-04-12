import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

let wrapper;
let mountWrapper;

beforeAll(() => {
  wrapper = shallow(<App />);
  mountWrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

describe('<App/>', () => {
  it('renders correctly', () => {
    expect(wrapper.children.length).toBe(1);
  });

  it('should render App with reactRoutes and children', () => {
    const app = mountWrapper.find(App);
    expect(app).toHaveLength(1);
    expect(app.children).toHaveLength(1);
  });

  it('renders learn react link', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(container).toMatchInlineSnapshot(`<div />`);
  });
});
