import { useEffect, useState } from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'


function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const todosFromLS = localStorage.getItem('todos') ;
    const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : [];

    if (prepareTodos.length){
      setTodos(prepareTodos)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
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



  return (
    <div className='container py-15'>
    <Header createNewTargets={createNewTargets} />
    <hr/>
    <Main deleteTodo={deleteTodo} todos={todos} changeStatus={changeStatus}/>
    </div>
  )
}

export default App;
