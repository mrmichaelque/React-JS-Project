import React, { useState } from 'react';

const ProjectManagementApp = () => {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div>
      <h1>Project Management App</h1>
      <ProjectList projects={projects} />
      <AddProjectForm addProject={addProject} />
    </div>
  );
};

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.name}</strong> - {project.details} - Deadline: {project.deadline} - Status: {project.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({ name: '', details: '', deadline: '', status: 'Pending' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project);
    setProject({ name: '', details: '', deadline: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
        placeholder="Enter project name"
      />
      <input
        type="text"
        value={project.details}
        onChange={(e) => setProject({ ...project, details: e.target.value })}
        placeholder="Enter project details"
      />
      <input
        type="date"
        value={project.deadline}
        onChange={(e) => setProject({ ...project, deadline: e.target.value })}
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectManagementApp;
```

In this expanded version, the `Project` object now includes `name`, `details`, `deadline`, and `status` properties. The `ProjectList` component has been updated to display these additional details, and the `AddProjectForm` now captures all the project details and sets the initial status to "Pending".


Lori is your native AI chat client available for free on the App Store: https://apps.apple.com/us/app/id6446085163