import React from "react";

function TeacherTable(){
    return (
        <>
        <h2>Teacher Information</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Teacher ID#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Office Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Samantha</td>
      <td>Teacherson</td>
      <td>M-F 4:00 - 6:00</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Robert</td>
      <td>Kardashian</td>
      <td>Tues, Thurs, Fri 3:30 - 5:30</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Barthalomew</td>
      <td>TheTerrible</td>
      <td>M-F Beyond the frames of mortality</td>
    </tr>
  </tbody>
</table>
        </>
    )
}

export default TeacherTable