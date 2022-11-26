import { Form } from "../Form/Form"
import styles from './styles.module.css'

export const Header = ({createNewTargets}) =>{
    
    return(
        <header className={styles.top}>
            <Form createNewTargets={createNewTargets} />
        </header>

    )
}