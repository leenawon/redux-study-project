import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Detail.css';

function Detail({todoArray}) {
  const {id} = useParams();
  const filterTodo = todoArray.filter((todo) => todo.id === parseInt(id))[0];
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className='detail'>
      <button type='button' onClick={goHome}>돌아가기</button>
      <h3>🎈작성한 내용</h3> 
      <p>{filterTodo.todo}</p>
    </div>
  )
}

function mapStateToProps() {
  return {todoArray: JSON.parse(localStorage.getItem("toDoArray"))};
}

export default connect(mapStateToProps)(Detail);
