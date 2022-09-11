import React from "react";
import StudentTable from "../Components/StudentTable";
import TeacherTable from "../Components/TeacherTable";
import Calendar from "../Components/Calendar";
import Announcements from "../Components/Announcements";
import FieldTripForm from "../Components/FieldTripForm";
import WelcomeCard from "../Components/WelcomeCard";
import CoffeePoll from "../Components/CoffeePoll";
import ReportCard from "../Components/ReportCard";
function HomePage(){
    return (
        <>
              <div>
        <h2 > Dashboard </h2>
        <h6 className='text-muted'>Everything importtant at your fingertips. </h6>
        <hr/>
    </div>
        <div className='row mt-5'>
            <div className="col">
            <WelcomeCard />
            <Calendar />

            </div>
            <div className="col">
                <Announcements />
                <br/>
                <CoffeePoll />
<br/>
<br/>
<br/>
                <ReportCard />
            </div>

        </div>
<br/>
</>
    )
}

export default HomePage