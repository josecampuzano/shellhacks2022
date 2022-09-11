import React from "react";
import TeacherPosts from "../Components/TeacherPosts";


function ClassroomForumPage(){
    return (
<>


    <div>
        <h2> Classroom Community </h2>
        <h6 className='text-muted'>A place for educators and school administators to connect with you!</h6>
        <hr/>
    </div>
    
    <TeacherPosts />
</>

)}

export default ClassroomForumPage;