import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => ( //contains exact, etc. from approuter
    <Route {...rest} component ={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props}/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //if it exists, u r authed
});

export default connect(mapStateToProps)(PublicRoute);