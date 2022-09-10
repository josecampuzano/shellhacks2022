import React from "react";

function StudentTable(){
    return (
        <>
         <h2>Your Students</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Student ID#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Teacher</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Samantha Teacherson</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Samantha Teacherson</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Johnson</td>
      <td>Samantha Teacherson</td>
    </tr>
  </tbody>
</table>
        </>
    )
}

export default StudentTable