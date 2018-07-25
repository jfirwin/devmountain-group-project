import React, { Component } from 'react';
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'
import {Link} from 'react-router-dom'
import {getProfileDetails, setTheme} from '../ducks/action'
import MediaQuery from 'react-responsive'
import DefaultProfileMobile from './Themes/DefaultProfileMobile'

class FullScreenCv extends Component {

static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.user && nextProps.user.theme){
    nextProps.setTheme(nextProps.user.theme)
  }
  return null
}

  render(){
  return(
      <div>
              {
          this.props.loading
          ?
          <p>Loading...</p>
          :
            this.props.user && this.props.user.skills
            ?
            <div>
              <DefaultProfile user={this.props.user} userLoggedIn={this.props.userLoggedIn}/>
            </div>
            :
            <MissingPage username={this.props.username}/>
        }
      </div>
    )}
}

class MobileSizeScreenCV extends Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.user && nextProps.user.theme){
      nextProps.setTheme(nextProps.user.theme)
    }
    return null
  }

  render(){
    return(
        <div>
          {
              this.props.loading
              ?
              <p>Loading...</p>
              :
                this.props.user && this.props.user.skills
                ?
                <div>
                  <div>
                    <Link to='/'>
                      <i className="fas fa-sign-out-alt"></i>
                    </Link>
                  </div>
                  <DefaultProfileMobile user={this.props.user}/>
                </div>
                :
                <MissingPage username={this.props.username}/>
            }
        </div>
      )
    }
}

class Profile extends Component{

  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }

	render(){

		return(
			<div>
        <MediaQuery query='(min-width: 1000px)'>
          <FullScreenCv
            user = {this.props.user}
            loading = {this.props.loading}
            username = {this.props.match.params.username}
            userLoggedIn = {this.props.userLoggedIn} 
            setTheme = {this.props.setTheme}
            />
        </MediaQuery>
        <MediaQuery query='(max-width: 1000px)'>
          <MobileSizeScreenCV
            user = {this.props.user}
            loading = {this.props.loading}
            username= {this.props.match.params.username}
          />
        </MediaQuery>
        </div>
		  )

	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
    loading: state.loading,
    userLoggedIn: state.userLoggedIn
	}
}
export default connect(mapStateToProps, {getProfileDetails, setTheme})(Profile)
