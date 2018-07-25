import React, { Component } from 'react';
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'
import {Link} from 'react-router-dom'
import {getProfileDetails, setTheme} from '../ducks/action'
import MediaQuery from 'react-responsive'
import DefaultProfileMobile from './Themes/DefaultProfileMobile'

const FullScreenCv = (props) => {
  return(
      <div>
              {
          props.loading
          ?
          <p>Loading...</p>
          :
            props.user && props.user.skills
            ?
            <div>
              <DefaultProfile user={props.user} userLoggedIn={props.userLoggedIn}/>
            </div>
            :
            <MissingPage username={props.username}/>
        }
      </div>
    )
}

const MobileSizeScreenCV = (props) => {
  return(
      <div>
        {
            props.loading
            ?
            <p>Loading...</p>
            :
              props.user && props.user.skills
              ?
              <div>
                <div>
                  <Link to='/'>
                    <i className="fas fa-sign-out-alt"></i>
                  </Link>
                </div>
                <DefaultProfileMobile user={props.user}/>
              </div>
              :
              <MissingPage username={props.username}/>
          }
      </div>
    )
}

class Profile extends Component{

  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.username !== nextProps.match.params.username) {
      this.props.getProfileDetails(nextProps.match.params.username)
    }
  }

	render(){

    if(this.props.user && this.props.user.theme){
        this.props.setTheme(this.props.user.theme)
      }

		return(
			<div>
        <MediaQuery query='(min-width: 1000px)'>
          <FullScreenCv
            user = {this.props.user}
            loading = {this.props.loading}
            username = {this.props.match.params.username}
            userLoggedIn = {this.props.userLoggedIn} 
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
