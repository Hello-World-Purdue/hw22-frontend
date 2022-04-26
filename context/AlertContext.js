import React, { useState } from 'react';

const initialState = {
    title: null, // What the error corresponds to (Login error, Application error)
    message: null, // The error message to display
    type: null, // error | success
}

const AlertContext = React.createContext({
    ...initialState,
    setAlert: (type, title, message) => {},
    clearAlert: () => {}
});

export const AlertContextProvider = (props) => {
    const [state, setState] = useState(initialState);

    // Set error
    const setAlert = (type, title, message) => {
        setState({
            type,
            title,
            message,
            action
        });
    }

    // Clear error
    const clearAlert = () => {
        setState({
            type: null,
            title: null,
            message: null,
        })
    }

    return (
        <AlertContext.Provider value={{
            type: state.type,
            title: state.title,
            message: state.message,
            setAlert,
            clearAlert
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContext;