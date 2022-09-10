import React from 'react'

function FieldTripForm() {
return (
<>
<h2> Student Field Trip Permission Form</h2>
<br/>
<h4>Please enter all the information. Once submitted, you'll be returned to the home page</h4>
<br/>
<form>
    <div className="form-row">
    <h3> Student Information </h3>
    </div>
    
  <div className="form-row">
    <div className="form-group col">
    <label for="StudentFirstName">Student First Name</label>
      <input type="text" className="form-control" id="StudentFirstName" placeholder="First name"/>
    </div>
    <div className="form-group col">
    <label for="StudentLastName">Student Last Name</label>
      <input type="text" className="form-control" id="StudentLastName" placeholder="Last name"/>
    </div>
    <div className="form-group col-2">
    <label for="StudentId">Student ID</label>
      <input type="number" className="form-control" id="StudentId" placeholder="ID"/>
    </div>
  </div>
  
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>

  <div className="form-row">
    <h3> Emergency Contact Information </h3>
    </div>
    <div className="form-row">
    <div className="form-group col">
    <label for="StudentFirstName">First Name</label>
      <input type="text" className="form-control" id="StudentFirstName" placeholder="First name"/>
    </div>
    <div className="form-group col">
    <label for="StudentLastName">Last Name</label>
      <input type="text" className="form-control" id="StudentLastName" placeholder="Last name"/>
    </div>
    <div className="col-4">
    <label for="inputRelationship">Relationship</label>
      <select id="inputRelationship" className="form-control">
        <option selected>Select</option>
        <option>Parent</option>
        <option>Uncle/Aunt</option>
        <option>Grandparent</option>
        <option>Other Legal Guardian</option>
      </select>
    </div>
  </div>
  
  <div className="form-group">
    <label for="formEmailInput">Email</label>
    <input type="email" className="form-control" id="formEmailInput" placeholder="Email@mail.com"/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Phone</label>
    <input type="phone" className="form-control" id="formGroupExampleInput2" placeholder="xxx-xxx-xxxx"/>
  </div>
    
<div className="form-row">
<h3> Permission and Form Submission </h3>
</div>
<br/>




  <div className="form-row">

  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
  <label className="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>
</div>
</form>
</>
)
}


export default FieldTripForm