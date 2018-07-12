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
import AccountCircle from '@material-ui/icons/AccountCircle'
import Work from '@material-ui/icons/Work'
import Stars from '@material-ui/icons/Stars'
import LibraryBooks from '@material-ui/icons/LibraryBooks'


const {
    wrapper,
    boxNav,
    ResponsiveBox,
    responsiveFormContainer,
    inputProfileSpacer,
    responsiveSpacer,
    responsiveTitle,
    spacer,
    inputStyle,
    responsiveInputStyle,
    responsiveCompetencySpacer,
    icons,
    iconDiv,
    button
  } = style

  function ResponsiveProfileInput(props){
  
    return(
      <div style={{overflow: 'auto', width: '80%', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
      <div style={responsiveFormContainer}>
        {
          props.selected == 'Account' &&
          <div>
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
                  <div key={`experience_${index}`}>
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
          
      </div>
      <button style={button} onClick={()=> props.goBackEditPage()}>Go Back</button>
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
                  <div style={iconDiv}>
                    <AccountCircle style={icons} onClick={() => props.updateEditSelected('Account')}> account_circle </AccountCircle>
                    <p>Account</p>
                  </div>
                  <div style={iconDiv}>
                    <Work style={icons} onClick={() => props.updateEditSelected('Experience')}> work_outline </Work>
                    <p>Experience</p>
                  </div>
                  <div style={iconDiv}>
                    <Stars style={icons} onClick={() => props.updateEditSelected('Skills')}> Stars </Stars>
                    <p>Skills</p>
                  </div>
                  <div style={iconDiv}>
                    <LibraryBooks style={icons} onClick={() => props.updateEditSelected('Education')}> LibraryBooks </LibraryBooks> 
                    <p>Education</p>
                  </div>
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