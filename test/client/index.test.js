import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../client/components/App';

describe('App component', () => {
  it('renders', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
