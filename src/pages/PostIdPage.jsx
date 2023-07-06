import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { usePulling } from '../hooks/usePulling';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    const [pulledPostById, isPostLoading, postError] = usePulling( async (id) => {
        const response = await PostService.getById(id);

        console.log(response.data);
        setPost(response.data);
      });
      
      useEffect(() =>{
        pulledPostById(params.id);
      }, []);

    return (
        <div>

            {isPostLoading
              ? <div style={{display:'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
              : <div><h1>{post.id} -- {post.title}</h1><p>{post.body}</p></div>
            }

        </div>
    );
};

export default PostIdPage;