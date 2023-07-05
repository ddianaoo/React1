import './styles/App.css';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import {usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { usePulling } from './hooks/usePulling';
import {getPageCount, getPagesArray} from './utils/pages.js';


function App() {
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort:'', query:''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState(false);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  let PagesArray = getPagesArray(totalPages);

  const [pulledPosts, isPostsLoading, postError] = usePulling(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(limit, totalCount));
  });


  // console.log(totalPages);
  
  useEffect(() =>{
    pulledPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  }


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

        <div className='page__wrapper'>
          {PagesArray.map(p =>
            <span 
            onClick={() => changePage(p)}
            key={p} 
            className={page === p ? 'page page__current' : 'page'}
            >
              {p}
            </span>
            )}          
        </div>  

    </div>
  );
}

export default App;
