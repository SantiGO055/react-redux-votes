
import { createAnecdote } from "../reducers/anecdoteReducer";
import { connect } from 'react-redux'

const CreateAnecdote = (props)=>{
    const createAnecdo = (event)=>{
        event.preventDefault();
        const inputAnec = event.target.inputAnecdote.value;
        event.target.inputAnecdote.value = ''
    
        props.createAnecdote(inputAnec)
      }

    return (<div>
            <h2>Create new</h2>
                <form onSubmit={createAnecdo}>
                    <div><input name="inputAnecdote"/></div>
                    <button className="btn btn-primary" size="sm" type="submit">Create</button>
            </form>
        </div>
    )
}


const mapDispatchToProps = {
    createAnecdote
}

const ConnectedAnecdote = connect(
    null,
    mapDispatchToProps
    )(CreateAnecdote)
export default ConnectedAnecdote