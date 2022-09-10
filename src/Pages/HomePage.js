import React from "react";
import StudentTable from "../Components/StudentTable";
import TeacherTable from "../Components/TeacherTable";
import Calendar from "../Components/Calendar";

function HomePage(){
    return (
        <>
        <div class="row">
        <div class="col">
            <StudentTable />
        </div>
        <div class="col">
            <TeacherTable />
            </div>
        </div>
        <div>
            <Calendar />
        </div>
</>
    )
}

export default HomePage