import React, {Component} from 'react';
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {style} from './homeStyle'
import resume from './images/default-theme.png'
import MediaQuery from 'react-responsive'
import '../App.css'
import logo from '../images/cv-finder-black.svg'


const FullSizeHome = (props) => {
  return(
      <div>
        <div style={style.centerPieceFullSize}>
          <img src={logo} alt="CV Finder Logo" style={{width:"75vw"}}/>
          <h5>CV Finder is a place where you can share your own digtal resume in a unique way!</h5>
        </div>
        <div style={style.homeContentFullSize}>
          <div style={style.homeTextFullSize}>
            <p>We provide a service which will allow you to build AND show your resume.
            Our goal is to let you focus on what content you want to display, and we will take care of the structure of it.</p>
          </div>
          <div>
            <img src={resume} alt="default resume" style = {style.resumeFullSize}/>
          </div>
        </div>
        <div style = {style.homeFunctionsFullSize}>
          <div style= {style.buttonsAlign}>
            <ButtonWindow button='Search' link={process.env.REACT_APP_SEARCH}>
            <p>Search a potential employee.</p>
            </ButtonWindow>
            <ButtonWindow button='Sign in' link={process.env.REACT_APP_LOGIN}>
            <p>Is this your first time visiting? Create a profile!</p>
            </ButtonWindow>
          </div>
        </div>
      </div>
    )
}

const MobileSizeHome = () => {

  return(
      <div style={style.mobileContainer}>
        <div style={style.mobileCenterPiece}>
          <img src={logo} alt="CV Finder Logo" style={{width:"75vw"}}/>
          <h5>CV Finder is a place where you can share your own digtal resume in a unique way!</h5>
        </div>
        <div style={style.homeTextMobile}>
            <p>We provide a service which will allow you to build AND show your resume.
            Our goal is to let you focus on what content you want to display, and we will take care of the structure of it.</p>
        </div>
        <img src={resume} alt="resume" style = {style.resumePicMobile}/>
        <p style={style.homeTextMobile}>Search a potential employee.</p>
        <a href="#/search"><button style={style.mobileButton}>Search</button></a>
        <p style={style.homeTextMobile}>Is this your first time visiting? Create a profile!</p>
        <a href="#/login"><button style={style.mobileButton}>Create a Profile</button></a>
      </div>
    )
}

const ButtonWindow = (props) => {
  const center = {
    'display': 'flex',
    'flexDirection': 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  return (
    <div className='homeSection' style={center}>
        <div style={{textAlign: 'center'}}>
          <div style={{'fontFamily': 'News Cycle', fontSize: '30px'}}>{props.children}</div>
        </div>
        <div>
        <a href={props.link}>
            <button className='button'>
              {props.button}
            </button>
          </a>
        </div>
      </div>

    )
}

class Home extends Component{
  render(){
    return (
      <div>
        <Navbar/>
        <MediaQuery query='(min-width: 1000px)'>
          <FullSizeHome />
        </MediaQuery>
        <MediaQuery query='(max-width: 999px)'>
          <MobileSizeHome />
        </MediaQuery>
      </div>
    )
}}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}
export default connect(mapStateToProps)(Home)
