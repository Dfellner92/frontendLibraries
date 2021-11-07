class Card extends React.Component {
  
    constructor(props) {
      super(props)
    }
    
     
    componentWillMount() {
      
    }
    
      
    render() {
      return <div >
        <wrapper id="quote-box">
          <h1>Random Quote Generator</h1>
          <div id="text"></div>
          <div id="author"></div>
          <div id="new-quote"></div>
          <a id="tweet-quote" href="https://www.twitter.com"></a>
        </wrapper>
        
      </div>;
      }
    
  }
  
  
  ReactDOM.render(<Card />, document.getElementById("root"));