import './styles/App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';


function App() {
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort:'', query:''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() =>{
    pulledPosts();
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  async function pulledPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  return (
    <div className="App">

      <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisisble={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

        <hr style={{margin:'15px 0'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts'/>
        
    </div>
  );
}

export default App;
