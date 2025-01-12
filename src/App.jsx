import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    // this property of state-object will be used to store project ID of selected project
    // it will be 'null' if we want to add new project, or 'undefined' if not adding new project
    projects: [], // array/list of all project IDs
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // signal that we are now adding a new project -> input-fields show up.
        // But until this state gets deactivated, we cannot close the input-layout, it stays open.
      };
    });
    // we get the previous state, and return an updated state-object
  }

  // lifting the state up from the NewProject-components, where we use Refs to store/read input-values:
  function handleAddProject(projectData) {
    // adding argument projectData - object with properties: title, description, dueDate
    setProjectsState((prevState) => {
      const projectId = Math.random();

      // defining what will new project look like (properties of this object):
      const newProject = {
        // title: ,
        // description: ,
        // dueDate:
        ...projectData,
        id: projectId,
        // adding new property to each new project: id - it can be any random number
      };

      return {
        ...prevState,
        selectedProjectId: undefined, // closes input-fields and renders initial screen
        // selectedProjectId: projectId,  // alternative
        projects: [...prevState.projects, newProject],
        // updating projects-list: first copying all existing projects, then as last one adding a new project
      };
    });
  }

  console.log(projectsState);

  let content; // conditionally rendering either NewProject-component or NoProjectSelected-component:

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {/* passing the list of our projects to this component, so all projects can be displayed in Side-bar */}
      
      {/* <NewProject /> */}
      {/* <NoProjectSelected onStartAddProject={handleStartAddProject} /> */}
      {content}
    </main>
  );
}

export default App;
