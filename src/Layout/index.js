import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ResourcesPage from "../Pages/ResourcesPage";
import MeetingCenterPage from "../Pages/MeetingCenterPage";
import ClassroomForumPage from "../Pages/ClassroomForumPage";
import ParentForumPage from "../Pages/ParentForumPage";
import StudentPage from "../Pages/StudentPage";
import FieldTripPage from "../Pages/FieldTripPage";
import About from "../Pages/About";

function Layout() {
    return (
        <>
          
            <Header />



        <div className="container">
             <Switch>

                 <Route exact path="/">
                     <HomePage />
                 </Route>

                 <Route exact path="/fieldtrip-form">
                     <FieldTripPage />
                 </Route>

                 <Route path="/resources">
                    <ResourcesPage />
                 </Route>

                 <Route path="/students">
                    <StudentPage />
                 </Route>

                <Route path="/admin">
                     <MeetingCenterPage />
                </Route>

                <Route path="/about">
                     <About />
                 </Route>

                <Route path="/classroom">
                       <ClassroomForumPage />
                 </Route>

                <Route path="/parents">
                     <ParentForumPage />
                 </Route>



                 <Route>
                     <NotFound />
                 </Route>

            </Switch>
        </div>

        </>
    );
}

export default Layout;