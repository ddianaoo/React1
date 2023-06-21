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

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
        <PostForm create={createPost}/>

      {/* Тернарный оператор */}
        {posts.length !== 0 
        ?<PostList del={deletePost} posts={posts} title='List of Posts1'/>
        :<h1>There is no post</h1>
        }
        
    </div>
  );
}

export default App;
