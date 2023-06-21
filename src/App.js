import logo from './logo.svg';
import './styles/App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';



function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Javascript", desc:'React Полный курс от А до Я.'},
    {id:2, title:"Javascript", desc:'React Полный курс от А до Я.'},
  ]);  


  return (
    <div className="App">
        <form>
          <input type='text' name="title" placeholder='Title'/><br></br>
          <input type='text' name="desc" placeholder='Description'/><br></br>
          <MyButton disabled>Create</MyButton>
        </form>


        <PostList posts={posts} title='List of Posts1'/>
    </div>
  );
}

export default App;
