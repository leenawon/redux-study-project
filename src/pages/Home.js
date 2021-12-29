import React, { useState } from 'react';

function Home() {
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
    </div>
  )
}

export default Home;