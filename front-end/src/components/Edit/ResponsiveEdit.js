import React from 'react';
import Navbar from '../Navbar'
import {getUserEdit, updateEditSelected, goBackEditPage} from '../../ducks/action'
import EducationFields from './EducationFields'
import UserFields from './UserFields'
import SkillsFields from './SkillsFields'
import AddEducation from './AddEducation'
import AddExperience from './AddExperience'
import AddSkill from './AddSkill'
import ExperienceFields from './ExperienceFields'
import ReactTransitionModule from './../../ducks/utils/animation'
import MediaQuery from 'react-responsive'
import style from './responsiveFieldsStyle'


const {
    wrapper,
    boxNav,
    buttonStyle, 
    ResponsiveBox,
    responsiveFormContainer,
    inputProfileSpacer,
    responsiveSpacer,
    responsiveTitle,
    spacer,
    inputStyle,
    responsiveInputStyle,
    responsiveCompetencySpacer
  } = style

  console.log(style)

  function ResponsiveProfileInput(props){
  
    return(
      <div style={responsiveFormContainer}>
        {
          !props.selected &&
          <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
            <h1 style={responsiveTitle}>Hi, {props.user.firstname}. please, choose an option on the navigation bar at your left.</h1>
          </div>
        }
  
        {
          props.selected == 'Account' &&
          <div style={{height: '100%', width: '100%', marginTop: '25px'}}>
            <h1 style={responsiveTitle}>Account</h1>
            <UserFields user={props.user} spacer={responsiveSpacer} title={responsiveTitle}/>
          </div>
          }
  
          {
            props.selected == 'Education' &&
            <div>
              <h1 style={responsiveTitle}>Education</h1>
              {props.user.education.map((school, index) => {
                return(
                  <div key={`education_${index}`} style={{marginBottom: 50}}>
                    <EducationFields school={school} spacer={responsiveSpacer} inputStyle={responsiveInputStyle}/>
                  </div>
                )
              })}
              <AddEducation spacer={responsiveSpacer} inputStyle={responsiveInputStyle}/>
            </div>
          }
  
          {
            props.selected == 'Experience' &&
            <div>
              <h1 style={responsiveTitle}>Experience</h1>
              {props.user.experience.map((job, index) => {
                return(
                  <div key={`experience_${index}`} style={{marginBottom: 50}}>
                    <ExperienceFields experience={job} spacer={responsiveSpacer} inputStyle={responsiveInputStyle}/>
                  </div>
                )
              })}
              <AddExperience spacer={responsiveSpacer} inputStyle={responsiveInputStyle}/>
            </div>
          }
  
          {
            props.selected == 'Skills' &&
            <div>
              <h1>Skills</h1>
              {props.user.skills.map((skill, index) => {
                return(
                  <div key={`skills_${index}`} >
                    <SkillsFields title="Skill" skills={skill} />
                  </div>
                )
              })}
              <AddSkill spacer={responsiveSpacer}/>
            </div>
          }
          <button onClick={()=> props.goBackEditPage()}>Go Back</button>
      </div>
    )
  }

  function ResponsiveEditPage(props) {

    return (
      <div style={wrapper}>
          <Navbar user = {props.user}/>
          {props.user
            ?
            <ReactTransitionModule>
              <div style={ResponsiveBox}>
                { !props.editSelected ? 
                <div style={boxNav}>
                  <button
                  onClick={() => props.updateEditSelected('Account')}
                  style={buttonStyle}
                  key='Account'
                  >
                  Account
                  </button>
                  <button
                  onClick={() => props.updateEditSelected('Education')}
                  style={buttonStyle}
                  key='Education'
                  >
                  Education
                  </button>
                  <button
                  onClick={() => props.updateEditSelected('Experience')}
                  style={buttonStyle}
                  key='Experience'
                  >
                  Experience
                  </button>
                  <button
                  onClick={() => props.updateEditSelected('Skills')}
                  style={buttonStyle}
                  key='Skills'
                  >
                  Skills
                  </button>
                </div>
                :
                <ResponsiveProfileInput user={props.user} selected={props.editSelected} goBackEditPage={props.goBackEditPage}/> 
                }
              </div>
            </ReactTransitionModule>
            :
            'Loading...'
          }
        </div>
    )
  }


  export default ResponsiveEditPage