import React from 'react';

const ResourseForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Resourse Name: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author"  id="author"/>
        </div>
        <div>
          <label htmlFor="url">URL: </label>
          <input type="text" name="resourse"  id="url"/>

        </div>

        <input type="submit"/>
      </form>
    </div>
  )
}

export default ResourseForm;
