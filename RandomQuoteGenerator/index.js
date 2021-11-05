class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>I was built with a Class component extending React.Component.</p>
      </div>
    );
  }
}

ReactDOM.render(<Card />, document.getElementById("root"));
