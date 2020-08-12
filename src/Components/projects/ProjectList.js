import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  if (projects) {
    return (
      <div className="project-list section">
        {projects.map((project) => (
          <Link key={project.id} to={"/project/" + project.id}>
            <ProjectSummary project={project}></ProjectSummary>
          </Link>
        ))}
      </div>
    );
  } else {
    return <span>.. Loading Projects</span>;
  }
}

export default ProjectList;
