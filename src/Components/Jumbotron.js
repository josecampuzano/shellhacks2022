import React from "react";
import { useHistory } from "react-router-dom";


function Jumbotron(){
  const history = useHistory();
 return (
   <>
     <header className="jumbotron bg-transparent" onClick={() => history.push("/")}>
       <div className="container text-black justify-content-center">
         <h1 className="display-4">Parent Connect</h1>
         <p className="lead">Creating parent-teacher communities with equity. </p>
       </div>
       <div>
       </div>
     </header>
   </>
 );
}

export default Jumbotron