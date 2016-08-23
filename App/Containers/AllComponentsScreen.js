// An All Components Screen is a great way to dev and quick-test components
import React, {PropTypes} from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import styles from './Styles/AllComponentsScreenStyle'

// Components to show examples (only real point of merge conflict)
import '../Components/AlertMessageComponent'
import '../Components/ProgressiveImage'
import '../Components/FullButton'
import '../Components/RoundedButton'
// Examples Render Engine
import ExamplesRegistry from '../Services/ExamplesRegistry'

class AllComponentsScreen extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Search for a stock using its symbol. If you want a more detailed view, go back to the "Specific symbol" view.
            </Text>
            <Text style={styles.subtitle} >
              Start here:
            </Text>
          </View>

          {ExamplesRegistry.render()}

        </ScrollView>
      </View>
    )
  }
}

export default connect()(AllComponentsScreen)
