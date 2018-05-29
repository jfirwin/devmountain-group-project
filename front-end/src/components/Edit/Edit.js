import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {getProfileDetails, updateEditSelected} from '../../ducks/action'
import TextField from './TextField'
import EducationFields from './EducationFields'
import SkillsFields from './SkillsFields'
import AddEducation from './AddEducation'
import AddSkill from './AddSkill'
import ExperienceFields from './ExperienceFields'
import Radium from 'radium'
import '../../App.css'


function ProfileInput(props){
  console.log(props)

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
    height: '100'
  }

  const textStyle = {
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
  }

  const hrStyle = {
    border: '3px solid #D7A000'
  }

  return(
    <div style={formContainer}>
      {
        !props.selected &&
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'flex-end', textAlign: 'center'}}>
          <h1 style={title}>Hi, {props.user.firstname}. please, choose an option on the navigation bar at your left.</h1>
        </div>
      }

      {
        props.selected == 'Account' &&
        <div style={{height: '100%'}}>
          <h1 style={title}>Account</h1>
          <TextField title="Image URL" value={props.user.imgurl}/>
          <TextField title="Username" value={props.user.username}/>
          <h1 style={title}>Name</h1>
          <TextField title="First" value={props.user.firstname}/>
          <TextField title="Last" value={props.user.lastname}/>
          <h1 style={title}>Description</h1>
          <TextField title="Bio" value={props.user.description}/>
        </div>
        }

        {
          props.selected == 'Education' &&
          <div>
            <h1 style={title}>Education</h1>
            {props.user.education.map((school, index) => {
              return(
                <div key={`education_${index}`} style={{marginBottom: 50}}>
                  <EducationFields school={school}/>
                </div>
              )
            })}
            <AddEducation/>
          </div>
        }

        {
          props.selected == 'Experience' && 
          <div>
            <h1 style={title}>Experience</h1>
            {props.user.education.map((school, index) => {
              return(
                <div key={`experience_${index}`} style={{marginBottom: 50}}>
                  <ExperienceFields experience={props.user.experience}/>
                </div>
              )
            })}
          </div>
        }

        {
          props.selected == 'Skills' && 
          <div>
            <h1 style={title}>Skills</h1>
            {props.user.skills.map((skill, index) => {
              return(
                <div key={`skills_${index}`}>
                  <SkillsFields title="Skill" skills={skill}/>
                </div>
              )
            })}
            <AddSkill/>
          </div>
        }
    </div>
  )
}



class Edit extends Component{
  componentDidMount() {
    this.props.getProfileDetails(this.props.match.params.username)
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
            <ProfileInput user={this.props.user} selected={this.props.editSelected}/>
          </div>
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
export default connect(mapStateToProps, {getProfileDetails, updateEditSelected})(Edit)
