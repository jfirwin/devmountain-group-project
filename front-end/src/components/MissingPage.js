import React from 'react';
import Navbar from './Navbar'

const DefaultProfile = (props) => {
  return (
    <div>
    <Navbar/>
      <h1>Uh Oh!</h1>
      <h3>It looks like the user you are trying to reach doesn't exist... are you sure you are looking for a user with the username of <i>{props.username}</i>?</h3>
    </div>
  )
}

export default DefaultProfile
