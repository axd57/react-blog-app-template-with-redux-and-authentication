import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
//Hata
const PrivateRoute = ({isAuthenticated, component:Component, ...rest}) => (
  <Route {...rest} component = {(props) => (
    isAuthenticated ? (
        <Component {...props} />
    ):(
        <Navigate to="/" />
    )
  )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !! state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
