import './styles/App.css';
import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Jabvascript 2", desc:'Javascript 2'},
    {id:2, title:"Javascript", desc:'Javascript'},
  ]);  

  const [filter, setFilter] = useState({sort:'', query:''});


  const sortedPosts = useMemo(() => {
    console.log('useMemo is workingggg!!!!!!!!');
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]) );
    } 
      return posts;
  }, [filter.sort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <MyModal>
        <PostForm create={createPost}/>
      </MyModal>

        <hr style={{margin:'15px 0'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>
        
        <PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts1'/>
        
    </div>
  );
}

export default App;
