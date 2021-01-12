import Types from './types';


interface IReducer {
  type: string;
  payload: {
    [prop: string]: any;
  };
}

export interface AppState  {
  resources: []
}

const appReducer = (state: AppState, {type, payload}: IReducer) => {
  if(type === Types.GET_ALL_RESOURSES) {
    return {
      ...state,
      resources: payload.resources
    }
  }

  if(type === Types.CREATE_RESOURCE) {
    return {
      ...state,
      resources: [payload.resource, ...state.resources]
    }
  }
  return state;
}

export default appReducer;