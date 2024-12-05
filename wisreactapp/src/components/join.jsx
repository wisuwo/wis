import { Link } from "react-router-dom";

/* 
The Join component is displayed on the Home page and provides a way for users 
to sign up for the club via an embedded Google Form. It also includes a button 
that links to the Contact Us page for further inquiries. 

Key Features:
- Embedded Google Form: Allows users to fill out the sign-up form directly on the page.
- External Form Link: Provides a link to open the form in a new tab.
- Contact Us Button: Navigates to the Contact Us page for additional communication.
*/

export const Join = (props) => {
  return (
    <div id='join' className='text-center'>
      <div className='section-title'>
        <h2>
          {/* External link to the Google Form */}
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZi63fsrFA4vDmpCkVh68dco-r5WRv-WvMYfFuPoJtKAiwaw/viewform" 
            target="_blank" 
            rel="noreferrer" // Ensures secure and safe external linking
          >
            Let's Stay Connected
          </a>
        </h2>
        <p>
          Ready to take a stand against the gender disparities in STEM? Join our club.
        </p>

        {/* Embedded Google Form */}
        <div>
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
      </div>

      {/* Button linking to the Contact Us page */}
      <div className='calendar-link'>
        <Link to="/contact">
          <button className="btn btn-custom btn-lg">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};
