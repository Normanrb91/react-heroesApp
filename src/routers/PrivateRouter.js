import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRouter = ({
    isAutenticated,
    component : Component,
    ...rest
}) => {

    return (
        <Route {...rest}
           component={(props) => (
            
            (isAutenticated)
                ? ( <Component {...props}/> )
                : ( <Redirect to="/login" />)
           )} />
            
        
    )
}

PrivateRouter.prototype = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}