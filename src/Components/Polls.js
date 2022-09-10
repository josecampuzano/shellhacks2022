import React, { useState } from "react";

function Polls(){
    const [voteCount1, setVoteCount1] = useState(145)
    const [voteCount2, setVoteCount2] = useState(123)
    const [voteCount3, setVoteCount3] = useState(78)

function onClickOption1 () {
    setVoteCount1(voteCount1 + 1)
}
function onClickOption2 () {
    setVoteCount2(voteCount2 + 1)
}
function onClickOption3 () {
    setVoteCount3(voteCount3 + 1)
}

    return (
      <>
      <br></br>
      <br></br>
        <div class="card">
          <div class="card-header text-center fs-1">School Fair Food Truck Voting</div>
          <div class="card-body">
            <h5 class="card-title text-left">Option 1 - Mexican Food</h5>
            <p class="card-text text-left">
              Bringing tacos and burritos
            </p>
            <button onClick={onClickOption1} class="btn btn-primary">
              Vote Option 1
            </button>
            <button type="button" class="btn btn-outline-dark">{voteCount1}</button>
            <h5 class="card-title text-left">Option 2 - American Food</h5>
            <p class="card-text text-left">
              Bringing hotdogs and hamburgers
            </p>
            <button onClick={onClickOption2} class="btn btn-primary">
            Vote Option 2
            </button>
            <button type="button" class="btn btn-outline-dark">{voteCount2}</button>
            <h5 class="card-title text-left">Option 3 - Snacks Food</h5>
            <p class="card-text text-left">
              Bringing snacks such as chips, ice-cream, and other finger-foods
            </p>
            <button onClick={onClickOption3} class="btn btn-primary">
            Vote Option 3
            </button>
            <button type="button" class="btn btn-outline-dark">{voteCount3}</button>
          </div>
        </div>
      </>
    );
}

export default Polls