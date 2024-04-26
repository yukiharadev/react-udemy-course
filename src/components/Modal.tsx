import { ReactNode } from "react";
import classes from "../css/Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
