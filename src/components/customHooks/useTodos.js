 import {useEffect, useState} from "react";
import { KEY_OF_LS } from "../../utils/helpers";
 
 
 export const useTodos = () => {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const todosFromLS = localStorage.getItem(KEY_OF_LS) ;
      const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : [];
  
      if (prepareTodos.length){
        setTodos(prepareTodos)
      }
    },[])
    
    useEffect(() => {
      localStorage.setItem(KEY_OF_LS, JSON.stringify(todos))
    },[todos])
    
  const createNewTargets = (text) => {
    const newTarget = {
      id: Date.now(),
      text ,
      status:false
    }
  
    setTodos(prev => [newTarget, ...prev])
  }
  
  const deleteTodo = (id) => {
      setTodos(prev => prev.filter(el => el.id !== id))
  } 
  
  const changeStatus = (id) => {
    setTodos(prev => prev.map(el => {
        if (el.id === id){
          return {
              ...el,
              status:!el.status
            }        
          }
          return el
      })
  )}


  function deleteAll(){
    setTodos([]);
  }
  
  return ({
    todos,
    createNewTargets,
    changeStatus,
    deleteTodo,
    deleteAll
  })
  
 }