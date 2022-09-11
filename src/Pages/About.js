import React from 'react'


const About = () => {
  return (
<>
<div>
        <h2 > About </h2>
        <h6 className='text-muted'>Everything you need to know about Parent Connect </h6>
        <hr/>
    </div>
    <div className='row mt-5'>
        <div className="card" >
            <div className="card-body">
            <h5 className="card-title">What is Parent Connect?</h5>
            <p className="card-text">Parent Connect is a place designed to bring equity to our students educations by making it easy for all parents to have a voice. Often times the only voices being heard are those who are able to be at the school, in the schoolboard meetings, and in the carpool line. We strive to bring educators, administraion and school boards into the palm of your hands. You are your students' best advocate.  </p>
            </div>
        </div>
    </div>
    <div className='row mt-5 pb-5'>
        <div className="card">
            <img src="https://interactioninstitute.org/wp-content/uploads/2016/01/IISC_EqualityEquity.png "/>
            <div className="card-body">
        <h5 className="card-title">Why is equity important? </h5>
        <p className="card-text">There are numerous reasons why equity in education is important, including:</p>
        <ul className='list-group' >
            <li className='list-group-item'>Creating opportunity for underprivileged and underserved students so they are able to overcome disadvantages and find success </li>

            <li className='list-group-item'>Giving everyone the chance to learn in the way that best supports their learning style </li>

            <li className='list-group-item'>Helping students become more engaged in what they’re learning by ensuring they see people who are their same race, gender, ethnicity, etc. in their learning</li>

            <li className='list-group-item'>Granting students more access to the resources that can bolster their education </li>

            <li className='list-group-item'>Strengthening the connection between a student’s family and their teacher, fostering a more enriching educational environment at home</li>

            <li className='list-group-item'>Guiding students to success in their educational career, and beyond</li>
        </ul>
    </div>
</div>
    </div> 
    <div className='row justify-content-center'> 
            <h3> How does Parent Connect promote equity? </h3>
        </div>   
    
    <div className='row pb-10'>
        <div className='col mt-3 pb-5'>
        <div className="card text-white bg-warning mb-3">
  <div className="card-body">
    <h5 className="card-title">Dashboard</h5>
    <p className="card-text">The dashboard ensures that busy parents on the go are able to keep up and stay involved if they'd like.Each widget gives you access to important anouncments, polls being hosted by your school board or DOE, student infomation and grades, as well as a calendar of events.   </p>
    <a href="/" className="card-link">Go to Dashboard</a>

  </div>
</div>
            </div>
            <div className='col mt-3 pb-5'>
        <div className="card text-white bg-warning mb-3">
  <div className="card-body">
    <h5 className="card-title">Resources</h5>
    <p className="card-text">The resources page is a collection of reasources that empower parents to learn more! This page is home to school information like directories, transportation routes, free and reduced lunch forms, and much more. Teachers and adminstators may update this page with helpful ediucational resources for students as well.</p>
    <a href="/resources" className="card-link">Go to Resources</a>

  </div>
</div>
            </div>
            <div className='col mt-3 pb-5'>
        <div className="card text-white bg-warning mb-3">
  <div className="card-body">
    <h5 className="card-title">Communities</h5>
    <p className="card-text">The phrase "it takes a village" is no joke! Building communities for your student and especially yourself is so important. Parents who work, or dont have the ability to be at the school often arent ggiven the same community building opportunities. A fourum like ours enables parents to connect with teacher and other parents. </p>
    <a href="/classroom" className="card-link">Go to Classroom Community</a>
    <br/>
    <hr/>
    <a href="/parents" className="card-link">Go to Parent Community</a>
  </div>
</div>
            </div>
            <div className='col mt-3 pb-5'>
        <div className="card text-white bg-warning mb-3">
  <div className="card-body">
    <h5 className="card-title">Admin Hub</h5>
    <p className="card-text">The dashboard ensures that busy parents on the go are able to keep up and stay involved if they'd like.Each widget gives you access to important anouncments, polls being hosted by your school board or DOE, student infomation and grades, as well as a calendar of events.   </p>
    <a href="/" className="card-link">Go to Dashboard</a>

  </div>
</div>
            </div>

        </div>
    </>
  )
}

export default About