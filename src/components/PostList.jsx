import React, { useState }  from 'react';
import PostItem from './PostItem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';



const PostList = ({del, posts, title}) => {
    if (posts.length) {
    return (
        <div>
            <h1>{title}</h1>

            <TransitionGroup>

                {posts.map( (post, index) => 
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem item={post} number={index + 1} del={del}/>
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )}
    return <h1>Posts not found</h1>
};

export default PostList;