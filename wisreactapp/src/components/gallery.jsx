import { Image } from "./image";
import { Link } from "react-router-dom";

/* 
The Gallery component is used to display a grid of images representing 
current and past events on the Home page. It organizes events into two sections:
"Upcoming and Recent Events" and "Past Featured Events." 

The data for events is passed via the `props.data` prop, which is an array 
of event objects from the data.json file. Each event object includes:
- title: The title of the event
- eventType: Specifies if the event is "current" or "past"
- largeImage: Path to the larger version of the event image
- smallImage: Path to the smaller version of the event image
*/

export const Gallery = (props) => {
  // Filters events based on the eventType (e.g., 'current' or 'past')
  const filterEvents = (eventType) => {
    return props.data.filter((event) => event.eventType === eventType);
  };

  // Maps the filtered events to JSX for rendering
  const renderEvents = (events) => {
    return events.map((d, i) => (
      <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
        {/* Image component displays each event's image */}
        <Image
          title={d.title}
          largeImage={d.largeImage}
          smallImage={d.smallImage}
        />
      </div>
    ));
  };

  return (
    <div id='events' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Events</h2>
          <p>
            Below are some of our current and past events! See our{" "}
            <Link to="/calendar" className="bolder">Calendar</Link> or our{" "}
            <Link to="/imagegallery" className="bolder">Photo Gallery</Link> for more.
          </p>
        </div>

        {/* Current events section */}
        <h3>Upcoming and Recent Events</h3>
        <hr />
        <div className='row'>
          {/* Display current events or a loading message */}
          {props.data ? renderEvents(filterEvents("current")) : "Loading..."}
        </div>

        {/* Past events section */}
        <br />
        <br />
        <h3>Past Featured Events</h3>
        <hr />
        <div className='row'>
          {/* Display past events or a loading message */}
          {props.data ? renderEvents(filterEvents("past")) : "Loading..."}
        </div>
      </div>
    </div>
  );
};
