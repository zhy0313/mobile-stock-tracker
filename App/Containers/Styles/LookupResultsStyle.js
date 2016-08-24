import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  scroll: {
    flex: 1,
    backgroundColor: Colors.facebook,
    marginTop: Metrics.navBarHeight
  },
  row: {
    flex: 1,
    backgroundColor: Colors.transparent,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    flex: 1,
    marginTop: Metrics.baseMargin
  },
  emptyText: {
    flex: 1,
    flexDirection: 'row',
    color: Colors.snow,
    height: 50,
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center'
  }
})
