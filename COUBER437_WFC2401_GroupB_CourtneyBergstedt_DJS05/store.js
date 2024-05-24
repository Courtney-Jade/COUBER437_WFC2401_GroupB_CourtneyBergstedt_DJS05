function createStore(reducer) {
    let state;
    let listeners = [];
  
    // Function to get the current state
    function getState() {
      return state;
    }
  
    // Function to dispatch actions and update state
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    }
  
    // Function to subscribe to state changes
    function subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    }
  
  //Initialize the state
  dispatch({ type: '@@INIT' });

  return {
    getState,
    dispatch,
    subscribe
  };
}

// Reducer function to handle actions and update state
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 };
          case 'SUBTRACT':
            return { count: state.count - 1 };
          case 'RESET':
            return { count: 0 };
          default:
            return state;
    }
}
 
//Create store with the reducer
const store = createStore(counterReducer);

//Subscribe to state changes and log the new state
store.subscribe(() => {
    console.log(store.getState());
});

// Initial state check
console.log('Initial state:', store.getState());

// Test cases
console.log('Dispatching ADD');
store.dispatch({ type: 'ADD' });
console.log('Dispatching ADD');
store.dispatch({ type: 'ADD' });

console.log('Dispatching SUBTRACT');
store.dispatch({ type: 'SUBTRACT' });

console.log('Dispatching RESET');
store.dispatch({ type: 'RESET' });
