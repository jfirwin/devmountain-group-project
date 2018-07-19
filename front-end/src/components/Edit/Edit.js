import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getUserEdit, updateEditSelected} from '../../ducks/action'
import EducationFields from './EducationFields'
import UserFields from './UserFields'
import SkillsFields from './SkillsFields'
import AddEducation from './AddEducation'
import AddExperience from './AddExperience'
import AddSkill from './AddSkill'
import ExperienceFields from './ExperienceFields'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'
import '../../App.css'


function ProfileInput(props){

  const formContainer = {
    width: '35vw',
    height: '90%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'flex-start',
    overflow: 'auto'
  }

  const title = {
    fontSize: 25,
    fontFamily: 'Montserrat',
    height: '100',
    marginRight: '50px'
  }

  const textStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  }

  const spacer = {
    marginBottom: '40px'
  }

  return(
    <div style={formContainer}>
      {
        !props.selected &&
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
          <h1 style={title}>Hi, {props.user.firstname}. please, choose an option on the navigation bar at your left.</h1>
        </div>
      }

      {
        props.selected == 'Account' &&
        <div style={{height: '100%'}}>
          <h1 style={title}>Account</h1>
          <UserFields user={props.user}/>
        </div>
        }

        {
          props.selected == 'Education' &&
          <div>
            <h1 style={title}>Education</h1>
            {props.user.education.map((school, index) => {
              return(
                <div key={`education_{school.id}`} style={{marginBottom: 50}}>
                  <EducationFields school={school}/>
                </div>
              )
            })}
            {props.user.education.length < 4 ? <AddEducation/> : <div/>}
          </div>
        }

        {
          props.selected == 'Experience' &&
          <div>
            <h1 style={title}>Experience</h1>
            {props.user.experience.map((job, index) => {
              return(
                <div key={`experience_{job.id}`} style={{marginBottom: 50}}>
                  <ExperienceFields experience={job}/>
                </div>
              )
            })}
            {props.user.experience.length < 4 ? <AddExperience/> : <div/>}
          </div>
        }

        {
          props.selected == 'Skills' &&
          <div>
            <h1 style={title}>Skills</h1>
            {props.user.skills.map((skill, index) => {
              return(
                <div key={`skills_{skill.id}`}>
                  <SkillsFields title="Skill" skills={skill}/>
                </div>
              )
            })}
            {props.user.skills.length < 4 ? <AddSkill/> : <div/>}
          </div>
        }
    </div>
  )
}



class Edit extends Component{
  componentDidMount() {
    this.props.getUserEdit()

  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user != nextProps.user || this.props.editSelected != nextProps.editSelected) {
      return true
    } else return false
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.username !== nextProps.match.params.username) {
      this.props.getProfileDetails(nextProps.match.params.username)
    }
  }

	render(){

    const wrapper = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const box = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '60vw',
      height: '70vh',
      border: '1px solid #E2E2E1',
      marginTop: 100
    }

    const boxNav = {
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      height: '100%',
      backgroundColor: 'rgb(253, 253, 253)'
    }

    const buttonStyle = {
      width: '100%',
      height: 50,
      backgroundColor: 'rgb(253, 253, 253)',
      border: 'none',
      ':focus': {backgroundColor: 'rgba(156, 140, 96, 0.1)', outline: 'none', border: 'none', boxShadow: 'none'},
      ':active': {boxShadow: 'none', border: 'none', borderStyle: 'outset'},
      outline: 'none'
    }


		return(
			<div style={wrapper}>

        <Navbar user = {this.props.user}/>
        {this.props.user
          ?
          <ReactTransitionModule>
            <div style={box}>
              <div style={boxNav}>
                <button
                onClick={() => this.props.updateEditSelected('Account')}
                style={buttonStyle}
                key='Account'
                >
                Account
                </button>
                <button
                onClick={() => this.props.updateEditSelected('Education')}
                style={buttonStyle}
                key='Education'
                >
                Education
                </button>
                <button
                onClick={() => this.props.updateEditSelected('Experience')}
                style={buttonStyle}
                key='Experience'
                >
                Experience
                </button>
                <button
                onClick={() => this.props.updateEditSelected('Skills')}
                style={buttonStyle}
                key='Skills'
                >
                Skills
                </button>
              </div>
              <ProfileInput user={this.props.user} selected={this.props.editSelected} />
            </div>
          </ReactTransitionModule>
          :
          'Loading...'
        }
      </div>
    )
  }
}


Edit = Radium(Edit)

const mapStateToProps = state => {
	return {
		user: state.user,
    loading: state.loading,
    editSelected: state.editSelected
  }
}

export default connect(mapStateToProps, {getUserEdit, updateEditSelected})(Edit)
