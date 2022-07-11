import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
  id: '1',
  title: 'Learning Redux Toolkit',
  content: "I've heard good things.",
  reactions: {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0
  }
},
  {
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more I want pizza.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
  }
}]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
})

export const {} = postsSlice.actions
export default postsSlice.reducer
