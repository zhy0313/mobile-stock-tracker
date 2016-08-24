import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressPresentation = () => {
    this.toggleDrawer()
    NavigationActions.presentationScreen()
  }

  handlePressLookup = () => {
    this.toggleDrawer()
    NavigationActions.detailView()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Search' onPress={this.handlePressPresentation} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
