import React from "react";
export const AppContext = React.createContext();

export const withContext = Components => {
  return (props) => (
    <AppContext.Consumer>
      {({ state,actions}) => {
        return <Components {...props} data={state} actions={actions}/>;
      }}
    </AppContext.Consumer>
  );
};
