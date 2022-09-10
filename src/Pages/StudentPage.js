import React from "react";
import StudentTable from "../Components/StudentTable";
import TeacherTable from "../Components/TeacherTable";

function StudentPage(){
    return (
        <>
        <div className="row">
        <div className="col">
            <StudentTable />
        </div>
        <div className="col">
            <TeacherTable />
            </div>
        </div>
        </>
    )
}

export default StudentPage