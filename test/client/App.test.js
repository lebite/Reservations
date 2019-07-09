import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../client/components/App';

describe('App component', () => {
  it('renders all three sections', () => {
    const component = renderer.create(<App />);
    const json = component.toJSON();
    expect(json.children[0].children).toHaveLength(3);
    expect(json).toMatchSnapshot();
  });
});
