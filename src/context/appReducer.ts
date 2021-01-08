import Types from './types';


interface IReducer {
  type: string;
  payload: {
    [prop: string]: any;
  };
}

export interface AppState  {
  listOfResourses: []
}

const appReducer = (state: AppState, {type, payload}: IReducer) => {
  if(type === Types.GET_ALL_RESOURSES) {
    return {
      ...state,
      resourses: payload.resourses
    }
  }
  return state;
}

export default appReducer;