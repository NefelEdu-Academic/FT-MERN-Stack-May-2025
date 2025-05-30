import React from 'react'

const Display = ({posts, readPost, deletePost}) => {
  return (
    <ul className="d-flex  list-group mt-5">
      {posts.map((post, idx) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={idx}
          >
            <button onClick={(e)=>deletePost(idx)}>Delete</button>
            <h3> {post.title} <span> {post.read && "✅"} </span> </h3>
            <p> {post.body} </p>
            <hr />
            <div>
            <input type="checkbox" onChange={(e)=>{readPost(idx)}} checked={post.read} />
            <label>Read</label>
                
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Display