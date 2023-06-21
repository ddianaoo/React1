import logo from './logo.svg';
import './styles/App.css';
import React, { useRef, useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Javascript", desc:'React Полный курс от А до Я.'},
    {id:2, title:"Javascript", desc:'React Полный курс от А до Я.'},
  ]);  

  const [post, setPost] = useState({title:'', desc:''});

  const addNewPost = (e) => {
      e.preventDefault();
      // console.log(title);
      // console.log(desc);
      setPosts([...posts, {...post, id:Date.now()}]);
      setPost({title:'', desc:''});
  }

  return (
    <div className="App">
        <form>
          {/* Управляемый  компонент */}
          <MyInput type='text' name="title" placeholder='Title' value={post.title} onChange={event => setPost({...post, title:event.target.value})}/><br></br>
          <MyInput type='text' name="desc" placeholder='Description' value={post.desc} onChange={event => setPost({...post, desc:event.target.value})}/><br></br>
          <MyButton onClick={addNewPost}>Create</MyButton>
        </form>


        <PostList posts={posts} title='List of Posts1'/>
    </div>
  );
}

export default App;
