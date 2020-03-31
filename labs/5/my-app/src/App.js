import React from 'react';
import './index.css';
import Card from './components/card/';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {properties:[]}

  }
  componentDidMount(){
    this.callApi()
  }
  async callApi(){
    const retValue = await fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
    const obj = await retValue.json()
    this.setState({properties:obj.properties.periods})

  }
  render() {
    return (
      <>
      {
        this.state.properties.map((obj,index) =>
        <div key={index}>
        <Card title={obj.name} content={obj.temperature} unit={obj.temperatureUnit} detail={obj.detailedForecast}></Card>
        
      
        
        </div>
        )
      }
      </>
    )
    }

}

export default App;
