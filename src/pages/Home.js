import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { storeActions } from '../reduxStore';
import '../css/Home.css';

function Home({todoArray, addTodo}) {
  const [todo, setTodo] = useState("");

  // input onChange
  const inputChange = ({target: {value}}) => {
    setTodo(value);
  };

  // form onSubmit
  const formSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className='home'>
      <h1>minimo</h1>
      {/* Todo Form */}
      <form className='form' onSubmit={formSubmit}>
        <input type="text" value={todo} onChange={inputChange} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoArray.map((todo) => <ToDo key={todo.id} {...todo} />)}
      </ul>
    </div>
  )
}

// redux로부터 state를 받아서 component에 props로 넘겨줌
function mapStateToProps() {
  return {todoArray:  JSON.parse(localStorage.getItem('toDoArray'))};
}

// dispatch : action메세지를 reducer한테 전달해주는 역할
function mapDispatchToProps(dispatch) {
  return {
    // add todo function을 props로 전달
    addTodo: (todo) => {
      if(todo !== "") {
        dispatch(storeActions.addAction(todo))
      } else {
        alert("글을 입력해주세요!");
      }
    }
  };
}

// connect Home component & reduxStore (getState, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
