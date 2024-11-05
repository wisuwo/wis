import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Newsletter2 = (props) => {
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

  useEffect(() => {
    window.scrollTo(0,0);
  });

  return (
    <div>
        <div id="newsletter">
          <div className="section-title text-center">
            <h2>Interested in our Newsletter?</h2>
              <p>
                Sign up and get Women in Science updates!
              </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="row">
                <div className="col-md-6">
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control newsletter-submit'
                    placeholder='Email'
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 newsletter-submit text-center">
                  <button type='submit' className='btn btn-custom btn-newsletter btn-lg'>
                    Sign Up!
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};