import { useState } from 'react'
import Button from 'react-bootstrap/Button'
export const Join = (props) => {
  return (
    <div id='join' className='text-center'>
      <div className='section-title'>
        <h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSeCnMi2i9UfambAA0zzYpcLnzS0KnSpizlc9cMJliXwWEes_Q/viewform" target="_blank">Let's Stay Connected</a></h2>
        <p>
          Ready to take a stand against the gender disparities in STEM? Join our club.
        </p>
        {/* &nbsp; */}
        <div className='row'>
          <>
            {/* <Button className='btn btn-custom btn-lg' href = 'https://docs.google.com/forms/d/e/1FAIpQLSeCnMi2i9UfambAA0zzYpcLnzS0KnSpizlc9cMJliXwWEes_Q/viewform'>
              Join our Club.
            </Button>{''} */}
          </>
        </div>
        &nbsp;
        <div className='row'>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCnMi2i9UfambAA0zzYpcLnzS0KnSpizlc9cMJliXwWEes_Q/viewform?embedded=true" width="700" height="400" frameborder="0" marginheight="0" marginwidth="0" title="member-signup">
            Loading…
          </iframe>
        </div>
        {/*<div>
          <p>
            Don't miss any important info, sign up for our montly newsletter!
          </p>
          </div> */}
      </div>
    </div>
  )
}
