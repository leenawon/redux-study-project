import { createStore } from 'redux';

// action constant
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// localStorage
const toDoArray = "toDoArray";
// localStorage에 null인 경우 발생하는 오류를 방지하기 위함
if(localStorage.getItem(toDoArray) === null) {
  // toDoArray 이름으로 빈 배열을 저장해줌
  localStorage.setItem(toDoArray, JSON.stringify([]));
}

// add action (action은 reducer에게 전달하고자하는 메시지를 담음)
const addAction = (todo) => {
  return {type: ADD_TODO, todo, id: Date.now(), getToDoArray: JSON.parse(localStorage.getItem(toDoArray))};
};

// delete action
const deleteAction = (id) => {
  return {type: DELETE_TODO, id, getToDoArray: JSON.parse(localStorage.getItem(toDoArray))};
};

// redux reducer
const reduxReducer = (state = [], action) => {
  let getTodo = action.getToDoArray;
  switch (action.type) {
    case ADD_TODO:
      // concat() : 기존 배열에 추가하려는 배열을 합쳐서 새로운 배열을 반환
      const addToDoArray = getTodo.concat({todo: action.todo, id: action.id});
      localStorage.setItem(toDoArray, JSON.stringify(addToDoArray));
      return addToDoArray;
    case DELETE_TODO:
      const deleteToDoArray = getTodo.filter((todo) => todo.id !== action.id);
      localStorage.setItem(toDoArray, JSON.stringify(deleteToDoArray));
      return deleteToDoArray;
    default:
      return state;
  }
};

const reduxStore = createStore(reduxReducer);
export const storeActions = { addAction, deleteAction };
export default reduxStore;
