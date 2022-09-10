import React from "react";
import NavBar from "../Components/NavBar";
function Header() {
  return (
<>
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <h1 className="display-4">ShellHacks 2022</h1>
        <p className="lead">Parent-Teacher Communication Hub.</p>
      </div>
    </header>
    <div>
      <NavBar />
    </div>
</>
)}

export default Header;

