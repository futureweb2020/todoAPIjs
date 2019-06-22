import { connect } from 'react-redux'
import { updateAction, deleteAction } from '../actions'
import TodoItem from '../components/TodoItem'

const mapStateToProps = (state, ownProps) => ({
  todoContent: state.content
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpdate: () => dispatch(updateAction(ownProps.todoId)),
  onDelete: () => dispatch(deleteAction(ownProps.todoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem)
