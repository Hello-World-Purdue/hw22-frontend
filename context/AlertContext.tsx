import React, {PropsWithChildren, useState} from "react";

type NullableString = string | null;
type NullableFunction = Function | null;

const initialState: {
  title: NullableString;
  message: NullableString;
  type: NullableString;
  action: NullableFunction;
} = {
  title: null, // What the error corresponds to (Login error, Application error)
  message: null, // The error message to display
  type: null, // error | success | confirm
  action: null // action to carry out
};

const AlertContext = React.createContext({
  ...initialState,
  setAlert: (type: string, title: string, message: string, action: NullableFunction = null) => {},
  clearAlert: () => {},
});

export const AlertContextProvider = (props: PropsWithChildren<{}>) => {
  const [state, setState] = useState(initialState);

  // Set error
  const setAlert = (type: string, title: string, message: string, action: NullableFunction = null) => {
    setState({
      type,
      title,
      message,
      action
    });
  };

  // Clear error
  const clearAlert = () => {
    setState({
      type: null,
      title: null,
      message: null,
      action: null
    });
  };

  return (
    <AlertContext.Provider
      value={{
        type: state.type,
        title: state.title,
        message: state.message,
        action: state.action,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
