import { useTodosContext } from "../../contexts/ToDoContext"



export const Footer = () => {

    const {deleteAll} = useTodosContext()
    

    return (
        <div className="d-flex justify-content-center">
        <button 
        onClick={deleteAll}
        type="button" 
        className="btn btn-warning"> Clear All </button>
        </div>
    )
}