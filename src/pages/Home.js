import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({todoArray}) {
  const [todo, setTodo] = useState("");

  // input onChange
  const inputChange = ({target: {value}}) => {
    setTodo(value);
  };

  // form onSubmit
  const formSubmit = (e) => {
    e.preventDefault();
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

export default connect(mapStateToProps)(Home);
