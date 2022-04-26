import React, {PropsWithChildren, useState} from "react";

type NullableString = string | null;

const initialState: {
  title: NullableString;
  message: NullableString;
  type: NullableString;
} = {
  title: null, // What the error corresponds to (Login error, Application error)
  message: null, // The error message to display
  type: null, // error | success
};

const AlertContext = React.createContext({
  ...initialState,
  setAlert: (type: string, title: string, message: string) => {},
  clearAlert: () => {},
});

export const AlertContextProvider = (props: PropsWithChildren<{}>) => {
  const [state, setState] = useState(initialState);

  // Set error
  const setAlert = (type: string, title: string, message: string) => {
    setState({
      type,
      title,
      message,
    });
  };

  // Clear error
  const clearAlert = () => {
    setState({
      type: null,
      title: null,
      message: null,
    });
  };

  return (
    <AlertContext.Provider
      value={{
        type: state.type,
        title: state.title,
        message: state.message,
        setAlert,
        clearAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
