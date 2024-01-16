function AddProjectForm = ({ addProject }) => {
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

 export as default AddProjectForm