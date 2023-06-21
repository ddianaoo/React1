import logo from './logo.svg';
import './styles/App.css';
import React, { useRef, useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';



function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Javascript", desc:'React Полный курс от А до Я.'},
    {id:2, title:"Javascript", desc:'React Полный курс от А до Я.'},
  ]);  

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} title='List of Posts1'/>
    </div>
  );
}

export default App;
