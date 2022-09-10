import React from 'react'
import StudentData from '../data/StudentData';
const WelcomeCard = () => {
    const studentCard = StudentData.map(({name, id, grade, teacher}, index)=> (
        <li className="list-group-item">
          <h5> {name} </h5>
          <h6> Student Id: {id} </h6>
          <p>{teacher}'s {grade} grade class!</p>
          </li>
          
       ))
  return (
    <>
    <div  className="card mb-5" >
      <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" className="card-img-top" alt="bookstack with apple and blocks"/>
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