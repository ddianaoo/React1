import '../styles/App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import {usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { usePulling } from '../hooks/usePulling';
import {getPageCount} from '../utils/pages.js';
import Pagination from '../components/UI/pagination/Pagination';


function Posts() {
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort:'', query:''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState(false);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [pulledPosts, isPostsLoading, postError] = usePulling(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(limit, totalCount));
  });
  
  useEffect(() =>{
    pulledPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    pulledPosts(limit, page);
  };

  return (
    <div className="App">

      <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisisble={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

        <hr style={{margin:'15px 0'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>

        {postError && <h1>Error happened {postError}</h1>}

        {isPostsLoading
          ? <div style={{display:'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
          : <PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts'/>
        }

        <Pagination totalPages={totalPages} page={page} changePage={changePage}/>

    </div>
  );
}

export default Posts;
