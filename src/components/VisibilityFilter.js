import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const VisibilityFilter = (props) => {
  // const dispatch = useDispatch()

  return (
    <div style={{display: "flex", flexDirection:"row"}}>
      all    
      <input 
        type="radio" 
        name="filter" 
        onChange={() => props.filterChange('ALL')}
      />
      important   
      <input
        type="radio"
        name="filter"
        onChange={() => props.filterChange('IMPORTANT')}
      />
      nonimportant 
      <input
        type="radio"
        name="filter"
        onChange={() => props.filterChange('NONIMPORTANT')}
      />
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    filterChange: value => {
      dispatch(filterChange(value))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VisibilityFilter)