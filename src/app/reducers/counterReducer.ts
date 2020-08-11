import {CounterEnum} from '../actionEnum';
export function CounterReducer(state: number = 10, action) {
  console.log(action);
    // according to the action type different reducers are executed
    switch (action.type) {
      case CounterEnum.INCREMENT:
        return (state + action.payload);
        break;
   
      case 'DECREMENT': {

   
        return state - 1;
      }
      // return
   
      default:
        return state;
        break;
    }
   }
   