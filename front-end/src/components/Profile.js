import React, { Component } from 'react';
import { connect } from 'react-redux'
import DefaultProfile from './Themes/DefaultProfile'
import MissingPage from './MissingPage'
import {getProfileDetails, setTheme} from '../ducks/action'
import MediaQuery from 'react-responsive'
import DefaultProfileMobile from './Themes/DefaultProfileMobile'
import logo from '../images/cv-finder-black.svg'

class FullScreenCv extends Component {

  state = {
    theme: this.props.theme
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.theme && nextProps.user){
      nextProps.setTheme(nextProps.user.theme)
    }
    return {theme: nextProps.theme}
  }

  render(){
  return(
      <div>
              {
          this.props.loading
          ?
          <div style={{height:'100vh',display:'flex',alignContent:'center',justifyContent:'center'}}>
            <img src={logo} alt="CV Finder Logo" style={{width:"75vw"}}/>
          </div>
          :
            this.props.user && this.props.user.skills
            ?
            <div>
              <DefaultProfile user={this.props.user} userLoggedIn={this.props.userLoggedIn} theme={this.state.theme}/>
            </div>
            :
            <MissingPage username={this.props.username}/>
        }
      </div>
    )}
}

class MobileSizeScreenCV extends Component {

  state = {
    theme: this.props.theme
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.theme && nextProps.user){
      nextProps.setTheme(nextProps.user.theme)
    }
    return {theme: nextProps.theme}
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
                  <DefaultProfileMobile user={this.props.user} theme={this.state.theme} userLoggedIn={this.props.userLoggedIn}/>
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
            theme = {this.props.theme}
            />
        </MediaQuery>
        <MediaQuery query='(max-width: 1000px)'>
          <MobileSizeScreenCV
            user = {this.props.user}
            loading = {this.props.loading}
            username= {this.props.match.params.username}
            setTheme = {this.props.setTheme}
            theme = {this.props.theme}
            userLoggedIn = {this.props.userLoggedIn}
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
    userLoggedIn: state.userLoggedIn,
    theme: state.theme
	}
}
export default connect(mapStateToProps, {getProfileDetails, setTheme})(Profile)
