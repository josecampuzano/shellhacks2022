import React from "react";

function ReportCard() {
return (
    <div className="pt-10">
    <h2> Grade Progress Report </h2>
    <ul class="list-group">
  <li class="list-group-item">Current Grades</li>


  <li class="list-group-item list-group-item-success">Math: A+</li>
  <li class="list-group-item list-group-item-success">Science: A</li>
  <li class="list-group-item list-group-item-success">History: A+ </li>
  <li class="list-group-item list-group-item-danger">English: F</li>
  <li class="list-group-item list-group-item-warning">Art: C++</li>
  <li class="list-group-item list-group-item-success">Lunch: B+</li>
  <li class="list-group-item list-group-item-warning">Band: C-</li>
  <li class="list-group-item list-group-item-danger">Gym: D+</li>
</ul>

    </div>
)


}

export default ReportCard