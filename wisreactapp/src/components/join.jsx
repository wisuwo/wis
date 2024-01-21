
export const Join = (props) => {
  return (
    <div id='join' className='text-center'>
      <div className='section-title'>
        <h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCnMi2i9UfambAA0zzYpcLnzS0KnSpizlc9cMJliXwWEes_Q/viewform" target="_blank" rel="noreferrer">
            Let's Stay Connected
          </a>
        </h2>
        <p>
          Ready to take a stand against the gender disparities in STEM? Join our club.
        </p>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeCnMi2i9UfambAA0zzYpcLnzS0KnSpizlc9cMJliXwWEes_Q/viewform?embedded=true"
              width="100%"
              height="400"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="member-signup"
              className="mx-auto"
            >
              Loading…
            </iframe>
          </div>
        </div>
        {/*<div>
          <p>
            Don't miss any important info, sign up for our monthly newsletter!
          </p>
        </div> */}
      </div>
    </div>
  );
};
