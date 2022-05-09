export const CardAnecdote = ({onClickardo, anecdote})=>{
    const URL_IMG = require('../img/like.png')

    return (
        <div className="card"  style={{width: "18rem", display:"flex", flexDirection:"row", gap:"5px"}}>
        {/* <div class="card-header">
            Featured
        </div> */}
        <div className="card-body">
            <h5 className="card-title" style={{wordBreak: "break-all"}}>{anecdote.content}</h5>
            <p className="card-text">Tiene {anecdote.votes} votos</p>
            <button type="button" className="btn btn-primary" size="sm" variant="primary" name="btnVote" onClick={() => onClickardo(anecdote.id)}>Vote <img  src={URL_IMG}/></button>
        </div>
        </div>
    )
}