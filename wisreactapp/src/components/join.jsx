import { Link } from "react-router-dom";
export const Join = (props) => {
  return (
    <div id='join' className='text-center'>
      <div className='section-title'>
        <h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZi63fsrFA4vDmpCkVh68dco-r5WRv-WvMYfFuPoJtKAiwaw/viewform" target="_blank" rel="noreferrer">
            Let's Stay Connected
          </a>
        </h2>
        <p>
          Ready to take a stand against the gender disparities in STEM? Join our club.
        </p>
        <div >
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfZi63fsrFA4vDmpCkVh68dco-r5WRv-WvMYfFuPoJtKAiwaw/viewform?embedded=true"
              width="80%"
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
      <div className='calendar-link'>
          <Link to="/contact"><button className="btn btn-custom btn-lg">Contact Us</button></Link>
          </div>
    </div>
  );
};
