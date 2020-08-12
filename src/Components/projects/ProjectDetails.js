import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { deleteProject } from "../../store/actions/projectActions";

export class ProjectDetails extends Component {
  buttonStyles = {
    marginRight: "10px",
  };

  handleClick = (e) => {
    this.props.deleteProject(this.props.match.params.id);
    this.props.history.push("/");
  };

  handleBackClick = (e) => {
    this.props.history.push("/");
  };

  render() {
    const { project } = this.props;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="content">
            <button
              style={this.buttonStyles}
              className="btn lighten-1"
              onClick={this.handleBackClick}
            >
              Back
            </button>
          </div>
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title"> {project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>
                {moment(project.createdAt.toDate().toString()).calendar()}
              </div>
            </div>
          </div>
          <div className="content">
            <button
              style={this.buttonStyles}
              className="btn pink lighten-1"
              onClick={this.handleClick}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <p>Loading project ...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [{ collection: "projects", doc: props.match.params.id }];
  })
)(ProjectDetails);
