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
        username: '',
        theme: ''
      }
    }
  }
  componentDidMount() {
    this.setState({user: {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      imgurl: this.props.user.imgurl,
      description: this.props.user.description,
      username: this.props.user.username,
      theme: this.props.user.theme
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
    } else if (this.state.user.theme !== this.props.user.theme) {
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
  updateTheme = (newValue) => {
    this.setState({user: {...this.state.user, theme: newValue}})
  }
  cancelEdit = () => {
    this.setState({user: {
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      imgurl: this.props.user.imgurl,
      description: this.props.user.description,
      username: this.props.user.username,
      theme: this.props.user.theme
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
        username: nextProps.user.username,
        theme: nextProps.user.theme
      }
    })
    }
  }

  render(){
    const {title, spacer, buttonSpacing, button} = style
    return (
      <ReactTransitionModule>
        <div>
          <div>
            <label>
              <div style={spacer}>
                <span style={title}>First Name</span><input type="text" value={this.state.user.firstname} onChange={(e) => this.updateFirstName(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span style={title}>Last Name</span><input type="text" value={this.state.user.lastname} onChange={(e) => this.updateLastName(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span style={title}>Username</span><input type="text" value={this.state.user.username} onChange={(e) => this.updateUsername(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span style={title}>Description</span><input type="text" value={this.state.user.description} onChange={(e) => this.updateDescription(e.target.value)}/>
              </div>
              <div style={spacer}>
                <span style={title}>Image URL</span><input type="text" value={this.state.user.imgurl} onChange={(e) => this.updateImgURL(e.target.value)}/>
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
            <div style={spacer}>
              <span style={title}>Theme</span>
              <select value={this.state.user.theme} onChange={(e) => this.updateTheme(e.target.value)}>
                <option value="default">Default</option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </label>
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
