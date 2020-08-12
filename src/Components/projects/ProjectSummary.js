import React from "react";
import moment from "moment";

function ProjectSummary({ project }) {
  return (
    <div className="card project-summary">
      <div className="card-content gery-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Author: {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {moment(project.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </div>
  );
}

export default ProjectSummary;
