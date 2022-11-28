


export const Footer = ({deleteAll}) => {


    return (
        <div className="d-flex justify-content-center">
        <button 
        onClick={deleteAll}
        type="button" 
        className="btn btn-warning"> Warning </button>
        </div>
    )
}