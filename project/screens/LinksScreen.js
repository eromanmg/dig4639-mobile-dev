import { Ionicons } from '@expo/vector-icons'
import * as React from 'react'
import { Input, Button } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

export default class LinksScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitDisabled: true,
      addName: '',
      addNumber: '',
      contactPriority: 0
    }
  }

  handleNameInput (name) {
    if (name.lenght > 0) {
      this.setState(
        {
          submitDisabled: false,
          addName: name
        }
      )
    } else {
      this.setState({ submitDisabled: true })
      console.log(name)
    }
  }

  handleNumberInput (number) {
    if (number.lenght > 0) {
      this.setState(
        {
          submitDisabled: false,
          addNumber: number
        }
      )
    } else {
      this.setState({ submitDisabled: true })
      console.log(number)
    }
  }

  handleAddContact () {
    console.log('Added!')
    console.log(this.state.addName, this.state.addNumber)
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: 'POST',
      headers: {
        API: 'roman',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(
        {
          text: this.state.addName.addNumber,
          priority: this.state.contactPriority
        }
      )
    })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        if (body.added !== undefined) {
          console.log('Successfully added task!')
          // eslint-disable-next-line react/prop-types
          this.props.navigation.navigate('contacts',
            { contacts: { name: this.state.addName.addNumber, priority: this.state.contactPriority } })
        } else {
          console.log('Error adding contact')
        }
      })
  }

  handlePriorityInput () {

  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Input placeholder="Enter new contact"
          onChangeName={name => this.handleNameInput(name)} />
        <Input placeholder="Enter number"
          onChangeNumber={number => this.handleNumberInput(number)} />
        <Button title="Create a new contact"
          disabled={this.state.submitDisabled}
          onPress={() => this.handleAddContact()}/>
      </ScrollView>
    )
  }
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
