import React, { useEffect, useState } from 'react';
import { API, graphqlOperation} from 'aws-amplify';

// import  query defenitions
import {listResources as ListResources} from './graphql/queries';


interface IResources {
  id: number
  name: string
  author: string
  url: string
}

function App() {
  const [listResources, setListResources] = useState<IResources[] | []>([]);

  useEffect(() => {
    getResources();
  },[])

  const getResources = async () => {
    try {
      const resourcesData: any = await API.graphql(graphqlOperation(ListResources));
      setListResources(resourcesData.data.listResources.items);

    } catch (error) {
      console.log(' get resources error', error);
    }
  }

  console.log('listResources',listResources)
  return (
    <div className="App">
      {(listResources as IResources[]).map((resource: IResources, i: number) => {
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

export default App;
