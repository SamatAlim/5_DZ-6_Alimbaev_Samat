import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
   'getPosts',
   async function (info, {dispatch, rejectWithValue}){
      try{

         dispatch(preloaderOn())
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const posts = await response.json()
         dispatch(postsInfo(posts))
         if(response.status >= 200 && response.status <= 204 ){
            dispatch(setMessage('status successfully'))
         }else if(response.status === 404){
            throw '404 not found'
         }
      }catch (e){
         dispatch(setMessage(e))
      }finally{
         dispatch(preloaderOff())
      }
   }
)

export const createPost = createAsyncThunk(
   'createPost',
   async function(info, {dispatch, rejectWithValue}){
      try{
         dispatch(preloaderOn())
         const options = {
            method: 'POST',
            headers:{
               'Content-type': 'application/json'
            },
            body:JSON.stringify(info)
         }
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')

         if(response.status >= 200 || response.status <= 204){
            dispatch(setMessage('post created'))
         }else if(response.status === 404){
            throw '404 not found'
         }
      }catch(e){
         dispatch(setMessage(e))
      }finally{
         dispatch(preloaderOff())
      }
   }
)

export const moreInfo = createAsyncThunk(
   'getInformation',
   async function (info, {dispatch, rejectWithValue}){
      try{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
         const posts = await response.json()
         dispatch(getInfo(posts))
      }catch (e){
         throw '404 error'
      }
   }
)

const postsSlice = createSlice({
   name: 'postsSlice',
   initialState: {
      posts:[],
      preloader: false,
      message: ''
   },
   reducers: {
      postsInfo: (state, action)=>{
         state.posts = action.payload
      },
      postsDelete: (state, action)=>{
         state.posts = []
      },
      preloaderOn: (state, action)=>{
         state.preloader = true
      },
      preloaderOff: (state, action)=>{
         state.preloader = false
      },
      setMessage: (state, action) =>{
         state.message = action.payload
      },
      getInfo: (state, action)=>{
         state.posts = action.payload
      }
   }
})


export const {postsInfo, postsDelete, preloaderOn, preloaderOff, setMessage, getInfo } = postsSlice.actions

export default postsSlice.reducer
