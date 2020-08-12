import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

function Navbar(props) {
  const { auth, profile } = props;
  console.log(props);
  const links = auth.uid ? (
    <SignedInLinks profile={profile}></SignedInLinks>
  ) : (
    <SignedOutLinks></SignedOutLinks>
  );
  return (
    <nav className="grey darken-3">
      <div className="nav-wrapper col s12">
        <Link to="/" className="brand-logo left">
          <img
            alt="logo"
            src="../img/logo.png"
            className="brand-logo-image"
          ></img>
          <span className="brand-logo-text">TO-DO</span>
        </Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
