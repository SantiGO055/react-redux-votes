import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import  CardsAnecdotes  from './components/CardsAnecdotes'
import { NavbarBootstrap } from './components/Navbar'
import {voteNote, createAnecdote} from './reducers/anecdoteReducer'



const App = (props) => {
  // const dispatch = useDispatch()
  // const anecdotes = useSelector(state => state)

  
  
const padding = {
  padding: 5
}
  return (
    <div>
      
      <NavbarBootstrap></NavbarBootstrap>

      
      {/* <CardsAnecdotes></CardsAnecdotes> */}
      
      
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    },
  }
}
export default connect(
  null, 
  mapDispatchToProps
)(App)