import React, { useEffect, useState } from "react";
import initialTeacherPosts from "../data/TeacherPostData";

function TeacherPosts(){
    const [teacherPosts, setTeacherPosts] = useState(initialTeacherPosts)


    const posts = teacherPosts.map((post, index) => (
        <div key={post.id}className="card">
       <h5 className="card-header">{post.author} | {post.date}</h5>
       <div className="card-body">
         <h5 className="card-title">{post.title}</h5>
         <p className="card-text">
           {post.body}
         </p>
         <a href="#" className="btn btn-secondary">
           Comments
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

export default TeacherPosts