import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {postsAdded} from "@/redux/features/postSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function AddPostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const changeTitle = (e:any) => setTitle(e.target.value)
  const changeContent = (e:any) => setContent(e.target.value)

  const onSave = () => {
  if (title && content) {
    dispatch(
      postsAdded({
        id:nanoid(),
        title,
        content
      })
    )
    setTitle('')
    setContent('')
    }
  }

    return(
      <section>
        <h2> Add New post</h2>
        <form>
          <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={changeTitle}
          />
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={changeContent}
          />
          <button type='button' onClick={onSave}>save</button>
        </form>
      </section>
    )
}
