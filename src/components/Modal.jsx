// universal Modal-overlay for different situations, f.e. warning about error during input-validation

import { createPortal } from "react-dom";
// with help of the Portal, we will put our Modal into special html-element with id: 'modal-root', 
// so it's better positioned in DOM-structure

export default function Modal({ children }) {
  return createPortal(<dialog>{children}</dialog>, document.getElementById('modal-root'));
}

// stopped at lection 156 (Section 9), 3:32 min
