import React from 'react';
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import {setTheme} from '../../ducks/action'


const DefaultProfileMobile = (props) => {

  const {mobileWrapper, cvContainer, imageDiv, titleColor, textColor, cvContentMobile, rightPiece, leftPiece} = props.theme
  return (
    <div style={mobileWrapper}>
      <div style={cvContainer}>
        <div style={imageDiv}>
          <img src={props.user.imgurl} alt={`${props.user.username} profile picture`} style={{'borderRadius':100}}/>
          <h1 style={titleColor}>{props.user.firstname} {props.user.lastname}</h1>
          <h5 style={textColor}>{props.user.description}</h5>
        </div>
        <div style={cvContentMobile}>


        {props.user.skills.length > 0 ? <h2 style={titleColor}>Skills</h2> : <div/>}
              {props.user.skills.map(skill => {
                return(
                  <div key={`skill_{skill.id}`}>
                    <h5 style={textColor}>{skill.skill}: {skill.lvl}</h5>
                  </div>
                )
              })}
            {props.user.education.length > 0 ? <h2 style={titleColor}>Education</h2> : <div/>}
              {props.user.education.map(school => {
              return(
                <div key={`education_{school.id}`}>
                  <h4 style={titleColor}>{school.school}</h4>
                  <h5 style={titleColor}>{school.emphasis}</h5>
                  <h6 style={textColor}>Start Date: {school.start_date}</h6>
                  <h6 style={textColor}>End Date: {school.end_date}</h6>
                </div>
              )
            })}


          {props.user.experience.length > 0 ? <h2 style={titleColor}>Experience</h2> : <div/>}
            {props.user.experience.map(experience => {
              return(
                <div key={`experience_{experience.id}`}>
                  <h4 style={titleColor}>{experience.title}</h4>
                  <h5 style={textColor}>{experience.company}</h5>
                  <h5 style={textColor}>{experience.location}</h5>
                  <h5 style={textColor}>{experience.description}</h5>
                  <h6 style={textColor}>Start Date: {experience.start_date}</h6>
                  <h6 style={textColor}>End Date: {experience.end_date}</h6>
                </div>
              )
            })}

        </div>

      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state: state,
    theme: state.theme
  }
}
export default connect(mapStateToProps, {setTheme})(DefaultProfileMobile)
