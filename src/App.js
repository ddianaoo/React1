import logo from './logo.svg';
import './styles/App.css';
import React, { useMemo, useRef, useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title:"Jabvascript 2", desc:'Javascript 2'},
    {id:2, title:"Javascript", desc:'Javascript'},
  ]);  

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const sortedPosts = useMemo(() => {
    console.log('useMemo is workingggg!!!!!!!!');
    if (selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]) );
    } 
      return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts]);

  return (
    <div className="App">
        <PostForm create={createPost}/>

        <hr style={{margin:'15px 0'}}/>
        <div>

          <MyInput 
          type='text' 
          placeholder='Search' 
          value={searchQuery} 
          onChange={event => setSearchQuery(event.target.value)}
          />

          <MySelect 
          onChange={sortPosts}
          value={selectedSort}
          defaultValue="Sort" 
          options={[
            {value:"title", name:"by title"},
            {value:"desc", name:"by description"},
          ]}
          />
        </div>

      {/* Тернарный оператор */}
        {sortedAndSearchedPosts.length !== 0 
        ?<PostList del={deletePost} posts={sortedAndSearchedPosts} title='List of Posts1'/>
        :<h1>There is no post</h1>
        }
        
    </div>
  );
}

export default App;
