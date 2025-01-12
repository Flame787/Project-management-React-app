// same look for all buttons, only text inside them, and some additional props, can be different in each button

export default function Button({children, ...props}) {
  return (
    <button className="px-4 py-2 text-xs mb:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props}>
      {children}
      {/* children-prop - because text inside of the button should be flexible, we'll get it through props */}
      {/* we are also collecting all other props from different buttons, and we can later add them via spread...-operator */}
    </button>
  );
}
