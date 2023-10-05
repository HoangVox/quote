import logo from './logo.svg';
import './App.css';
import React from 'react';



fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let randomNum = (Math.floor(Math.random() * (data.length + 1)))
    let text = data[randomNum].text
    let author = data[randomNum].author
    let newAuthor = [];
    for (let i = 0; i < author.length; i++) {
      if (author[i] == ',') 
        break
      newAuthor.push(author[i])
    }
    document.getElementById('text-quote').innerHTML = text
    document.getElementById('text-author').innerHTML = `-${newAuthor.join('')}-`
  });


class QuotesBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorR: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
    this.handleColor = this.handleColor.bind(this)
  }

  handleColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    this.setState({
      colorR : `rgb(${red},${green},${blue})`
    })
    

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let randomNum = (Math.floor(Math.random() * (data.length + 1)))
    let text = data[randomNum].text
    let author = data[randomNum].author
    let newAuthor = [];
    for (let i = 0; i < author.length; i++) {
      if (author[i] == ',') 
        break
      newAuthor.push(author[i])
    }
    document.getElementById('text-quote').innerHTML = text
    document.getElementById('text-author').innerHTML = `-${newAuthor.join('')}-`
  });
  }
  
  
  
  
  
  render() {
        document.body.style.backgroundColor = this.state.colorR
    return <div id='quote_box' style={{backgroundColor: this.state.colorR, boxShadow: `0px 0px 30px 30px rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`}}>
      <div id='text'>
      <span class="material-symbols-outlined">format_quote</span>
      <p id='text-quote'></p>
      <span class="material-symbols-outlined">format_quote</span>
      </div>
      <div id='author'>
        <p id='text-author'></p>
      </div>
      <div id='three_button' >
        <div id='tweet-quote' >
          <button style={{backgroundColor: this.state.colorR}}>
            <a href='twitter.com/intent/tweet' target='_blank'>
            <span class="material-symbols-outlined">raven</span>
            </a>
          </button>
        </div>
        <div id='fb' >
          <button style={{backgroundColor: this.state.colorR}}>
            <a>
            <span class="material-symbols-outlined">attach_file</span>
            </a>
          </button>
        </div>
        <div id='new_quote' >
          <button onClick={this.handleColor} style={{backgroundColor: this.state.colorR, color: 'white'}}>New Quote</button>
        </div>
      </div>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <QuotesBox />
    </div>
  );
}

export default App;
