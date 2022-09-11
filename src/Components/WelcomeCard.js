import React from 'react'
import StudentData from '../data/StudentData';
const WelcomeCard = () => {
    const studentCard = StudentData.map(({name, id, grade, teacher}, index)=> (
        <li className="list-group-item">
          <h5> {name} </h5>
          <h6> Student ID: {id} </h6>
          <p>{teacher}'s {grade} grade class!</p>
          </li>
          
       ))
  return (
    <>
    <div  className="card mb-5" style={{width: '90%'}}>
      <img src="https://img.freepik.com/premium-vector/owl-mascot-logo-vector_6427-354.jpg"/>
      <div className="card-body">
        <h3 className="card-title">Welcome!</h3>
        <h4> Your Students: </h4>

      </div>
      <ul className="list-group list-group-flush">
       {studentCard}
      </ul>
    </div>
    </>
  )
}

export default WelcomeCard