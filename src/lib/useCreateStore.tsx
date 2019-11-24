import React, { FunctionComponent } from "react";

export interface UseCreateStoreResponse {
  (): {};
  Context: React.Context<{}>;
  Provider: React.FunctionComponent<{}>;
}

export function useCreateStore(useValue: Function) {
  const Context = React.createContext(undefined);

  const Provider: FunctionComponent = (props): JSX.Element => {
    const { children } = props;
    const value = useValue(props);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => React.useContext(Context);

  useContext.Context = Context;

  useContext.Provider = Provider;

  return useContext;
}
