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

        <div className='row mt-5'>
            <div className="col">
            <WelcomeCard />
            <Calendar />
            <p> polls here i think? </p>
            </div>
            <div className="col">
                <Announcements />
                <br/>
                <CoffeePoll />

                <ReportCard />
            </div>

        </div>

</>
    )
}

export default HomePage