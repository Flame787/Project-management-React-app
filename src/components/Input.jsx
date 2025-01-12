import { forwardRef } from "react";
// forwardRef needs to be used in older React versions, like React 18... Current React verion is 19.0

// we have to wrap the entire component-function with forwardRef and store it in a variable or constant:
// component-function now receives and extra prop: 'ref'
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} />
      ) : (
        <input ref={ref} className={classes} {...props} />
        // added ref={ref} - we are adding this prop to each textarea or input-field, so it's values can be
        // stored via ref-props -> we can now add 'ref' as prop to all 3 <Input> components, rendered in NewProject,
      )}
    </p>
  );
});

export default Input; // here we are importing the constant (wrapper for the component)
