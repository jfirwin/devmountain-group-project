import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getProfileDetails, updateEducation, updateSkill, updateExperience, deleteEducation, deleteSkill, deleteExperience, addEducation, addSkill, addExperience} from '../../ducks/action'
import UserFields from './UserFields'
import EducationFields from './EducationFields'
import AddEducation from './AddEducation'
import ExperienceFields from './ExperienceFields'
import AddExperience from './AddExperience'
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
            <UserFields user={this.props.user}/>
            <hr/>
            Education
            {this.props.user.education.map((school, index) => {
              return(
                <div key={`education_${index}`}>
                  <EducationFields school={school} update={this.props.updateEducation} delete={this.props.deleteEducation}/>
                </div>
              )
            })}
            <AddEducation add={this.props.addEducation}/>
            <hr/>
            Skills
            {this.props.user.skills.map((skill, index) => {
              return(
                <div key={`skills_${index}`}>
                  <SkillsFields skills={skill} update={this.props.updateSkill} delete={this.props.deleteSkill}/>
                </div>
              )
            })}
            <hr/>
            Experience
            {this.props.user.experience.map((experience, index) => {
              return(
                <div key={`skills_${index}`}>
                  <ExperienceFields experience={experience} update={this.props.updateExperience} delete={this.props.deleteExperience}/>
                </div>
              )
            })}
            <AddExperience add={this.props.addExperience}/>
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
export default connect(mapStateToProps, {getProfileDetails, updateEducation, updateSkill, updateExperience, deleteEducation, deleteSkill, deleteExperience, addEducation, addSkill, addExperience})(Profile)
