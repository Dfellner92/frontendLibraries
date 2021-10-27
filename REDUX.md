### Create a Redux Store

The Redux `store` is an object which holds and manages application `state`. There is a method called `createStore()` on the Redux object, which you use to create the Redux store. This method takes a `reducer` function as a required argument. The `reducer` function is covered in a later challenge, and is already defined for you in the code editor. It simply takes `state` as an argument and returns `state`.

Declare a `store` variable and assign it to the `createStore()` method, passing in the `reducer` as an argument.

```javascript
const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);
```

### Get State from the Redux Store

The code from the previous challenge is re-written more concisely in the code editor. Use `store.getState()` to retrieve the `state` from the `store`, and assign this to a new variable `currentState`.

```javascript
const store = Redux.createStore((state = 5) => state);

// Change code below this line
const currentState = store.getState();
```

### Define a Redux Action

Writing a Redux action is as simple as declaring an `object` with a type property. Declare an object action and give it a property `type` set to the string `'LOGIN'`.

```javascript
// Define an action here:
const action = {
  type: "LOGIN",
};
```

### Define an Action Creator

Define a function named `actionCreator()` that returns the `action` object when called.

```javascript
const action = {
  type: "LOGIN",
};
// Define an action creator here:
function actionCreator() {
  return action;
}
```

### Dispatch an Action Event

The Redux store in the code editor has an initialized state that's an object containing a `login` property currently set to `false`. There's also an action creator called `loginAction()` which returns an action of type `LOGIN`. Dispatch the `LOGIN` action to the Redux store by calling the `dispatch` method, and pass in the action created by `loginAction()`.

```javascript
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());
```

### Handle and Action in the Store

The code editor has the previous example as well as the start of a `reducer` function for you. Fill in the body of the `reducer` function so that if it receives an action of type `'LOGIN'` it returns a state object with `login` set to `true`. Otherwise, it returns the current `state`. Note that the current state and the dispatched `action` are passed to the reducer, so you can access the action's type directly with `action.type`.

```javascript
const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: true };
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
```

### Use a Switch Statement to Handle Multiple Actions

The code editor has a store, actions, and action creators set up for you. Fill in the `reducer` function to handle multiple authentication actions. Use a JavaScript `switch` statement in the `reducer` to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over `action.type` and return the appropriate authentication state.

Note: At this point, don't worry about state immutability, since it is small and simple in this example. For each action, you can return a new object — for example, `{authenticated: true}`. Also, don't forget to write a `default` case in your switch statement that returns the current `state`. This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer. In such a case, you want to make sure that you return the current `state`.

```javascript
const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return { ...state, authenticated: true };
    case "LOGOUT":
      return { ...state, authenticated: false };
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
```

### Use const for Action Types

Declare `LOGIN` and `LOGOUT` as `const` values and assign them to the strings `'LOGIN'` and `'LOGOUT'`, respectively. Then, edit the `authReducer()` and the action creators to reference these constants instead of string values.

Note: It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

```javascript
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
```

### Register a Store Listener

Write a callback function that increments the global variable `count` every time the store receives an action, and pass this function in to the `store.subscribe()` method. You'll see that `store.dispatch()` is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.

```javascript
const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {
  return count++;
});
// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
```

### Combine Multiple Reducers

There are `counterReducer()` and `authReducer()` functions provided in the code editor, along with a Redux store. Finish writing the `rootReducer()` function using the `Redux.combineReducers()` method. Assign `counterReducer` to a key called `count` and `authReducer` to a key called `auth`.

```javascript
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store = Redux.createStore(rootReducer);
```

### Send Action Data to the Store

There's a basic `notesReducer()` and an `addNoteText()` action creator defined in the code editor. Finish the body of the `addNoteText()` function so that it returns an `action` object. The object should include a `type` property with a value of `ADD_NOTE`, and also a `text` property set to the `note` data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.

Next, finish writing the `switch` statement in the `notesReducer()`. You need to add a case that handles the `addNoteText()` actions. This case should be triggered whenever there is an action of type `ADD_NOTE` and it should return the `text` property on the incoming `action` as the new `state`.

The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store `state`.

```javascript
const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());
```

### 