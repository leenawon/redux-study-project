import React from 'react';
import { Link } from 'react-router-dom';

function ToDo({todo, id}) {
  return (
    <div>
      <li>
        <Link to={`/${id}`}>
          {todo}
        </Link>
        <button type="button">삭제</button>
      </li>
    </div>
  )
}

export default ToDo;
