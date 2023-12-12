import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, postsDelete } from "../../store/PostsSlice";
import Post from "../../components/Post";
import PostPreloader from "../../components/PostPreloader";

function PostPage(){

   const {posts, preloader, message} = useSelector(state => state.postsReducer)
   const dispatch = useDispatch()

   const getPostsFunc = () =>{
      dispatch(getPosts())
   }

   useEffect(()=>{
      getPostsFunc()
   }, [])

   return(
      <div>
         <button onClick={getPostsFunc}>get posts</button>
         <button onClick={()=> dispatch(postsDelete())}>delete all</button>

         {preloader ? <PostPreloader/> 
         : message ? 
               <div>
                  <h2>{message}</h2>
                  {posts.map(post => <Post key={post.id} postInfo={post}/>)}
               </div> : <></>
         }
      </div>
   )
}

export default PostPage;
