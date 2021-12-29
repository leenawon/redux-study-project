import { createStore } from 'redux';

// action constant
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// add action (action은 reducer에게 전달하고자하는 메시지를 담음)
const addAction = (todo) => {
  return {type: ADD_TODO, todo, id: Date.now()};
};

// delete action
const deleteAction = (id) => {
  return {type: DELETE_TODO, id};
};

// redux reducer
const reduxReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{todo: action.todo, id: action.id}, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const reduxStore = createStore(reduxReducer);
export const storeActions = { addAction, deleteAction };
export default reduxStore;
