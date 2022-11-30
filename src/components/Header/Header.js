import { useCallback, useState } from "react"
import { Form } from "../Form/Form"
import { Modal } from "../Modal/Modal"
import styles from './styles.module.css'

export const Header = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
      setIsModalOpen(true)
    }
  
    const closeModal = useCallback(() => {
      setIsModalOpen(false)
    }, [])
  
    
    return(
        <header className="d-flex justify-content-center">
        <button onClick={openModal} type="submit" className="btn btn-primary">
          Open modal
        </button>
  
        <Modal closeHandler={closeModal} isOpen={isModalOpen}>
          <Form submitAdditionAction={closeModal} />
        </Modal>
  
      </header>
    )
}