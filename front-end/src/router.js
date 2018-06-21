import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Search from './components/Search'
import Profile from './components/Profile'
import Home from './components/Home'
import Edit from './components/Edit/Edit'
import PrivateRoute from './components/PrivateRouter'
import Login from './components/Login'


export default(
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/search' component={Search} />
		<PrivateRoute path='/edit' component={Edit} exact/>
		<Route path='/login' component={Login} exact/>
		<Route path='/:username' component={Profile} />
	</Switch>
)
