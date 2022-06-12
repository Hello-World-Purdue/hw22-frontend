import React, { useState } from 'react';

const initialState = {
    title: null,
    message: null,
    type: null // error or success
};

const AlertContext = React.createContext(Object.assign(Object.assign({}, initialState), { setAlert: (type, title, message) => { }, clearAlert: () => { } }));

export const AlertContextProvider = (props) => {
    const [state, setState] = useState(initialState);

    // Set error
    const setAlert = (type, title, message) => {
        setState({
            type,
            title,
            message
        });
    };

    // Clear error
    const clearAlert = () => {
        setState({
            type: null,
            title: null,
            message: null
        });
    };

    return (React.createElement(AlertContext.Provider, { value: {
            type: state.type,
            title: state.title,
            message: state.message,
            setAlert,
            clearAlert
        } }, props.children));
};

export default AlertContext;
