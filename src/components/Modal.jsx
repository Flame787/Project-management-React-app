// universal Modal-overlay for different situations, f.e. warning about error during input-validation

import { forwardRef, useImperativeHandle, useRef } from "react";
// forwardRef is required only if using React version 18 or older

import { createPortal } from "react-dom";
// with help of the Portal, we will put our Modal into special html-element with id: 'modal-root',
// so it's better positioned in DOM-structure

import Button from "./Button";

// export default function Modal({ children }) {...}
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  // expose the function that can be called from outside of this current function, f.e. open()-method:
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        // showModal is a method provided by the built-in <dialog>-element
        // open is now a method provided by our component to other components
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
  // 2nd argument is destination, where this dialog is going to be shown in DOM-structure
});
export default Modal;
