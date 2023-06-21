import logo from './logo.svg';
import './styles/App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';



function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Javascript", desc:'React Полный курс от А до Я.'},
    {id:2, title:"Javascript", desc:'React Полный курс от А до Я.'},
  ]);  
  const [posts2, setPosts2] = useState([
    {id:1, title:"Python", desc:'Python Полный курс от А до Я.'},
    {id:2, title:"Python", desc:'Python Полный курс от А до Я.'},
    {id:3, title:"Python", desc:'Python Полный курс от А до Я.'},
    {id:4, title:"Python", desc:'Python Полный курс от А до Я.'},
    {id:5, title:"Python", desc:'Python Полный курс от А до Я.'}
  ]);


  return (
    <div className="App">
        <PostList posts={posts} title='List of Posts1'/>
        <PostList posts={posts2} title='List of Posts2'/>
    </div>
  );
}

export default App;
