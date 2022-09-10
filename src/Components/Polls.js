import React from "react";

function Polls(){



    return (
      <>
        <div class="card">
          <div class="card-header text-center fs-1">School Fair Food Truck Voting</div>

          <div class="card-body">
            <h5 class="card-title text-left">Option 1 - Mexican Food</h5>
            <p class="card-text text-left">
              Bringing tacos and burritos
            </p>
            <a href="#" class="btn btn-primary">
              Vote Option 1
            </a>
            <h5 class="card-title text-left">Option 2 - American Food</h5>
            <p class="card-text text-left">
              Bringing hotdogs and hamburgers
            </p>
            <a href="#" class="btn btn-primary">
            Vote Option 2
            </a>

            <h5 class="card-title text-left">Option 3 - Snacks Food</h5>
            <p class="card-text text-left">
              Bringing snacks such as chips, ice-cream, and other finger-foods
            </p>
            <a href="#" class="btn btn-primary">
            Vote Option 3
            </a>

          </div>
        </div>
      </>
    );
}

export default Polls