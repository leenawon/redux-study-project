import React, { useState } from 'react';
import { connect } from 'react-redux';
import { storeActions } from '../reduxStore';

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
    <div>
      <h4>Redux Study (mini todo)</h4>
      {/* Todo Form */}
      <form onSubmit={formSubmit}>
        <input type="text" value={todo} onChange={inputChange} />
        <button type="submit">추가</button>
      </form>
      <ul>
        {JSON.stringify(todoArray)}
      </ul>
    </div>
  )
}

// redux로부터 state를 받아서 component에 props로 넘겨줌
function mapStateToProps(state) {
  return {todoArray: state};
}

// dispatch : action메세지를 reducer한테 전달해주는 역할
function mapDispatchToProps(dispatch) {
  return {
    // add todo function을 props로 전달
    addTodo: (todo) => dispatch(storeActions.addAction(todo))
  };
}

// connect Home component & reduxStore (getState, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
