import React from "react";
import { useDispatch } from "react-redux";
import { moreInfo } from "../store/PostsSlice";

function Post({ postInfo }) {
   const dispatch = useDispatch()

   const getMoreInfo = () =>{
      dispatch(moreInfo())
   }


   return (
      <div>
         <h1>{postInfo.title}</h1>
         <button onClick={getMoreInfo}>More Information</button>
         <p>--------------------</p>
      </div>
   )
}
export default Post;