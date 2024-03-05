import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Navigation2 } from "./navigation2";

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        'service_3gmk19f',
        'template_j7sicae',
        e.target,
        'user_Yi0hwVNxNbgJ4HvfkuKEs'
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Navigation2 />
      <div id='contact'>
        <div className='section-title text-center'>
          <h2>Get In Touch</h2>
          <p>
            Please fill out the form below to send us an email, and we will get
            back to you as soon as possible.
          </p>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
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
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Us an Email!
                </button>
              </form>
            </div>
            <div className='col-md-3 contact-info'>
              <div className='contact-item'>
                <h3>Contact Info</h3>
                <p>
                  <span>
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
                  <i className='fa fa-facebook'> </i>
                  <a
                    title='Facebook'
                    href='https://www.facebook.com/WomeninScienceUWO'
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
    </div>
  );
};

export default Contact;
