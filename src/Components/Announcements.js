import React from "react";


function Announcements(){

return (
    <>
    <h2>Announcements</h2>
    <div className="list-group">
  <a href="/classroom" className="list-group-item list-group-item-action">
    New posts in the Teacher's Forum! Click to check it out!
  </a>
  <a href="/fieldtrip-form" className="list-group-item list-group-item-action">Don't forget to submit field trip permission forms!</a>
  <a href="#" className="list-group-item list-group-item-action">Pep rally on Friday!! Show your school spirit!</a>
  <a href="#" className="list-group-item list-group-item-action">Please adhere to student dresscode!</a>
  <a href="#" className="list-group-item list-group-item-action disabled">"Coffee with the Teacher" night coming soon! Vote for which day of the week you'd like!</a>
</div>
</>
)
}

export default Announcements;