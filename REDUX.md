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

