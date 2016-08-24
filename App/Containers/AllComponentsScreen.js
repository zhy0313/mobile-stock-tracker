// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput, TouchableHighlight } from 'react-native'
import { Metrics, Images } from '../Themes'
import FullButton from '../Components/FullButton'
// For API
import API from '../Services/Api'
import FJSON from 'format-json'
import RoundedButton from '../Components/RoundedButton'
import buttonStyle from './Styles/RoundedButtonStyle'
import { ajax, get, post } from 'jquery'

// Styles
import styles from './Styles/APITestingScreenStyle'

// API buttons here:
const endpoints = [
  { label: 'Get City (Boise)', endpoint: 'getCity', args: ['Boise'] },
  { label: 'Get City (Toronto)', endpoint: 'getCity', args: ['Toronto'] }
]

export default class APITestingScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      symbol: ''
    }

    this.api = API.create()
    this.searchSpecificSymbol = this.searchSpecificSymbol.bind(this);
  }

  showResult (response, title = 'Response') {
    this.refs.container.scrollTo({x: 0, y: 0, animated: true})
    if (response.ok) {
      this.refs.result.setState({message: FJSON.plain(response.data), title: title})
    } else {
      this.refs.result.setState({message: `${response.problem} - ${response.status}`, title: title})
    }
  }

  tryEndpoint (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then((result) => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  renderButton (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    return (
      <FullButton text={label || `${endpoint}(${args.join(', ')})`} onPress={this.tryEndpoint.bind(this, apiEndpoint)} styles={{marginTop: 10}} key={`${endpoint}-${args.join('-')}`} />
    )
  }

  renderButtons () {
    return endpoints.map((endpoint) => this.renderButton(endpoint))
  }

  searchSpecificSymbol() {
    console.log('yo! it be workin\'');
    fetch('http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=NFLX', {method: "GET"})
      .then(res => {
        console.log('res:', res);
      })
      .catch(err => {
        console.log('err:', err);
      })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>

          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Simple Look Up
            </Text>
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
              color: 'black'
            }}
            placeholder="Enter in a specific stock symbol"
          />
          <TouchableOpacity
            style={buttonStyle.button}
          >
            <Text
              style={buttonStyle.buttonText}
              onPress={this.searchSpecificSymbol}
            >Search</Text>
          </TouchableOpacity>
          <APIResult ref='result' />
        </ScrollView>
      </View>
    )
  }
}

class APIResult extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      message: false,
      title: false
    }
  }

  onApiPress = () => {
    this.setState({message: false})
  }

  renderView () {
    return (
      <ScrollView style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
        <TouchableOpacity
          style={{backgroundColor: 'white', padding: 20}}
          onPress={this.onApiPress}
        >
          <Text>{this.state.title} Response:</Text>
          <Text allowFontScaling={false} style={{fontFamily: 'CourierNewPS-BoldMT', fontSize: 10}}>
            {this.state.message}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  render () {
    let messageView = null
    if (this.state.message) {
      return this.renderView()
    }

    return messageView
  }
}
