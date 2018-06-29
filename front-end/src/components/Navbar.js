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
          { this.props.user &&
            <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
              <NavLink to='/Search' activeStyle={activeStyle}>
                <p>Search</p>
              </NavLink> 
              <NavLink to='/edit' activeStyle={activeStyle}>
                <p>Account</p>
              </NavLink>           
              <NavLink to='/Logout'>
                <p>Logout</p>
              </NavLink>
            </div>
          }
          { !this.props.user &&
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
  
const mapstateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapstateToProps)(Navbar)

