import React, { useContext } from "react";
import { useTodos } from "../components/customHooks/useTodos";

export const TodosContext = React.createContext();

export const TodosContextProvider = ({children}) => {

 const {createNewTargets,deleteTodo,todos,changeStatus,deleteAll} = useTodos();


    return(
        <TodosContext.Provider value={{
            createNewTargets,
            deleteTodo,
            todos,
            changeStatus,
            deleteAll}}>

            {children}
        </TodosContext.Provider>

    )
}

export const useTodosContext = () => useContext(TodosContext)