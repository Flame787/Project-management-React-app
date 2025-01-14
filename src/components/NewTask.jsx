import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
//   default state-value (initially) is just an empty string, before user starts typing-in something

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {

    if (enteredTask.trim() === ''){
        return;
    }
// validation: if user entered just an empty string (nothing), it doesn't get saved as a task. 
// -> the following code in handleClick-function will not be executed, because the of the 'return'. 

    onAdd(enteredTask);
    // end of the prop-drilling for the onAdd-prop -> we are passing the value of enteredTask 
    // from this child-component to the prop-function (handleAddTask) defined in App.jsx
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        // reacts on every keystroke
        value={enteredTask}
        // setting new state (enteredTask) as the value of the input-field
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add task</button>
    </div>
  );
}
