/* global React, ReactDOM */
/* eslint-disable react/prop-types, react/no-multi-comp */

// eslint-disable-next-line no-unused-vars
const projectName = "drum-machine";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" id="drum-machine">
        <div id="display">Hello</div>
        <div id="q" className="drum-pad">
          Q
        </div>
        <div id="w" className="drum-pad">
          W
        </div>
        <div id="e" className="drum-pad">
          E
        </div>
        <div id="a" className="drum-pad">
          A
        </div>
        <div id="s" className="drum-pad">
          S
        </div>
        <div id="d" className="drum-pad">
          D
        </div>
        <div id="z" className="drum-pad">
          Z
        </div>
        <div id="x" className="drum-pad">
          X
        </div>
        <div id="c" className="drum-pad">
          C
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DrumMachine />, document.getElementById("root"));
