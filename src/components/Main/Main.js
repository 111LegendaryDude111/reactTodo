import style from './style.module.css'

export const Main = ({todos,deleteTodo,changeStatus}) => {
console.log(style.done)
    if (todos.length === 0){
        return (<p> todos is empty </p>);
    }

    return (
        <main>
            <div className="d-flex align-items-center justify-content-center flex-column container">
            {
            todos.map((el,i) => {
                 return(
                    <div key={i}  className={`d-flex ${style.wBlock}`}>
                    <p key={el.id} className={`mr-auto p-2 justify-content-start ${el.status ? style.done: '' }`}> {i + 1}: {el.text}</p>
                    <span className="p-auto">
                        <button 
                        onClick={ () => changeStatus(el.id)}
                        type="button" className="btn btn-success mr-auto">Success</button>
                        <button
                        onClick={() => deleteTodo(el.id)}
                        type="button" className="btn btn-danger ">Delete</button>
                    </span>
                    </div>
                    )
            })
        }
        </div>
        </main>
        )
}