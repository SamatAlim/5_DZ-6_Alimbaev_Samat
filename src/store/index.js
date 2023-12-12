import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import postsReducer from './PostsSlice'


export const store = configureStore({
   reducer:{
      postsReducer
   }
})