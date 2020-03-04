import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./components/card/index.js';

class App extends React.Component {
  
  render () {
    return (
      <>
 
      <CardList content="This is a card!" myFunction={() => this.myFunction()}></CardList>
      </>
    );
  }
}

export default App;
