import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

//Giriş yapılmadan gezme durumlarında kullanılır
const PublicRoute = ({ isAuthenticated, children }) => (
  isAuthenticated ? <Navigate to="/blogs" /> : children
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
