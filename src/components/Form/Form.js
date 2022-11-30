import {useState} from "react";
import { useTodosContext } from "../../contexts/ToDoContext";
import styles from './styles.module.css'
export const Form = () => {
    
    const {createNewTargets} = useTodosContext();
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        if(input){
            createNewTargets(input)
        }
        setInput('')
    }


    return(
        <form onSubmit={submitHandler} 
        className="d-flex flex-column alugn-items-center">
            <div className="d-flex input-group mb-3 justify-content-center">
                <input onChange={(e) => setInput(e.currentTarget.value)} 
                value={input} 
                type="text" 
                className="form-control" 
                placeholder='type target' />
                <button className={`btn btn-outline-secondary btn-info ${styles.btnn}`} type="submit" > Add </button>
            </div>
        </form>

    )
}