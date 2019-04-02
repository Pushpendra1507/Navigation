import {StyleSheet, Dimensions} from 'react-native'

const {SCREEN_WIDTH, SCREEN_HEIGHT} = Dimensions.get('window')

const primaryBlue = '#4990E2'
const primaryTextColor = '#444444'
const primaryRed = '#FF758C'



export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      HeaderView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: 64,
        marginTop:-20,
        width: SCREEN_WIDTH
      }
})