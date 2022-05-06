import { useSelector, useDispatch } from 'react-redux'
import {voteNote, createAnecdote} from './reducers/anecdoteReducer'
const App = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  const vote = (id) => {
    dispatch(voteNote(id))
    console.log('vote', id)
  }
  const createAnecdo = (event)=>{
    event.preventDefault();
    const inputAnec = event.target.inputAnecdote.value;
    event.target.inputAnecdote.value = ''

    dispatch(createAnecdote(inputAnec))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button name="btnVote" onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createAnecdo}>
        <div><input name="inputAnecdote"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App