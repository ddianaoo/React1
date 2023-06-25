import './styles/App.css';
import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts } from './hooks/usePosts';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort:'', query:''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  async function pulledPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  return (
    <div className="App">
      <MyButton onClick={pulledPosts}>Get posts</MyButton>
      <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisisble={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

        <hr style={{margin:'15px 0'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts1'/>
        
    </div>
  );
}

export default App;
