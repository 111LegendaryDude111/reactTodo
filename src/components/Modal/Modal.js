import { useEffect } from "react"
import modalStyle from './modalStyle.module.scss'
import {createPortal} from 'react-dom'

function ModalContent({ children, closeHandler }) {
    useEffect(() => {
      const listenerHandler = (e) => {
        if (e.key === 'Escape') {
          closeHandler()
        }
      }
  
      document.addEventListener('keydown', listenerHandler)
  
      return () => {
        document.removeEventListener('keydown', listenerHandler)
      }
    }, [closeHandler])
  
    return (
      <div className={modalStyle.modalContent}>
        <button onClick={closeHandler} type="submit" className={`btn btn-primary ${modalStyle.btnClose}`}>
            ✕
        </button>
        {children}
      </div>
    )
  }
  
  export function Modal({ closeHandler, isOpen = false, children }) {
    if (!isOpen) return null
  
    const clickHandler = (e) => {
      if (e.target === e.currentTarget) {
        closeHandler()
      }
    }
  
    return createPortal(
      <div onClick={clickHandler} className={modalStyle.modalWr}>
        <ModalContent closeHandler={closeHandler}>
          {children}
        </ModalContent>
      </div>,
      document.getElementById('modal-root'),
    )
  }