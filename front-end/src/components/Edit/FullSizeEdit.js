import React from 'react';
import Navbar from '../Navbar'
import EducationFields from './EducationFields'
import UserFields from './UserFields'
import SkillsFields from './SkillsFields'
import AddEducation from './AddEducation'
import AddExperience from './AddExperience'
import AddSkill from './AddSkill'
import ExperienceFields from './ExperienceFields'
import Radium from 'radium'
import ReactTransitionModule from './../../ducks/utils/animation'
import style from './FieldsStyle'
import '../../App.css'

const {
  wrapper,
  boxNav,
  buttonStyle,
  box,
  inputProfileSpacer,
  fullSizeFormContainer,
  fullSizeTitle,
  spacer,
  title,
  inputStyle,
  competencySpacer,
  slider
} = style

function EditPageNavigationButton(props) {
  return(
    <div>
      <button
        onClick={() => props.updateEditSelected(props.value)}
        style={buttonStyle}
        key={props.value}
      >
        {props.value}
      </button>
    </div>
  )
}

function EditPageNav(props){
  let keys = ['Account', 'Education', 'Experience', 'Skills']
  return(keys.map((key) => {
    return <EditPageNavigationButton value={key} key={key} {...props}/>
  }))
}


function ProfileEditInput(props){

  return(
    <div style={fullSizeFormContainer}>
      {
        !props.selected &&
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', textAlign: 'center'}}>
          <h1 style={fullSizeTitle}>Hi, {props.user.firstname}. please, choose an option on the navigation bar at your left.</h1>
        </div>
      }

      {
        props.selected === 'Account' &&
        <div style={{height: '100%'}}>
          <h1 style={fullSizeTitle}>Account</h1>
          <UserFields user={props.user} spacer={spacer} title={title}/>
        </div>
        }

        {
          props.selected === 'Education' &&
          <div>
            <h1 style={fullSizeTitle}>Education</h1>
            {props.user.education.map((school, index) => {
              return(
                <div key={`education_${school.id}`} style={{marginBottom: 50}}>
                  <EducationFields school={school} spacer={spacer} inputStyle={inputStyle}/>
                </div>
              )
            })}
            <AddEducation spacer={spacer} inputStyle={inputStyle}/>
          </div>
        }

        {
          props.selected === 'Experience' &&
          <div>
            <h1 style={fullSizeTitle}>Experience</h1>
            {props.user.experience.map((job, index) => {
              return(
                <div key={`experience_${job.id}`} style={{marginBottom: 50}}>
                  <ExperienceFields experience={job} spacer={spacer} inputStyle={inputStyle}/>
                </div>
              )
            })}
            <AddExperience spacer={spacer} inputStyle={inputStyle}/>
          </div>
        }

        {
          props.selected === 'Skills' &&
          <div style={{marginRight: '100px'}}>
            <h1 style={fullSizeTitle}> Skills </h1>
            {props.user.skills.map((skill, index) => {
              return(
                <div key={`skills_${skill.id}`} style={inputProfileSpacer}>
                  <SkillsFields title="Skill" skills={skill} spacer={spacer} competencySpacer={competencySpacer} slider={slider}/>
                </div>
              )
            })}
            <AddSkill spacer={spacer}/>
          </div>
        }
    </div>
  )
}

function FullSizeEditPage(props) {


  return (
    <div style={wrapper}>
        <Navbar user = {props.user}/>
        {props.user
          ?
          <ReactTransitionModule>
            <div style={box} key='box'>
              <div style={boxNav} key='boxNav'>
                <EditPageNav updateEditSelected={props.updateEditSelected}/>
              </div>
              <ProfileEditInput user={props.user} selected={props.editSelected} />
            </div>
          </ReactTransitionModule>
          :
          'Loading...'
        }
      </div>
  )
}

// EditPageNavigationButton = Radium(EditPageNavigationButton)
// FullSizeEditPage = Radium(FullSizeEditPage)

export default FullSizeEditPage
