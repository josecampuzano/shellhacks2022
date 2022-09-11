import React from 'react'
import MeetingUpdates from '../Components/MeetingUpdates';
import Polls from '../Components/Polls';

const MeetingCenterPage = () => {
  return (
      <>
          <div>
        <h2 > Admin Hub </h2>
        <h6 className='text-muted'>Get involved and take action here. </h6>
        <hr/>
    </div>
      <Polls />
      <MeetingUpdates />
      </>
    )
}

export default MeetingCenterPage;