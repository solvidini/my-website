import React, { useEffect, useRef, FC } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';

interface Props {
   show: boolean,
   onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => void,
   isError?: boolean,
   title: string,
}

const Modal: FC<Props> = ({ show, onClose, isError, title, children }) => {
   const OKButtonRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      OKButtonRef?.current?.focus();
   });

   return ReactDOM.createPortal(
      <>
         <Backdrop show={show} onClick={onClose} />
         <div className="modal">
            <h1 className={!isError ? 'modal__title' : 'modal__title modal__title--error'}>
               {title}
            </h1>
            <div className="modal__content">{children}</div>
            <button onClick={onClose} className="modal__submit" ref={OKButtonRef}>
               OK
            </button>
         </div>
      </>,
      document.getElementById('modal-root') as HTMLElement
   );
};

export default Modal;
