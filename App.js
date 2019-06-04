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
    //   this.state.customStyles = {
    //     color: 'blue'
    //   }

    //   setInterval(() => {
    //     if (this.state.customStyles.color == 'blue') {
    //       this.setState({
    //         customStyles: {
    //           color: 'red'
    //         }
    //       })
    //     } else {
    //       this.setState({
    //         customStyles: {
    //           color: 'blue'
    //         }
    //       })
    //     }
    //   }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.isHalf1, styles.contentCentered]}>
          <Text style={styles.text}>Half 1</Text>
        </View>
        <View style={styles.isHalf2}>
          <View style={[styles.isHalf2_1, styles.contentCentered]}>
            <Text style={styles.text}>Half 2-1</Text>
          </View>
          <View style={[styles.isHalf2_2, styles.contentCentered]}>
            <Text style={styles.text}>Half 2-2</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  isHalf1: {
    backgroundColor: 'red',
    flex: 1
  },
  isHalf2: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row'
  },
  isHalf2_1: {
    flex: 1,
    backgroundColor: 'green'
  },
  isHalf2_2: {
    flex: 1,
    backgroundColor: 'purple'
  },
  contentCentered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40
  }
})
