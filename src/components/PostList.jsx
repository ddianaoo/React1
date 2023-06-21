import React, { useState }  from 'react';
import PostItem from './PostItem';


const PostList = ({posts, title}) => {

      // function del(arr, value) {
      //   setPosts(arr.splice(arr.indexOf(value), 1));
      //   return arr;
      // }
    return (
        <div>
                  <h1>{title}</h1>
      {posts.map( (post, index) =>
              <PostItem item={post} number={index + 1} key={post.id}/>
        )}

        {/* <PostItem item={{id:1, title:"title1", desc:'React Полный курс от А до Я.'}}/> */}
        </div>
    );
};

export default PostList;