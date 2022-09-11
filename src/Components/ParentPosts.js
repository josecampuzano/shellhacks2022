import React, { useEffect, useState } from "react";
import initialParentPosts from "../data/ParentPostData";

function ParentPosts(){
    const [parentPosts, setParentPosts] = useState(initialParentPosts)


    const posts = parentPosts.map((post, index) => (
        <div key={post.id}className="card">
       <h5 className="card-header">{post.author} | {post.date}</h5>
       <div className="card-body">
         <h5 className="card-title">{post.title}</h5>
         <p className="card-text">
           {post.body}
         </p>
         <a href={post.path} className="btn btn-secondary">
           {post.btnText ? post.btnText : "Comments"}
         </a>
       </div>
     </div>
    ))

    return (
        <>
          {posts}
        </>
      );
}


export default ParentPosts