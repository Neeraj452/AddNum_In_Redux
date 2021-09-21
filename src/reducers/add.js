const intialState={
    num1:0,
    num2:0,
    result:0
};
const changeTheNumber = (state= intialState, action) =>{
    switch(action.type){
          case "firstNumber": 
          state.num1 = action.data;
          state.result = Number(state.num1) + Number(state.num2);
          return {...state} 
          case "secondNumber": 
          state.num2 = action.data;
          state.result = Number(state.num1) + Number(state.num2);
          return {...state}
          
          default: return state; 
    }
}
export default changeTheNumber;