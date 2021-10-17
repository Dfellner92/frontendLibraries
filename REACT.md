### Render State in the User Interface Another Way

In the `MyComponent` render method, define a `const` called `name` and set it equal to the name value in the component's `state`. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces.

Next, in the return statement, render this value in an `h1` tag using the variable `name`. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

### Set State with this.setState

There is a `button` element in the code editor which has an `onClick()` handler. This handler is triggered when the `button` receives a click event in the browser, and runs the `handleClick` method defined on `MyComponent`. Within the `handleClick` method, update the component `state` using `this.setState()`. Set the `name` property in `state` to equal the string `React Rocks!`.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: 'React Rocks!'
    })
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```