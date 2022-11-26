import { useState } from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'


function App() {

let [todos, setTodos] = useState([]);

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
