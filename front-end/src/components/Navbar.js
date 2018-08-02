import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MediaQuery from 'react-responsive'
import logo from '../images/cv-finder-white-text.svg'

class CollapsiveMenu extends Component {

  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render(){
    return(
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <NavLink to='/'>
          <img style={{height:"2.5em"}} src={logo} alt="CV Finder logo"/>
        </NavLink>
        { !this.props.isAuthenticated &&
        <div>
          <MenuIcon
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            style={{fontSize: '50px', color: '#E3E38A'}}
            >
            menu
            </MenuIcon>
            <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
              <MenuItem onClick={this.handleClose}><Link to='/search' style={{color: 'black'}}>Search</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><a href={process.env.REACT_APP_LOGIN} style={{color: 'black'}}>Login/SignUp</a></MenuItem>
            </Menu>
          </div>
        }
        { this.props.isAuthenticated &&
          <div>
            <MenuIcon
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            style={{fontSize: '50px', color: '#E3E38A'}}
            >
            menu
            </MenuIcon>
            <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
              <MenuItem onClick={this.handleClose}><Link to={`/${this.props.userLoggedIn}`} style={{color: 'black'}}>Profile</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><Link to='/search' style={{color: 'black'}}>Search</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><Link to='/edit' style={{color: 'black'}}>Account</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><a href={process.env.REACT_APP_LOGOUT} style={{color: 'black'}}>Logout</a></MenuItem>
            </Menu>
          </div>
        }
      </div>
    )
  }
}

class Navbar extends Component {

  render(){

    let activeStyle = {
      color: '#E3E38A'
    }

    return (
        <div className='nav-content nav-container'>
        <MediaQuery query='(min-width: 1000px)'>
          <NavLink to='/'>
            <img style={{height:"2.5em"}} src={logo} alt="CV Finder logo"/>
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
                <a href={process.env.REACT_APP_LOGOUT}>
                  <p>Logout</p>
                </a>
              </div>
            }
            { !this.props.isAuthenticated &&
              <div style={{display: 'flex', justifyContent: 'space-around', width: 200}}>
                <NavLink to='/search' activeStyle={activeStyle}>
                  <p>Search</p>
                </NavLink>
                <a href={process.env.REACT_APP_LOGIN}>
                  <p>Login/Signup</p>
                </a>
              </div>
            }
          </MediaQuery>
          <MediaQuery query='(max-width: 1000px)'>
            <CollapsiveMenu isAuthenticated={this.props.isAuthenticated} userLoggedIn={this.props.userLoggedIn}/>
          </MediaQuery>
        </div>

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
