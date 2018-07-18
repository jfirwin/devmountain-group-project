import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navbar extends Component {
  render(){

    let activeStyle = {
      color: '#E3E38A'
    }
  
    return (
      <nav className='nav-container'>
        <div className='nav-content'>    
        <NavLink to='/'>
          <p>Logo/Home</p>
        </NavLink>
          { this.props.isAuthenticated &&
            <div style={{display: 'flex', justifyContent: 'space-around', width: 300}}>
              <NavLink to={`/${this.props.userLoggedIn}`} activeStyle={activeStyle}>
                <p>Profile</p>
              </NavLink>
              <NavLink to='/Search' activeStyle={activeStyle}>
                <p>Search</p>
              </NavLink> 
              <NavLink to='/edit' activeStyle={activeStyle}>
                <p>Account</p>
              </NavLink>           
              <a href='http://localhost:3005/auth/logout'>
                <p>Logout</p>
              </a>
            </div>
          }
          { !this.props.isAuthenticated &&
            <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
              <NavLink to='/search' activeStyle={activeStyle}>
                <p>Search</p>
              </NavLink>
              <a href='http://localhost:3005/auth/login'>
                <p>Login/Signup</p>
              </a>
            </div>
          }
        </div>
      </nav>
    )
  }
}
  
const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    userLoggedIn: state.userLoggedIn
  }
}

export default connect(mapStateToProps)(Navbar)

