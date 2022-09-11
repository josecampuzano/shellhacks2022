import React, { useEffect, useState } from "react";
import initialParentPosts from "../data/ParentPostData";
import ParentPostCreate from "./ParentPostCreate";

function ParentPosts(){
    const [parentPosts, setParentPosts] = useState(initialParentPosts)

    const addPost = (data) => {
      setParentPosts([...initialParentPosts, data]); // If we need to add a recipe, this function uses setRecipes to alter the state to an array where we "spread" exisiting recipes, then add the data put into the callback function.
    };


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
          <ParentPostCreate addPost={addPost} />
        </>
      );
}


export default ParentPosts