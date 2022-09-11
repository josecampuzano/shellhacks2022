import React, { useState } from "react";


function ParentPostCreate({ addPost }) { //component that creates recipe items
    const initialFormState = {
      author: "",
      date: "",
      title: "",
      body: "",
    };

    const [formData, setFormData] = useState({ ...initialFormState });
    console.log(formData)

    const handleChange = ({ target }) => {
        //This tracks all changes to the form inputs and changes value of the form elements to match the inputs
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };

      const handleSubmit = (event) => {
        //submit handler, this will prevent default, run addPosts with the form data as a prop and then reset our form data back to the initial defaults.
        event.preventDefault();
        addPost(formData);
        setFormData({ ...initialFormState });
      };

      return (
        <>
        <form name="create" onSubmit={handleSubmit}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputAuthor">Name</label>
      <input type="text" class="form-control" id="inputAuthor" placeholder="First and Last name"  onChange={handleChange} value={formData.author}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputDate">Date</label>
      <input type="date" class="form-control" id="inputDate" onChange={handleChange} value={formData.date} />
    </div>
  </div>
  <div class="form-group">
    <label for="inputTitle">Title</label>
    <input type="text" class="form-control" id="inputTitle" placeholder="give your post an eye-catching title!" onChange={handleChange} value={formData.title}/>
  </div>
  <div class="form-group">
    <label for="inputBody">Body</label>
    <input type="textarea" class="form-control" id="inputBody" placeholder="Type your post in here!" onChange={handleChange} value={formData.body}/>
  </div>
  
    
    
  <button type="submit" class="btn btn-primary">Post</button>
</form>
 </>
      )
}

export default ParentPostCreate