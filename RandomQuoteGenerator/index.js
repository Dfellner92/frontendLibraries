class Card extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        text: "",
        author: ""
      }
    };
    
    const Quotes = {
      First: {
        text: "Quote Num 1",
        author: "George W. Bush"
      }, 
      Second: {
        text: "Quote Num 2",
        author: "Hillary Clinton"
      },
      Third: {
        text: "Quote Num HEE",
        author: "Diary of a Wimpy Kid"
      }
    }
     
    componentWillMount() {
      this.setState({
        text: Quotes[Math.floor(Math.random() * Quotes.length)].text
      })
    };
    
      
    render() {
      return <div >
        <wrapper id="quote-box">
          <h1>Random Quote Generator</h1>
          <div id="text">{this.state.text}</div>
          <div id="author"></div>
          <div id="new-quote"></div>
          <a id="tweet-quote" href="https://www.twitter.com"></a>
        </wrapper>
        
      </div>;
    }
    
};
  
  
 ReactDOM.render(<Card />, document.getElementById("root"));