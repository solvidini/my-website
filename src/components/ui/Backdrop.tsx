import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'

interface IBackdrop {
  show: boolean
  notVisible?: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  isSideDrawer?: boolean
}

const Backdrop = ({ show, notVisible, onClick, isSideDrawer }: IBackdrop) =>
  ReactDOM.createPortal(
    show ? (
      <div
        className={classNames(
          'backdrop',
          !notVisible && 'backdrop--visible',
          isSideDrawer && 'backdrop--sideDrawer',
        )}
        onClick={onClick}
      ></div>
    ) : null,
    document.getElementById('backdrop-root') as HTMLElement,
  )

export default Backdrop
