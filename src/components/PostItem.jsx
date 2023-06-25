import React from 'react';
import MyButton from './UI/button/MyButton';


const PostItem = (props) => {
    return (
        <div className="post">
          <div className="post__content">
            <strong>{props.number}. {props.item.title}</strong>
            <div>{props.item.body}</div>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => props.del(props.item)}>Delete</MyButton>
          </div>
        </div>
    );
};

export default PostItem;