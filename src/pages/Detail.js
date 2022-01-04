import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({todoArray}) {
  const {id} = useParams();
  const filterTodo = todoArray.filter((todo) => todo.id === parseInt(id))[0];
  return (
    <div>
      작성 글 : {filterTodo.todo} 
    </div>
  )
}

function mapStateToProps() {
  return {todoArray: JSON.parse(localStorage.getItem("toDoArray"))};
}

export default connect(mapStateToProps)(Detail);
