import { useEffect, useRef } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
}: React.PropsWithChildren<ModalProps>) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      if (isOpen) {
        onClose();
      }
    };

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog ref={dialogRef} onClick={handleBackdropClick}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </dialog>
  );
};

export default Modal;
