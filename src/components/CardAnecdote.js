

export const CardAnecdote = ({onClickardo, anecdote, onClickToggleImportance})=>{
    const URL_IMG = require('../img/like.png')
    
    return (
        <div className="card"  style={{width: "18rem", display:"flex", flexDirection:"row", gap:"5px"}}>
        {/* <div class="card-header">
            Featured
        </div> */}
        <div className="card-body">
            <h5 className="card-title" style={{wordBreak: "break-all", hyphens: "auto"}}>{anecdote.content}</h5>
            
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><p className="card-text">Tiene {anecdote.votes} votos</p></li>
                <li className="list-group-item">{anecdote.important ? <strong> importante</strong> : 'No importante'}</li>
                
            </ul>
            
            <button type="button" className="btn btn-primary" size="sm" variant="primary" name="btnVote" onClick={() => onClickardo(anecdote.id)}>Vote <img  src={URL_IMG}/></button>
            <button type="button" className="btn btn-primary" size="sm" variant="primary" name="btnVote" onClick={() => onClickToggleImportance(anecdote.id)}>Toggle Importance </button>
        </div>
        </div>
    )
}