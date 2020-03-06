import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from'./components/card';
import CardList from './components/CardList'

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
