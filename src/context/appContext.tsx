import React, {createContext, ReactNode, useContext, useReducer} from 'react';
import appReducer,  { AppState}from './appReducer';


const appContext = createContext<any>(null);

type Props = {
  children: ReactNode;
}

const initialState: AppState = {
  listOfResourses: []
}

const StateProvider = ({children}: Props ) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const values: any = {
    state,
    dispatch
  }
  return <appContext.Provider value={values}>{children}</appContext.Provider>
}

const useStateData = () => useContext(appContext);

export {useStateData, StateProvider};