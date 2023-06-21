import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';



const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', desc:''});


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {...post, id:Date.now()};
        create(newPost);
        setPost({title:'', desc:''});
    };
  
    return (
        <form>
           <MyInput type='text' name="title" placeholder='Title' value={post.title} onChange={event => setPost({...post, title:event.target.value})}/><br></br>
          <MyInput type='text' name="desc" placeholder='Description' value={post.desc} onChange={event => setPost({...post, desc:event.target.value})}/><br></br>
          <MyButton onClick={addNewPost}>Create</MyButton>           
        </form>
    );
};

export default PostForm;