import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getProfileDetails, updateEducation} from '../../ducks/action'
import TextField from './TextField'
import EducationFields from './EducationFields'
import SkillsFields from './SkillsFields'

class Profile extends Component{
  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user != nextProps.user) {
      return true
    } else
    return false
  }
	render(){
		return(
			<div>
        <Navbar user = {this.props.user}/>
        {this.props.user
          ?
          <div>
            Account
            <TextField title="Image URL" value={this.props.user.imgurl}/>
            <TextField title="Username" value={this.props.user.username}/>
            <hr/>
            Name
            <TextField title="First" value={this.props.user.firstname}/>
            <TextField title="Last" value={this.props.user.lastname}/>
            <hr/>
            Description
            <TextField title="Bio" value={this.props.user.description}/>
            <hr/>
            Education
            {this.props.user.education.map((school, index) => {
              return(
                <div key={`education_${index}`}>
                  <EducationFields school={school} update={this.props.updateEducation}/>
                </div>
              )
            })}
            Skills
            {this.props.user.skills.map((skill, index) => {
              return(
                <div key={`skills_${index}`}>
                  <SkillsFields value={skill}/>
                </div>
              )
            })}
          </div>
          :
          'Loading...'
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {
		user: state.user,
    loading: state.loading
  }
}
export default connect(mapStateToProps, {getProfileDetails, updateEducation})(Profile)
