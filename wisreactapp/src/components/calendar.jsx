import React, {useEffect} from "react";

function Calendar(props) {

  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [] );

  return (props.trigger) ? (
    <div id='schedule' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <br></br>
          <br></br>
          <h2>Calendar</h2>
          <p>
            Stay updated with all of our upcoming events.
          </p>
        </div>
        <div className='row justify-content-center'> 
          <div className='col-md-8'>
            <iframe src="https://calendar.google.com/calendar/embed?src=sshb5he2u8ak5t72cjdu7dgefc%40group.calendar.google.com&ctz=America%2FNew_York"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="calendar"
              className="mx-auto"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

export default Calendar;
