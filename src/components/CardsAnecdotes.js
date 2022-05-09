import { CardAnecdote } from './CardAnecdote'
import { useSelector, useDispatch } from 'react-redux'
import {voteNote, createAnecdote} from '../reducers/anecdoteReducer'

export const CardsAnecdotes = ({anecdotes})=>{
    const dispatch = useDispatch()
    const vote = (id) => {

        dispatch(voteNote(id))
        console.log('vote', id)
      }
    return (
        <div style={{display: "flex", flexDirection:"row", flexWrap: "wrap"}}>

            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            {/* <div>
                {anecdote.content}
                </div>
                <div>
                Votos {anecdote.votes}
                
                
                <button name="btnVote" onClick={() => vote(anecdote.id)}>vote</button>
            </div> */}
            <CardAnecdote  anecdote={anecdote} onClickardo={vote}></CardAnecdote>
            </div>
            )
        }
        </div>
      )
}