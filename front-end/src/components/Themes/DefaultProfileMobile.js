import React from 'react';
import { Link } from 'react-router-dom'
import { dateHelper } from './dateHelper'


const DefaultProfileMobile = (props) => {
  const {mobileWrapper, cvContainer, imageDiv, titleColor, textColor, cvContentMobile, navButtonMobile} = props.theme
  const displayImage = props.user.imgurl || `https://robohash.org/${props.user.firstname}-${props.user.lastname}?set=set4`
  return (
    <div style={mobileWrapper}>
      <div style={cvContainer}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='/'>
              <i className="fas fa-home" style={navButtonMobile} key='home'></i>
            </Link>
            <Link to='/search'>
              <i className="fas fa-search" style={navButtonMobile} key='search'></i>
            </Link>
            {
            props.userLoggedIn === props.user.username &&
              <Link to='/edit'>
                <i className="far fa-edit" style={navButtonMobile} key='edit'></i>
              </Link>
            }
            {
              props.userLoggedIn === ""
              ?
              <a href={process.env.REACT_APP_LOGIN}>
                <i className="fas fa-sign-in-alt" style={navButtonMobile} key='login'></i>
              </a>
              :
              <a href={process.env.REACT_APP_LOGOUT}>
                <i className="fas fa-sign-out-alt" style={navButtonMobile} key='logout'></i>
              </a>
            }
          </div>
          <div style={imageDiv}>
          <img src={displayImage} alt={`${props.user.username} profile`} style={{'borderRadius':100, height: '150px'}}/>
          <h1 style={titleColor}>{props.user.firstname} {props.user.lastname}</h1>
          <h5 style={textColor}>{props.user.description}</h5>
        </div>
        <div style={cvContentMobile}>


        {props.user.skills.length > 0 ? <h2 style={titleColor}>Skills</h2> : <div/>}
              {props.user.skills.map(skill => {
                return(
                  <div key={`skill_${skill.id}`} style={{width:'100%'}}>
                    <h5 style={textColor}>{skill.skill}</h5>
                    <div className="w3-light-grey w3-round-xlarge" style={{width: '100%', color: textColor}}>
                      <div className="w3-container w3-center w3-round-xlarge" style={{width: `${skill.lvl}%`, backgroundColor: mobileWrapper.backgroundColor}}>{skill.lvl}%</div>
                    </div>
                  </div>
                )
              })}
            {props.user.education.length > 0 ? <h2 style={titleColor}>Education</h2> : <div/>}
              {props.user.education.map(school => {
              return(
                <div key={`education_{school.id}`}>
                  <h4 style={titleColor}>{school.emphasis}</h4>
                  <h5 style={titleColor}><i class="fa fa-graduation-cap" style={{marginRight: '5px'}}/>{school.school}</h5>
                  <h6 style={textColor}><i class="fa fa-calendar-alt" style={{marginRight: '5px'}}/>{`${dateHelper(school.start_date)} — ${school.end_date ? dateHelper(school.end_date) : 'Present'}`}</h6>
                </div>
              )
            })}


          {props.user.experience.length > 0 ? <h2 style={titleColor}>Experience</h2> : <div/>}
            {props.user.experience.map(experience => {
              return(
                <div key={`experience_${experience.id}`}>
                  <h4 style={titleColor}>{experience.title}</h4>
                  <h5 style={textColor}><i class='fas fa-building' style={{marginRight:'5px'}}/>{experience.company}</h5>
                  <h5 style={textColor}><i class='fas fa-map-marker-alt' style={{marginRight:'5px'}}/>{experience.location}</h5>
                  <h6 style={textColor}><i class='fas fa-calendar-alt' style={{marginRight:'5px'}}/>{`${dateHelper(experience.start_date)} — ${experience.end_date ? dateHelper(experience.end_date) : 'Present'}`}</h6>
                  <h5 style={textColor}>{experience.description}</h5>
                </div>
              )
            })}

        </div>

      </div>
    </div>
  )
}


export default DefaultProfileMobile
