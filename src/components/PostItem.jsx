import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';



const PostItem = (props) => {

  const router = useNavigate();
    return (
        <div className="post">
          <div className="post__content">
            <strong>{props.item.id}. {props.item.title}</strong>
            <div>{props.item.body}</div>
          </div>
          <div className="post__btns">
            <MyButton onClick={() => props.del(props.item)}>Delete</MyButton>
            <MyButton onClick={() => router(`/posts/${props.item.id}`)}>Open</MyButton>
          </div>
        </div>
    );
};

export default PostItem;