import React, { FunctionComponent } from "react";

export interface UseCreateStoreResponse {
  (): {};
  Context: React.Context<{}>;
  Provider: React.FunctionComponent<{}>;
}

const warnNoProvider = () => {
  console.warn("[useCreateStore] Missing Provider");
};
const canUseProxy =
  process.env.NODE_ENV === "development" && typeof Proxy !== "undefined";

const defaultValue = canUseProxy
  ? new Proxy({}, { get: warnNoProvider, apply: warnNoProvider })
  : {};

export function useCreateStore(useValue: Function): UseCreateStoreResponse {
  const Context = React.createContext(defaultValue);

  const Provider: FunctionComponent = props => {
    const { children } = props;
    const value = useValue(props);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => React.useContext(Context);
  useContext.Context = Context;
  useContext.Provider = Provider;

  return useContext;
}
