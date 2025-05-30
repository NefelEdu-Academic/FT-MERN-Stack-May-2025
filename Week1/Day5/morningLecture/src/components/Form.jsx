import React, { useState } from 'react'

const Form = (props) => {

    const {posts, setPosts} = props
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newPost={
            title, body
        }
        setPosts([...posts, newPost])
        setBody("")
        setTitle("")
    }

  return (
    <div className='col-6'>
      <form onSubmit={handleSubmit} className="d-flex ">
        <input onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" type="text" placeholder="Title" />
        <textarea onChange={(e)=> setBody(e.target.value)} value={body} className="form-control" placeholder="Body"></textarea>
        <button className='btn btn-primary'>Add Post</button>
      </form>
    </div>
  );
}

export default Form