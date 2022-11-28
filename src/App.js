import './App.css';
import { useTodos } from './components/customHooks/useTodos';
import { Footer } from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';


function App() {
 const {createNewTargets,deleteTodo,todos,changeStatus,deleteAll} = useTodos();

  return (
    <div className='container py-15'>
    <Header createNewTargets={createNewTargets} />
    <hr/>
    <Main deleteTodo={deleteTodo} todos={todos} changeStatus={changeStatus}/>
    <hr/>
    <Footer deleteAll={deleteAll}/>
    </div>
  )
}

export default App;
