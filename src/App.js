import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <Post title={'Harry Potter and the Goblet of Fire'} author={'J.K. Rowling'} body={'The 4th installment in the Harry Potter series.'} comments={['Great read!', 'Amazing.', 'Way too pre-teeny.']}/>
      </div>
    );
  }
}

export default App;
