import React, { useEffect, useState } from 'react';
import { API, graphqlOperation, Auth} from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';


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
      <div>
    <div>
      <AmplifySignOut />
    </div>
        <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google})}>Sign in with Google</button>
        <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
      </div>
      {(listResources as IResources[]).map((resource, i: number) => {
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
