import CurrentGame from './CurrentGame'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    game: state
  }
}

const CurrentGameConnector = connect(
  mapStateToProps,
  null
)(CurrentGame)

export default CurrentGameConnector
