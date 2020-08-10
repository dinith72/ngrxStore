export function CounterReducer(state: number = 0, action) {
    // according to the action type different reducers are executed
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
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
   