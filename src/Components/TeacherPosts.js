import React, { useEffect, useState } from "react";
import initialTeacherPosts from "../data/TeacherPostData";

function TeacherPosts(){
    const [teacherPosts, setTeacherPosts] = useState(initialTeacherPosts)

    function extraButton(buttonText, buttonPath) {
      return (
        <a href={buttonPath}className="btn btn-secondary">{buttonText}</a>
      )
    }

    const posts = teacherPosts.map((post, index) => (
        <div key={post.id}className="card">
       <h5 className="card-header">{post.author} | {post.date}</h5>
       <div className="card-body">
         <h5 className="card-title">{post.title}</h5>
         <p className="card-text">
           {post.body}
         </p>
         <button  className="btn btn-primary">Comments</button>
         {post.path ? extraButton(post.btnText, post.path) : null}
         
       </div>
     </div>
    ))


 return (
   <>
     {posts}
   </>
 );
}

export default TeacherPosts