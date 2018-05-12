import React, { Component } from 'react'

class UserFields extends Component{
  constructor() {
    super()
    this.state = {
      user: {
        username: '',
        firstname: '',
        lastname: '',
        description: '',
        imgurl: '',
        id: ''
      }
    }
  }
  componentDidMount() {
    this.setState({user: this.props.user})
  }
  updateUsername = (newValue) => {
    this.setState({user: {...this.state.user, username: newValue}})
  }
  updateFirstName = (newValue) => {
    this.setState({user: {...this.state.user, firstname: newValue}})
  }
  updateLastName = (newValue) => {
    this.setState({user: {...this.state.user, lastname: newValue}})
  }
  updateDescription = (newValue) => {
    this.setState({user: {...this.state.user, description: newValue}})
  }
  updateImgURL = (newValue) => {
    this.setState({user: {...this.state.user, imgurl: newValue}})
  }
  cancelEdit = () => {
    this.setState({user: this.props.user})
  }
  saveEdit = () => {
    this.props.update(this.state.user)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user) {
      this.setState({user: nextProps.user})
    }
  }

  render(){

    return (
      <div>
        <div>
          <label>
            <div>
              Username<input type="text" value={this.state.user.username} onChange={(e) => this.updateUsername(e.target.value)}/>
            </div>
            <div>
              Firstname<input type="text" value={this.state.user.firstname} onChange={(e) => this.updateFirstName(e.target.value)}/>
            </div>
            <div>
              Lastname<input type="text" value={this.state.user.lastname} onChange={(e) => this.updateLastName(e.target.value)}/>
            </div>
            <div>
              Description<input type="text" value={this.state.user.description} onChange={(e) => this.updateDescription(e.target.value)}/>
            </div>
            <div>
              Image Url<input type="text" value={this.state.user.imgurl} onChange={(e) => this.updateImgURL(e.target.value)}/>
            </div>
          </label>
        </div>
        {this.state.user !== this.props.user
          ?
          <div>
          <button onClick={()=>this.cancelEdit()}>Cancel</button>
          <button onClick={()=>this.saveEdit()}>Save</button>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default UserFields
