import React from "react";
import StudentTable from "../Components/StudentTable";
import TeacherTable from "../Components/TeacherTable";
import Calendar from "../Components/Calendar";

function HomePage(){
    return (
        <>
            <StudentTable />
            <TeacherTable />
            <Calendar />
        </>
    )
}

export default HomePage