function createStore(reducer) {
    let state;
    let listeners = [];

    //Function will get the current state
    function getState() {
        return state;
    }

    // Function to dispatch actions and update state
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    }

    //Function will subscribe to state changes
    function subscribe(listener) {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(1 => 1 !== listener);
        };
    }
}