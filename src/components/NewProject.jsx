import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
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
