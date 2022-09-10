import React from "react";
import StudentTable from "../Components/StudentTable";
import TeacherTable from "../Components/TeacherTable";
import Calendar from "../Components/Calendar";
import Announcements from "../Components/Announcements";
import FieldTripForm from "../Components/FieldTripForm";

function HomePage(){
    return (
        <>

        <div className='row'>
            <div className="col">
            <Calendar />
            <p> polls here i think? </p>
            </div>
            <div className="col">
                <Announcements />
            </div>
        </div>
</>
    )
}

export default HomePage