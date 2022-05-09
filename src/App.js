import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import { CardsAnecdotes } from './components/CardsAnecdotes'
import { NavbarBootstrap } from './components/Navbar'
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

const styleImg = {
  width: "5%"
}
// const styleImgButton = {
//   boxSizing: "0%",
//   display: "block",
//     padding: "0",
//     margin: "0",
//     // vertical-align: "top",
//     width: "10px",
// }
  return (
    <div>
      <NavbarBootstrap></NavbarBootstrap>

      <h2>Anecdotes</h2>
      <CardsAnecdotes anecdotes={anecdotes}></CardsAnecdotes>
      
      <h2>Create new</h2>
      <form onSubmit={createAnecdo}>
        <div><input name="inputAnecdote"/></div>
        <button className="btn btn-primary" size="sm" type="submit">Create</button>
      </form>
    </div>
  )
}

export default App