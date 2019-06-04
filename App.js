/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

type Props = {}
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {}
    this.state.customStyles = {
      color: 'blue'
    }

    setInterval(() => {
      if (this.state.customStyles.color == 'blue') {
        this.setState({
          customStyles: {
            color: 'red'
          }
        })
      } else {
        this.setState({
          customStyles: {
            color: 'blue'
          }
        })
      }
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyles]}>
          Hello World!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
