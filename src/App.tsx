import React, { useEffect, useState } from 'react';

import { API, graphqlOperation} from 'aws-amplify';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';



// import  query defenitions
import {listResources as ListResources} from './graphql/queries';
import ResourseForm from './components/ResourseForm';
import { useStateData } from './context/appContext';
import Types from './context/types';


interface IResources {
  id: number
  name: string
  author: string
  url: string
}

function App() {
  // const [listResources, setListResources] = useState<IResources[] | []>([]);
  const {state, dispatch} = useStateData();

  useEffect(() => {
    getResources();
  },[])

  const getResources = async () => {
    try {
      const resourcesData: any = await API.graphql(graphqlOperation(ListResources));
      console.log(resourcesData);
      dispatch({type: Types.GET_ALL_RESOURSES, payload: { resources: resourcesData.data.listResources.items}})
    } catch (error) {
      console.log(' get resources error', error);
    }
  }

console.log(state);
  return (
    <div className="App">

    <div>
      <AmplifySignOut />
    </div>

    <ResourseForm />

      {(state.resources as IResources[]).map((resource, i: number) => {
        return (
        <div key={i}>
            <h2>{resource.name}</h2>
            <p>{resource.author}</p>
            <p>{resource.url}</p>
        </div>
      )})}
    </div>
  );
}

export default withAuthenticator(App);
