import React, { useState } from "react";

function CoffeePoll() {
    const [voteCount1, setVoteCount1] = useState(3)
    const [voteCount2, setVoteCount2] = useState(8)
    const [voteCount3, setVoteCount3] = useState(5)

return (
<>
<h2>Poll Time!</h2>
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action active">
    Click below which day you would prefer for "Coffee With the Teacher" night!
  </a>
  <a href="#" className="list-group-item list-group-item-action" onClick={() => setVoteCount1(voteCount1+1)}>Wednesday, September 7th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount1}</span></a>
  <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>





</>
)





}

export default CoffeePoll