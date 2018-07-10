import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser} from '../../ducks/action'
import style from './FieldsStyle'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'


class UserFields extends Component{
  constructor() {
    super()
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        imgurl: '',
        description: '',
        username: ''
      }
    }
  }
  componentDidMount() {
    this.setState({user: {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      imgurl: this.props.user.imgurl,
      description: this.props.user.description,
      username: this.props.user.username
    }
  })
  }
  checkProps = () => {
    if (this.state.user.firstname !== this.props.user.firstname) {
      return true
    } else if (this.state.user.lastname !== this.props.user.lastname) {
      return true
    } else if (this.state.user.imgurl !== this.props.user.imgurl) {
      return true
    } else if (this.state.user.description !== this.props.user.description) {
      return true
    } else if (this.state.user.username !== this.props.user.username) {
      return true
    }
    else return false
  }
  updateFirstName = (newValue) => {
    this.setState({user: {...this.state.user, firstname: newValue}})
  }
  updateLastName = (newValue) => {
    this.setState({user: {...this.state.user, lastname: newValue}})
  }
  updateImgURL = (newValue) => {
    this.setState({user: {...this.state.user, imgurl: newValue}})
  }
  updateDescription = (newValue) => {
    this.setState({user: {...this.state.user, description: newValue}})
  }
  updateUsername = (newValue) => {
    this.setState({user: {...this.state.user, username: newValue}})
  }
  cancelEdit = () => {
    this.setState({user: {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      imgurl: this.props.user.imgurl,
      description: this.props.user.description,
      username: this.props.user.username
    }
  })
  }
  saveEdit = () => {
    this.props.updateUser(this.state.user)
  }
  componentWillReceiveProps(nextProps) {
    if(this.checkProps()) {
      this.setState({user: {
        firstname: nextProps.user.firstname,
        lastname: nextProps.user.lastname,
        imgurl: nextProps.user.imgurl,
        description: nextProps.user.description,
        username: nextProps.user.username
      }
    })
    }
  }

  render(){
    const {buttonSpacing, button} = style
    return (
      <ReactTransitionModule>
        <div style={{width: '100%'}}>
          <div>
            <label>
              <div style={this.props.spacer}>
                <span>First Name</span><input type="text" value={this.state.user.firstname} onChange={(e) => this.updateFirstName(e.target.value)}/>
              </div>
              <div style={this.props.spacer}>
                <span style={this.props.title}>Last Name</span><input type="text" value={this.state.user.lastname} onChange={(e) => this.updateLastName(e.target.value)}/>
              </div>
              <div style={this.props.spacer}>
                <span style={this.props.title}>Username</span><input type="text" value={this.state.user.username} onChange={(e) => this.updateUsername(e.target.value)}/>
              </div>
              <div style={this.props.spacer}>
                <span style={this.props.title}>Description</span><input type="text" value={this.state.user.description} onChange={(e) => this.updateDescription(e.target.value)}/>
              </div>
              <div style={this.props.spacer}>
                <span style={this.props.title}>Image URL</span><input type="text" value={this.state.user.imgurl} onChange={(e) => this.updateImgURL(e.target.value)}/>
              </div>
            </label>
          </div>
          {this.checkProps()
            ?
            <div style={buttonSpacing}>
              <button style={button} key="cancel" onClick={()=>this.cancelEdit()}>Cancel</button>
              <button style={button} key="Save" onClick={()=>this.saveEdit()}>Save</button>
            </div>
            :
            null
          }
        </div>
      </ReactTransitionModule>
    )
  }
}

UserFields = Radium(UserFields)

const mapStateToProps = state => {
  return{
    skillTest: true
  }
}
export default connect(mapStateToProps, {updateUser})(UserFields)
