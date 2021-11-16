/* globals marked, Prism, React, ReactDOM */
/* eslint-disable react/prop-types, no-nested-ternary */

// View a more complex version of this project with custom toolbar here:
// https://codepen.io/no_stack_dub_sack/pen/JbPZvm?editors=0110

// coded by @no-stack-dub-sack (github) / @no_stack_sub_sack (Codepen)

// eslint-disable-next-line no-unused-vars
const projectName = "markdown-previewer";

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      preview: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} id="editor"></textarea>
        <div
          dangerouslySetInnerHTML={{
            __html: marked(this.state.preview, { renderer: renderer }),
          }}
          id="preview"
        ></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
