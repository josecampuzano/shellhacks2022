import React from "react";

function NotFound() {
    return (
     <>
    <div className="card">
  <img src="http://interactives.dallasnews.com/2015/lost-found/images/lostfound-share.jpg" class="card-img-top" alt="Not Found"/>
  <div className="card-body">
    <h5 className="card-title">Not Found</h5>
    <p className="card-text">We're sorry, we couldn't find that page! Try again later. Meanwhile, click the button below to return to the dashboard!</p>
    <a href="/" className="btn btn-warning">Go back to dashboard</a>
  </div>
</div>
    </>
    )
}

export default NotFound