import React from 'react'
import ReactDOM from 'react-dom'

interface IBackdrop {
   show: boolean,
   notVisible?: boolean,
   onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Backdrop = ({ show, notVisible, onClick }: IBackdrop) =>
   ReactDOM.createPortal(
      show ? (
         <div
            className={notVisible ? 'backdrop' : 'backdrop backdrop--visible'}
            onClick={onClick}
         ></div>
      ) : null,
      document.getElementById('backdrop-root') as HTMLElement
   )

export default Backdrop
