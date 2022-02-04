import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { storeActions } from '../reduxStore';

function ToDo({todo, id, deleteTodo}) {
  return (
    <div>
      <li>
        <Link to={`/${id}`}>
          {todo}
        </Link>
        <button type="button" onClick={deleteTodo}>삭제</button>
      </li>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteTodo: () => {
      if(window.confirm("삭제하시겠습니까?")) {
        dispatch(storeActions.deleteAction(ownProps.id))
      }
    }
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
