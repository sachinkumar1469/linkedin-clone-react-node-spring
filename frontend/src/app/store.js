import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    extra:extraReducer
  },
});

function counterReducer(state = {value : 0},action){
  console.log("Conter reducer called. Value of state is:",state);
  if(action.type == "increase"){
    return {...state,value:state.value+1}
  }
  return state;
}

function extraReducer(state={value:1},action){
  console.log("Extra reducer called. Value of state is:",state);
  if(action.type == "increase"){
    return {...state,value:state.value + 1}
  }
  return state;
}
