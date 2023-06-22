import React, { useState }  from 'react';
import PostItem from './PostItem';


const PostList = ({del, posts, title}) => {
    if (posts.length) {
    return (
        <div>
                  <h1>{title}</h1>
      {posts.map( (post, index) =>
              <PostItem item={post} number={index + 1} key={post.id} del={del}/>
        )}

        {/* <PostItem item={{id:1, title:"title1", desc:'React Полный курс от А до Я.'}}/> */}
        </div>
    )}
    return <h1>There is no post</h1>
};

export default PostList;