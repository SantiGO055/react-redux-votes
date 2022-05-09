import { CardAnecdote } from './CardAnecdote'
import { useSelector, useDispatch } from 'react-redux'
import {voteNote, createAnecdote, toggleImportanceOf} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import VisibilityFilter  from './VisibilityFilter'
const CardsAnecdotes = (props)=>{

    return (
        <div>
            <div style={{display: "flex", flexDirection:"row", flexWrap: "wrap"}}>
                <h2>Anecdotes</h2>
                {props.anecdotes.map(anecdote =>
                    <CardAnecdote key={anecdote.id} onClickToggleImportance={props.toggleImportanceOf} anecdote={anecdote} onClickardo={props.voteNote}></CardAnecdote>

                )
                }
                
                
            </div>
            <VisibilityFilter style={{marginBottom: "50px"}}></VisibilityFilter>
        </div>
      )
}
const mapStateToProps = (state)=>{
        if(state.filter === 'ALL')
            return {
                anecdotes: state.anecdotes
            }
        return {
            anecdotes: (state.filter === 'IMPORTANT' 
            ? state.anecdotes.filter(anecdoteFilter => anecdoteFilter.important) 
            : state.anecdotes.filter(anecdoteFilter => !anecdoteFilter.important)
            )
        }
    // return{
    //     anecdotes: state.anecdotes,
    //     filter: state.filter
    // }
}

const mapDispatchToProps = {
    toggleImportanceOf,
    voteNote
}

const ConnectedAnecdote = connect(
    mapStateToProps,
    mapDispatchToProps
    )(CardsAnecdotes)
export default ConnectedAnecdote