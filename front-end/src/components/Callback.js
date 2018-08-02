import React, {Component} from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import {auth} from '../ducks/action'

class Callback extends Component {
  componentDidMount() {
    this.props.auth()
      .then(result => {
        this.props.history.push('/edit')
      })
  }
  render() {
    let textStyling = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      familyFont: 'Montserrat',
      fontWeight: '200'
    }

    return (
      <div>
        <div>
          <Navbar user={false}/>
        </div>
        <div style={textStyling}>
          <h1>Loading...</h1>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
export default connect(mapStateToProps, {auth})(Callback)
