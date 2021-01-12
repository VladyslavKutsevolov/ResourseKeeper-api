import React, { ChangeEvent, FormEvent, useState } from 'react';

import { API, graphqlOperation} from 'aws-amplify';
import { createResource } from '../graphql/mutations';
import { useStateData } from '../context/appContext';
import Types from '../context/types';



interface FormState {
  [key: string]: string;
}

const initialState: FormState = {
  name: '',
  author: '',
  url: ''
}

const ResourseForm = () => {
  const [form, setForm] = useState(initialState);
  const { dispatch} = useStateData();

  const handleFormChange = ({target}: ChangeEvent<{name: string; value: string}>) => {
    setForm({
      ...form,
      [target.name]: target.value
    });
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch({type: Types.CREATE_RESOURCE, payload: {resource: form}})
      await API.graphql(graphqlOperation(createResource, {input: form}))
      console.log('created')
    } catch (error) {
      console.log('submit error..', error )
    }
  }
  console.log('form', form);
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="resource">Resourse Name: </label>
          <input type="text" name="name" id="resource" value={form.resource} onChange={handleFormChange} />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" id="author" value={form.author} onChange={handleFormChange}/>
        </div>
        <div>
          <label htmlFor="url">URL: </label>
          <input type="text" name="url" id="url" value={form.url} onChange={handleFormChange}/>

        </div>

        <input type="submit"/>
      </form>
    </div>
  )
}

export default ResourseForm;
