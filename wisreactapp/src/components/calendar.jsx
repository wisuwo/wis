import React, { useEffect, useState } from "react";

/* 
The Calendar component displays an embedded Google Calendar 
to showcase all past and upcoming events for the club. It uses 
a `trigger` prop to conditionally render the calendar. 
A loading indicator is displayed while the iframe is loading.
*/

function Calendar(props) {
  // State to track whether the iframe is still loading
  const [isLoading, setIsLoading] = useState(true);

  // Scrolls to the top of the page when the component is mounted
  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [] );

  // Handler to stop showing the loading indicator once the iframe has loaded
  function handleLoading() {
    setIsLoading(false);
  }

  // Renders the Calendar component only if the `trigger` prop is true
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

        <div className=''>
          <div className=''>
            {/* Show a loading indicator while the calendar is loading */}
            {isLoading && (
              <div className="loading-indicator">
                <img src="img/icons/favicon.ico.png" className="loading" alt="Loading indicator"></img>
              </div>
            )}

            {/* Embed the Google Calendar iframe */}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=7d3cd944488769a5d31072863a482a8334024049eff407b9494887bc4f05e7ba%40group.calendar.google.com&ctz=America%2FToronto"
              width="90%"
              height="700px"
              title="calendar"
              className="mx-auto"
              onLoad={handleLoading} // Stop loading once iframe is loaded
              style={{
                display: isLoading ? "none" : "block" // Hide iframe while loading
              }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  ) : ""; // Render nothing if `trigger` is false
}

export default Calendar;
