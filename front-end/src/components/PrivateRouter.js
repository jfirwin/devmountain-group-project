import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const checkAuth = (isAuthenthicated) => {
    return isAuthenthicated ? true : false
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            return(rest.isAuthenticated ?
            <Component {...props} />
            :
            <Redirect to='/login' />)
    }} />)
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated : state.isAuthenticated
    }
}

export default connect(mapStateToProps, {checkAuth})(PrivateRoute)
