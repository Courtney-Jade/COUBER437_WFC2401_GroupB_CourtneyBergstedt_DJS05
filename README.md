# Redux-Inspired Store
## Overview
This project demonstrates the implementation of a Redux-inspired store to manage the state of a tally counter. The store includes functions to get the current state, dispatch actions to update the state, and subscribe to state changes. The focus is on state management without UI rendering, with all state changes observable through console logs.

## Scenarios and Solutions
### Scenario 1: Initial State
Given: No interactions have been performed yet.
When: The getState method is run and the result is logged to the console.
Then: The state should show a count of 0.

Solution: Upon initializing the store, the state is set to { count: 0 }. This is confirmed by logging the initial state to the console, which shows a count of 0.

### Scenario 2: Incrementing the Counter
Given: No interactions have been performed yet.
When: An ADD action is dispatched, followed by another ADD action.
Then: The state should show a count of 2.

Solution: Dispatching the ADD action twice increments the count by 1 each time. The updated state is logged to the console, showing a count of 2 after two ADD actions.

### Scenario 3: Decrementing the Counter
Given: The current count in the state is 2.
When: A SUBTRACT action is dispatched.
Then: The state should display a count of 1.

Solution: Dispatching the SUBTRACT action decreases the count by 1. The updated state is logged to the console, showing a count of 1 after the SUBTRACT action.

### Scenario 4: Resetting the Counter
Given: The current count in the state is 1.
When: A RESET action is dispatched.
Then: The state should display a count of 0.

Solution: Dispatching the RESET action sets the count back to 0. The updated state is logged to the console, showing a count of 0 after the RESET action.