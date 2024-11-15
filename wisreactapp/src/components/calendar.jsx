import React, {useEffect, useState} from "react";

/* 
Here is the separate Calendar component. It uses the separate Navigation bar. 
It displays an embedded Google Calendar which shows all the club's past and 
upcoming events.
*/ 

function Calendar(props) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    window.scrollTo(0, 0);
  }, [] );

  function handleLoading() {
    setIsLoading(false);
  }

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
            {isLoading && (
              <div className="loading-indicator">
                <img src="img/icons/favicon.ico.png" className="loading"></img>
              </div>
            )}
            <iframe src="https://calendar.google.com/calendar/embed?src=7d3cd944488769a5d31072863a482a8334024049eff407b9494887bc4f05e7ba%40group.calendar.google.com&ctz=America%2FToronto"              
              width="90%"
              height="700px"
              title="calendar"
              className="mx-auto"
              onLoad={handleLoading}
              style={
                {display: (isLoading) ? "none" : "block"
                }
              }
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
