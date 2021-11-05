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

### Extract State Logic to Redux

First, define an action type `ADD` and set it to a const `ADD`. Next, define an action creator `addMessage()` which creates the action to add a message. You'll need to pass a `message` to this action creator and include the message in the returned `action`.

Then create a reducer called `messageReducer()` that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.

```javascript
// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```

### Use Provider to Connect Redux to React

The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux store, actions, and the `DisplayMessages` component. The only new piece is the `AppWrapper` component at the bottom. Use this top level component to render the `Provider` from `ReactRedux`, and pass the Redux store as a prop. Then render the `DisplayMessages` component as a child. Once you are finished, you should see your React component rendered to the page.

Note: React Redux is available as a global variable here, so you can access the Provider with dot notation. The code in the editor takes advantage of this and sets it to a constant `Provider` for you to use in the `AppWrapper` render method.

```javascript
// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }

  // Change code above this line
}
```

### Map State to Props

Create a function `mapStateToProps()`. This function should take `state` as an argument, then return an object which maps that state to specific property names. These properties will become accessible to your component via `props`. Since this example keeps the entire state of the app in a single array, you can pass that entire state to your component. Create a property `messages` in the object that's being returned, and set it to `state`.

```javascript
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};
```

### Map Dispatch to Props

The code editor provides an action creator called `addMessage()`. Write the function `mapDispatchToProps()` that takes `dispatch` as an argument, then returns an object. The object should have a property `submitNewMessage` set to the dispatch function, which takes a parameter for the new message to add when it dispatches `addMessage()`.

```javascript
const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => dispatch(addMessage(message)),
  };
};
```

### Connect Redux to React

The code editor has the `mapStateToProps()` and `mapDispatchToProps()` functions and a new React component called `Presentational`. Connect this component to Redux with the `connect` method from the `ReactRedux` global object, and call it immediately on the `Presentational` component. Assign the result to a new `const` called `ConnectedComponent` that represents the connected component. That's it, now you're connected to Redux! Try changing either of `connect`'s arguments to `null` and observe the test results.



```javascript
const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// Change code below this line
const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
```

### Connect Redux to the Messages App

The code editor has all the code you've written in this section so far. The only change is that the React component is renamed to `Presentational`. Create a new component held in a constant called `Container` that uses `connect` to connect the `Presentational` component to Redux. Then, in the `AppWrapper`, render the React Redux `Provider` component. Pass Provider the Redux `store` as a prop and render `Container` as a child. Once everything is setup, you will see the messages app rendered to the page again.

```javascript

```