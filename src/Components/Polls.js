import React, { useState } from "react";
import PollData from "../data/PollData";

function Polls(){
    const [voteCount1, setVoteCount1] = useState(145)
    const [voteCount2, setVoteCount2] = useState(123)
    const [voteCount3, setVoteCount3] = useState(78)
    const [voteCount4, setVoteCount4] = useState(6)
    const [voteCount5, setVoteCount5] = useState(8)
    const [voteCount6, setVoteCount6] = useState(2)

function onClickOption1 () {
    setVoteCount1(voteCount1 + 1)
}
function onClickOption2 () {
    setVoteCount2(voteCount2 + 1)
}
function onClickOption3 () {
    setVoteCount3(voteCount3 + 1)
}
function onClickOption4 () {
  setVoteCount4(voteCount4 + 1)
}
function onClickOption5 () {
  setVoteCount5(voteCount5 + 1)
}
function onClickOption6 () {
  setVoteCount6(voteCount6 + 1)
}

const poll = PollData.map((poll, index) => (
  <div className="list-group">
<div class="card-header text-center fs-1 bg-dark text-white">{poll.pollTitle}</div>
  <a href="#" className="list-group-item list-group-item-action active">
    {poll.pollQuestion}
  </a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount1(voteCount1+1)}>{poll.optionTitle[0]}
  <span className="badge badge-primary badge-pill justify-content right">{voteCount1}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount2(voteCount2+1)}>{poll.optionTitle[1]}
  <span className="badge badge-primary badge-pill justify-content right">{voteCount2}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={() => setVoteCount3(voteCount3+1)}>{poll.optionTitle[2]}
  <span className="badge badge-primary badge-pill justify-content right">{voteCount3}</span></a>
</div>
))


    return (
      <>
      <br></br>
      <br></br>
<h2 className="text-center">Make Your Voice Heard</h2>
<br></br>
<div className="list-group">
<div class="card-header text-center fs-1 bg-dark text-white">Teacher - Parent Night</div>
  <a href="#" className="list-group-item list-group-item-action active">
    Click below which day you would prefer for "Coffee With the Teacher" night!
  </a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={onClickOption4}>Wednesday, September 7th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount4}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={onClickOption5}>Wednesday, September 14th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount5}</span></a>
  <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={onClickOption6}>Saturday, September 17th
  <span className="badge badge-primary badge-pill justify-content right">{voteCount6}</span></a>
</div>

<br></br>
      <br></br>

{poll}

      </>
    );
}

export default Polls


        {/* <div class="card">
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
        </div> */}