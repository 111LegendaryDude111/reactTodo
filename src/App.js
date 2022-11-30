import './App.css';
import { useTodos } from './components/customHooks/useTodos';
import { Footer } from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import { TodosContextProvider } from './contexts/ToDoContext';

function App() {

  return (
    <TodosContextProvider >
      <div className='container py-15'>
      <Header />
      <hr/>
      <Main/>
      <hr/>
      <Footer/>
      </div>
    </TodosContextProvider>
  )
}

export default App;
