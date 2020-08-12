import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";

class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
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
    this.props.createProject(this.state);
    this.props.history.push("/");
  };

  render() {
    const { isLoading, error } = this.props.project;
    return (
      <div className="container">
        <form className="white z-depth-2" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">
              {!isLoading ? "Create" : ".. Loading"}
            </button>
            <div className="red-text center">
              {error ? <p>{error}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
