
import React from 'react'

const ResourcesPage = () => {
  return (
<>
<div>
        <h2 > Resources </h2>
        <h6 className='text-muted'>Helpful articles and documentation for quick reference.</h6>
        <hr/>
    </div>

  <div className="card mb-5">
  <div className="card-header">
    Riverdale Elementary Resources
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><a href="https://docs.google.com/document/d/1nFTTcmnWKdQT0MHuu64x9CPLFH4Iu7qc78fqHKFAcsA/edit?usp=sharing" className="card-link">Bus Routes</a></li>
    <li className="list-group-item"><a href="https://www.fns.usda.gov/cn/applying-free-and-reduced-price-school-meals" className="card-link">Free and Reduced Lunch Application</a></li>
    <li className="list-group-item"><a href="https://docs.google.com/document/d/1Q9DQ8-E_mcyOq3XvE1o8Yrp_wCrHloR1xreC1DrRG5M/edit?usp=sharing" className="card-link">Faculty Directory</a></li>
  </ul>
</div>

<div className="card mb-5">
<div className="card-header">
  School Board / Department of Education Resources
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item"><a href="https://www.myfloridahouse.gov/FileStores/Web/HouseContent/Approved/Web%20Site/education_fact_sheets/2011/documents/2010-11%20Florida%20District%20School%20Boards.3b.pdf" className="card-link">FL School Boards FAQ</a></li>
  <li className="list-group-item"><a href="https://www.fldoe.org/" className="card-link">FL Department of Education Website</a></li>
  <li className="list-group-item"><a href="https://www.pta.org/" className="card-link">National PTA Website</a></li>
</ul>
</div>

<div className="card mb-5">
<div className="card-header">
  Parent Resources
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item"><a href="https://pflag.org/" className="card-link">PFLAG Website</a></li>
  <li className="list-group-item"><a href="https://www.myflfamilies.com/service-programs/child-welfare/kids/services/foster-adoptive-parents/AdoptiveParentResources.shtml" className="card-link">FL DCF Adoptive Parent Resources</a></li>
  <li className="list-group-item"><a href="http://www.corestandards.org/about-the-standards/" className="card-link">About Common Core Standards</a></li>
  <li className="list-group-item"><a href="https://www.stepfamilies.info/" className="card-link">National Stepfamily Resource Center</a></li>
  <li className="list-group-item"><a href="https://thebodyisnotanapology.com/magazine/radparentresource/" className="card-link">Radical Parenting Resources for Folks of Color</a></li>
  <li className="list-group-item"><a href="https://www.hsph.harvard.edu/nutritionsource/kids-healthy-lunchbox-guide/" className="card-link">Harvard's 'Packing a Healthy Lunchbox Guide'</a></li>
  <li className="list-group-item"><a href="https://parentsandfamily.colostate.edu/wp-content/uploads/sites/13/2020/12/Family-Parent-Guide-to-Gender-Pronouns-_English.pdf" className="card-link">A Family’s Guide to Gender & Pronouns</a></li>
  <li className="list-group-item"><a href="https://www.parentcompanion.org/article/building-intentional-community-for-you-and-your-child" className="card-link">Building and Intentional Community for You and Your Child</a></li>
</ul>
</div>
<br/>
</>
  )
}

export default ResourcesPage