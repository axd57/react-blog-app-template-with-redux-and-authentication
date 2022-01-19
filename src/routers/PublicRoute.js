import React from 'react';
import { connect } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
//Hata
const PublicRoute = ({isAuthenticated, component:Component, ...rest}) => (
  <Route {...rest} component = {(props) => (
    isAuthenticated ? (
        <Navigate to="/blogs" />
    ):(
        <Component {...props} />
    )
  )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !! state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
