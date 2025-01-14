import { useRef } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  // component receives 'onAdd' as a prop

  // connecting Modal with useRef:
  const modal = useRef();

  // adding Refs to read values stored via input-fields:
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    // storing input-values into new constants via Refs:
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation - cases in which we should render an Error-Modal:
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
      // function returns, breaks here, in this case we don't want to continue further code
    }

    // calling the function onAdd (received through props), and passing an object as argument to this function:
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
    // we are expecting an object with this structure in the App-component
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure that you provide a valid value for every input field.
        </p>
      </Modal>
      {/* useRef for Modal */}
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* <p>
                <label>Title</label>
                <input />
            </p>
            <p>
                <label>Description</label>
                <textarea />
            </p>
            <p>
                <label>Due Date</label>
                <input />
            </p> */}
          {/* replaced this code with highly modifiable inner React-component: */}
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          {/* prop: textarea={true} would be redundant, so we just added 'textarea' */}
          <Input type="date" ref={dueDate} label="Due Date" />
          {/* added ref as prop to each <Input> component */}
        </div>
      </div>
    </>
  );
}
