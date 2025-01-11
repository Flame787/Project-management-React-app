import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
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
        <Input label="Title" />
        <Input label="Description" textarea />
        {/* prop: textarea={true} would be redundant, so we just added 'textarea' */}
        <Input label="Due Date" />
      </div>
    </div>
  );
}
