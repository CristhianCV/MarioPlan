import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      showError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .signIn(this.state)
      .then(() => {})
      .catch(() => {
        this.setState({
          showError: true,
        });
      });
  };

  render() {
    const { authError, isLoading } = this.props.auth;
    return (
      <div className="container">
        <form className=" white z-depth-2" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">
              {!isLoading ? "Submit" : ".. Loading"}
            </button>
            <div className="red-text center">
              {this.state.showError && authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
