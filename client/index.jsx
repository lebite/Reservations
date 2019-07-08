import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // make API calls
  }

  render() {
    return (<div>
      <h1>Reservation Module</h1>
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('reservation'));