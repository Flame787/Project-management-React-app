// this smaller component 'Tasks' will be rendered inside the SelectedProject-component
// when we open each project, there is a small task list for that project:

import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />

      {/* If no tasks on the list, outputting just this info: */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {/* But if there are some tasks on the list (at least 1), outputting full list of the tasks. 
        Each task will be mapped as individual list-item inside of the <ul>:*/}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(task.id)}>
                {/* passing task-id inside of the function to delete a task */}
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
