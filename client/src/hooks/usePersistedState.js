import { useState } from "react";

export default function usePersistedState(stateKey, initalState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);
        if (!persistedState) {
            return typeof initalState === 'function'
                ? initalState()
                : initalState;
        }
        return persistedState;
    });

    const setPersistedState = (input) => {
        const data = typeof input === 'function'
            ? input(state)
            : input;

        localStorage.setItem(stateKey, data);

        setState(data);
    };

    const clearState = () => {
        localStorage.removeItem(stateKey);
        setState(initalState);
    }

    return [
        state,
        setPersistedState,
        clearState
    ]
}