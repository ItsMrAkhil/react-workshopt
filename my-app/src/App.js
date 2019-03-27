import React, { Component } from 'react';
import SearchItem from './SearchItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SearchItem imgUrl="https://via.placeholder.com/50X50" name="Taylor Swfit" />
        <SearchItem imgUrl="https://via.placeholder.com/100X100" name="Bruno Mars" />
      </div>
    );
  }
}

export default App;
