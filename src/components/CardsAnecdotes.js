import { CardAnecdote } from './CardAnecdote'
import { useSelector, useDispatch } from 'react-redux'
import {voteNote, createAnecdote, toggleImportanceOf} from '../reducers/anecdoteReducer'

export const CardsAnecdotes = (/*{anecdotes}*/)=>{
    const dispatch = useDispatch()
    const vote = (id) => {

        dispatch(voteNote(id))
        console.log('vote', id)
      }
    const toggleImportanceOfController = (id) => {

        dispatch(toggleImportanceOf(id))
        // console.log('vote', id)
      }

    const anecdotes = useSelector(({filter,anecdotes}) => {
    if(filter === 'ALL')
        return anecdotes
    return filter === 'IMPORTANT' ? anecdotes.filter(anecdoteFilter => anecdoteFilter.important) : anecdotes.filter(anecdoteFilter => !anecdoteFilter.important)
    })
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
            <CardAnecdote onClickToggleImportance={toggleImportanceOfController} anecdote={anecdote} onClickardo={vote}></CardAnecdote>
            </div>
            )
        }
        </div>
      )
}