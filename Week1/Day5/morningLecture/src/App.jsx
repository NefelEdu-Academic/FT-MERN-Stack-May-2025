import { useState } from 'react'

import Form from './components/Form'
import Display from './components/Display'

function App() {

  const [posts, setPosts] = useState([])

  // update read proprety of a specific post
  const readPost = (postIdx)=>{
    const copyList = [...posts]
    copyList[postIdx].read = !copyList[postIdx].read;
    setPosts(copyList)
  }

  // delete post
  const deletePost = (postIdx)=>{
    const updatedList = posts.filter((p, idx)=>{ return idx !== postIdx})
    setPosts(updatedList)

  }

  return (
    <>
      <h1>Lifting State </h1>
      {posts.length > 0 ?  <h4> {posts.length} post found</h4> : <h4>Nothing Here</h4> }

      <Form setPosts={setPosts} posts={posts} />
      {/* {JSON.stringify(posts)} */}
      <Display readPost={readPost} deletePost={deletePost} posts={posts}/>
    </>
  )
}

export default App
