### Getting Started with React Redux

Start with a `DisplayMessages` component. Add a constructor to this component and initialize it with a state that has two properties: `input`, that's set to an empty string, and `messages`, that's set to an empty array.

```javascript
class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}
```

### Manage State Locally First

First, in the `render()` method, have the component render an `input` element, `button` element, and `ul` element. When the input element changes, it should trigger a `handleChange()` method. Also, the `input` element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

```javascript
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  submitMessage() {
    this.setState({
      messages: [...this.state.messages, this.state.input],
    });
    this.setState({
      input: "",
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.submitMessage.bind(this)}>Submit Message</button>
        <ul>
          {this.state.messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
```
