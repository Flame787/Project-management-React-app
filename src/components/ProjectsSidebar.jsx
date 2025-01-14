import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  // destructuring props-object to the one transferred prop: 'onStartAddProject' -> adding it to click-action
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          // creating new variable - CSS classes for projects in Sidebar,
          // CSS classes are conditionally added to the project-buttons,
          // depending if the current projectID is currently selected/chosen (then it gets highlighted) or not selected
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {/* we have to manually call the function onSelectProject(project.id) 
                to which we passed the project.id as argument, otherwise project.id will not be recognized and the
                function would break when any project from Sidebar is selected */}
                {project.title}
              </button>
            </li>
          );
        })}
        {/* mapping through all the elements in array, so that every project is rendered as a jsx-element <li> 
        with a clickable button inside, so we can open more info about each project from the Side-bar */}
      </ul>
    </aside>
  );
}
