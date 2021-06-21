function createStore() {
    // The Store should have four parts 
    // 1. The state 
    // 2. Get the state 
    // 3. Listen to changes on the state
    // 4. Update the State 

    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return {
            listeners = listeners.filter((l) => l !== listener);
        }
    }

    return {
        getState,
        subscribe
    }
}

const store = createStore();
store.subscribe(() => {
    console.log('The new State is : ' , store.getState());
});
const unsubscribe = store.subscribe(() => {
    console.log('The store has changed.');
});

unsubscribe();

