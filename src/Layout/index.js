import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ResourcesPage from "../Pages/ResourcesPage";
import MeetingCenterPage from "../Pages/MeetingCenterPage";
import ClassroomForumPage from "../Pages/ClassroomForumPage";
import ParentForumPage from "../Pages/ParentForumPage";


function Layout() {
    return (
        <>
            <Header />
            <div className="container">
             <Switch>

                 <Route exact path="/">
                     <HomePage />
                 </Route>

                 <Route path="/resources">
                    <ResourcesPage />
                 </Route>

                <Route path="/meetings">
                     <MeetingCenterPage />
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