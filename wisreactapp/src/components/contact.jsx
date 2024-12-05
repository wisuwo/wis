import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Navigation2 } from "./navigation2";
import { Footer } from "./footer";

/* 
The Contact component serves as the contact page for the website. 
It includes a navigation bar, a contact form for users to send inquiries via email, 
and links to the club's social media pages.
*/

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = (props) => {
  // State to manage form data (name, email, message)
  const [{ name, email, message }, setState] = useState(initialState);

  // Handles changes in the input fields and updates the state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Resets the form state to its initial values
  const clearState = () => setState({ ...initialState });

  // Handles form submission to send an email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(name, email, message); // Log the form data (for debugging)

    // Use EmailJS to send the form data
    emailjs
      .sendForm(
        'service_3gmk19f', // EmailJS service ID
        'template_j7sicae', // EmailJS template ID
        e.target, // Form data
        'user_Yi0hwVNxNbgJ4HvfkuKEs' // EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text); // Log success message
          clearState(); // Clear form data after successful submission
        },
        (error) => {
          console.log(error.text); // Log error message if submission fails
        }
      );
  };

  // Scrolls to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      {/* Navigation bar component */}
      <Navigation2 />

      <div className='contact-container'>
        <div id='contact'>
          <div className='section-title text-center'>
            <h2>Get In Touch</h2>
            <p>
              Please fill out the form below to send us an email, and we will get
              back to you as soon as possible.
            </p>
          </div>

          {/* Contact form and social media links */}
          <div className='container'>
            <div className='row'>
              {/* Contact form */}
              <div className='col-md-8 mx-auto'>
                <form name='sentMessage' validate onSubmit={handleSubmit}>
                  <div className='row'>
                    {/* Name input */}
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>

                    {/* Email input */}
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>

                  {/* Message input */}
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>

                  {/* Success/error messages */}
                  <div id='success'></div>

                  {/* Submit button */}
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Us an Email!
                  </button>
                </form>
              </div>

              {/* Contact info and social media links */}
              <div className='col-md-3 contact-info'>
                <div className='contact-item'>
                  <h3>Contact Info</h3>
                  <p>
                    <span>
                      {/* Instagram link */}
                      <i className='fa fa-instagram'></i>
                      <a
                        title='Instagram'
                        href='https://www.instagram.com/womeninscienceuwo/?hl=en'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src='/img/icons/icons8-instagram-50.png' alt='Instagram' id="instagram" />
                        Instagram{' '}
                      </a>
                    </span>
                  </p>
                  <p>
                    {/* Facebook link */}
                    <i className='fa fa-facebook'> </i>
                    <a
                      title='Facebook'
                      href='https://m.facebook.com/61565852884608'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src='/img/icons/icons8-facebook-50.png' alt='Facebook' id="facebook" />
                      Facebook{' '}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
