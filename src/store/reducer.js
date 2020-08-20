import * as actionType from "../actions/actionTypes";
const initialState = {
  age: 21,
  history: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actionType.AGE_UP_ASYNC:
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };

    case actionType.AGE_DOWN:
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };

    case actionType.DEL_ITEM:
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.key),
      };

    case actionType.PRESS_ENTER:
      if (action.value == "") {
        return state;
      } else {
        return Object.assign({}, state, {
          value: state.value.concat({ val: action.value, isDone: false }),
        });
      }

    default:
  }

  return newState;
};

export default reducer;
