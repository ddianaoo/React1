import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {
    return (
        <div>

          <MyInput 
          type='text' 
          placeholder='Search' 
          value={filter.query} 
          onChange={event => setFilter({...filter, query:event.target.value})}
          />

          <MySelect 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
          defaultValue="Sort" 
          options={[
            {value:"title", name:"by title"},
            {value:"desc", name:"by description"},
          ]}
          />
        </div>
    );
};

export default PostFilter;