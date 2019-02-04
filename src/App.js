import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

class App extends Component {
  state = {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    body: 'The 4th installment in the Harry Potter series.',
    comments: ['Great read!', 'Amazing.', 'Way too pre-teeny.']
  }

  handleClick = () => {
    console.log(' handled click');
  }

  render() {
    const {title, author, body, comments} = this.state;
    return (
      <div className="App">
        <Post title={title} author={author} body={body} comments={comments} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
