import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// action constant
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// localStorage
const TODOARRAY_KEY = "toDoArray";
// localStorage에 null인 경우 발생하는 오류를 방지하기 위함
if(localStorage.getItem(TODOARRAY_KEY) === null) {
  // toDoArray 이름으로 빈 배열을 저장해줌
  localStorage.setItem(TODOARRAY_KEY, JSON.stringify([]));
}

// add action (action은 reducer에게 전달하고자하는 메시지를 담음)
// const addAction = (todo) => {
//   return {type: ADD_TODO, todo, id: Date.now(), getToDoArray: JSON.parse(localStorage.getItem(toDoArray))};
// };

// Redux toolkit createAction 함수 적용
const addAction = createAction("ADD_TODO");

// delete action
// const deleteAction = (id) => {
//   return {type: DELETE_TODO, id, getToDoArray: JSON.parse(localStorage.getItem(toDoArray))};
// };

const deleteAction = createAction("DELETE_TODO");

// redux reducer
// const reduxReducer = (state = [], action) => {
//   let getTodo;
//   switch (action.type) {
//     case addAction.type:
//       getTodo = JSON.parse(localStorage.getItem(TODOARRAY_KEY));
//       // concat() : 기존 배열에 추가하려는 배열을 합쳐서 새로운 배열을 반환
//       const addToDoArray = getTodo.concat({todo: action.payload, id: Date.now()});
//       localStorage.setItem(TODOARRAY_KEY, JSON.stringify(addToDoArray));
//       return addToDoArray;
//     case deleteAction.type:
//       getTodo = JSON.parse(localStorage.getItem(TODOARRAY_KEY));
//       const deleteToDoArray = getTodo.filter((todo) => todo.id !== action.payload);
//       localStorage.setItem(TODOARRAY_KEY, JSON.stringify(deleteToDoArray));
//       return deleteToDoArray;
//     default:
//       return state;
//   }
// };

// localStorage로 부터 데이터 받아오기
const getTodo = () => {
  return JSON.parse(localStorage.getItem(TODOARRAY_KEY));
};

// localStorage에 데이터 추가 저장하기
const setTodo = (arr) => {
  localStorage.setItem(TODOARRAY_KEY, JSON.stringify(arr));
};

// Redux toolkit을 이용한 Reducer
const reduxReducer = createReducer([], {
  [addAction] : (state, action) => {
    let toDoArray = getTodo();
    const addToDoArray = [...toDoArray, {todo: action.payload, id: Date.now()}];
    setTodo(addToDoArray);
    // state를 변경해주지 않으면 localStorage에는 반영이되어도 화면에는 변경사항이 반영이 안됨
    state.push(addToDoArray);
  },
  [deleteAction] : (state, action) => {
    let toDoArray = getTodo();
    const deleteToDoArray = toDoArray.filter((todo) => todo.id !== action.payload);
    setTodo(deleteToDoArray);
    state.push(deleteToDoArray);
  }
});

// const reduxStore = createStore(reduxReducer);
const reduxStore = configureStore({reducer: reduxReducer});
export const storeActions = { addAction, deleteAction };
export default reduxStore;
