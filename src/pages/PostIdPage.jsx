import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { usePulling } from '../hooks/usePulling';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [pulledPostById, isPostLoading, postError] = usePulling( async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
      });


    const [pulledComments, isCommentLoading, commentError] = usePulling( async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });
      
    useEffect(() =>{
        pulledPostById(params.id);
        pulledComments(params.id);
    }, []);

    return (
        <div>

            {isPostLoading
              ? <div style={{display:'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
              : <div><h1>{post.id}. {post.title}</h1><p>{post.body}</p></div>
            }
            <br/>
            <h3>Comments</h3>
            {isCommentLoading
              ? <div style={{display:'flex', justifyContent:'center', marginTop: 50 }}><Loader/></div>
              : <div>{comments.map( (com, index) => 
                    <div key={com.id} style={{margin:25}}>
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                    )}
                </div>
            }


        </div>
    );
};

export default PostIdPage;