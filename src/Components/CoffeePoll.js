import React, { useState } from "react";

function CoffeePoll() {
    const [voteCount1, setVoteCount1] = useState(6)
    const [voteCount2, setVoteCount2] = useState(8)
    const [voteCount3, setVoteCount3] = useState(2)

return (
<>
<h2>Poll Time!</h2>
<div className='mb-15'>
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">
    Click below which day you would prefer for "Coffee With the Teacher" night!
  </a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount1(voteCount1+1)}>Wednesday, September 7th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount1}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount2(voteCount2+1)}>Wednesday, September 14th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount2}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount3(voteCount3+1)}>Saturday, September 17th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount3}</span></a>
  <a href="/admin" class="list-group-item list-group-item-action">Click here to view other polls!</a>
</div>
</div>




</>
)





}

export default CoffeePoll