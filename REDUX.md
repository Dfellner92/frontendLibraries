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
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action;
}
```


### Dispatch an Action Event

The Redux store in the code editor has an initialized state that's an object containing a `login` property currently set to `false`. There's also an action creator called `loginAction()` which returns an action of type `LOGIN`. Dispatch the `LOGIN` action to the Redux store by calling the `dispatch` method, and pass in the action created by `loginAction()`.

```javascript
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
```