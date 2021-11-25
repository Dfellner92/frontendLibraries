/* global React, ReactDOM */
/* eslint-disable react/prop-types, react/no-multi-comp */

// eslint-disable-next-line no-unused-vars
const projectName = 'drum-machine';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: ["Q", "W", "A", "E", "S", "D", "Z", "X", "C"]
    };
  }
 
  render() {
    const { keys } = this.state
    
    return (
      <div id="drum-machine">
        <div id="display">{keys.map((key) => (
            <div>{key}</div>
          ))}</div>
      </div>
    )
  }
}

 

ReactDOM.render(<App />, document.getElementById('root'));
