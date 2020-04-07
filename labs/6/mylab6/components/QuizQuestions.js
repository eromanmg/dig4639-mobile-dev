import React from 'react'
import {Button, Text} from 'react-native'

class QuizQuestions extends React.Component {
    render(){
        return(
            <>
            <Text>{this.props.question}</Text>
            {this.props.answers.map((v, i) => {
                return <Button type="startButton"
                key={i}
                title={v.text}
                onPress={() => this.props.nextQuestion(v.correct)}></Button>
            }
            )}
            </>
        )
    }
}

export default QuizQuestions