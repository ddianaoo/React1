import '../styles/App.css';
import React, { useEffect, useRef, useState } from 'react';
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
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';


function Posts() {
  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort:'', query:''});
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [modal, setModal] = useState(false);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const lastElem = useRef();

  const [pulledPosts, isPostsLoading, postError] = usePulling(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(limit, totalCount));
  });
  
  useObserver(lastElem, page<totalPages, isPostsLoading, () => {
      setPage(page + 1);
  });

  useEffect(() =>{
    pulledPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">

      <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisisble={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

        <hr style={{margin:'15px 0'}}/>

        <PostFilter filter={filter} setFilter={setFilter}/>
        <MySelect
          value={limit}
          onChange={selectedLimit => setLimit(selectedLimit)}
          defaultValue="limit of pages" 
          options={[
            {value:5, name:"5 posts"},
            {value:10, name:"10 posts"},
            {value:25, name:"25 posts"},
            {value:-1, name:"Show all posts"},
          ]}
        />
        {postError && <h1>Error happened {postError}</h1>}

        <PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts'/>
        <div style={{height:20, background:'teal'}} ref={lastElem}/>

        {isPostsLoading &&
           <div style={{display:'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
        }

    </div>
  );
}

export default Posts;
