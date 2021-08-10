import { useReducer } from "react";
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
export default function Counter() {
    //  inbuilt -> redux
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, setState] = useReducer(initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}
// useReducer shallow comparison-> useState 
// useState -> is made of useReducer