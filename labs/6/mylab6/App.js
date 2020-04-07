import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import QuizQuestions from './components/QuizQuestions';
import questions from './questions.json'

const TIME_LIMIT = 0
const TITLE_STATE = 1
const QUESTION_STATE = 10


class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {titleText: "Welcome to my quiz!",
      currentState: TITLE_STATE,
      score: 0,
      counter: 0,
      currentQuestion: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion(correct) {
    if(correct){
      this.setState({score: this.state.score+1})
    }
    if(this.state.currentQuestion == questions.length - 1) {
      console.log("Done")

    }else {
      clearInterval(this.timer)
      console.log(this.state.currentQuestion)
      this.setState({
        titleText:"You answer X",
        currentState: QUESTION_STATE,
        currentQuestion: this.state.currentQuestion + 1
      })
    }

    // Advance to the next question? (e.g. set current question to currentQuestion + 1)
  }

  start() {
    console.log("Starting!")
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})
    /*this.timer = setInterval(() => {
      console.log("INTERVAL CALLED")
      this.setState({counter : this.state.counter+1})
      if(this.state.counter < this.timeLimit) {
        this.setState({tittleText:"Begin the quiz! " + this.state.counter})
      } else {
        this.setState({tittleText:"Time's up!"})
        clearInterval(this.timer)
      }
    }, 1000);*/
  }
  render() {
    console.log("RENDER CALLED")
    return (
      <View>
        <View>{this.timeLimit - this.state.counter}</View>
        {(this.state.currentState == QUESTION_STATE) ?
        <QuizQuestions answers={questions[this.state.currentQuestion].possibleAnswers}
        question={questions[this.state.currentQuestion].question}
        nextQuestion={(correct) => this.nextQuestion(correct)} />
        :
        <Text>{this.state.titleText}</Text>}
        <Button id='startButton' title="start" onPress={() => this.start()}></Button>
      </View>
    )
  }



}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

});

export default TitlePage;