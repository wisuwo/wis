import { Image } from "./image";
import { Link } from "react-router-dom";

export const Gallery = (props) => {
 const filterEvents = (eventType)=> {
   return props.data.filter(event => event.eventType == eventType);
 };


 const renderEvents = (events) => {
   return events.map((d, i) => (
     <div key = {`${d.title}-${i}`} className ='col-sm-6 col-md-4 col-lg-4'>
       <Image title = {d.title} largeImage = {d.largeImage} smallImage = {d.smallImage} />
     </div>
   ));
 };


 return (
   <div id='events' className='text-center'>
     <div className='container'>
       <div className='section-title'>
         <h2>Events</h2>
         <p>Below are some of our current and past events! See our <Link to="/calendar" className="bolder">Calendar</Link> or our <Link to="/imagegallery" className="bolder">Photo Gallery</Link> for more.</p>
       </div>
       {/* Render current events */}
       <h3>Upcoming and Recent Events</h3>
        <hr></hr>
       <div className='row'>
         {props.data ? renderEvents(filterEvents('current')) : 'Loading...'}
       </div>
       {/* Render past events */}
       <br></br>
       <br></br>
       <h3>Past Featured Events</h3>
       <hr></hr>
       <div className='row'>
         {props.data ? renderEvents(filterEvents('past')) : 'Loading...'}
       </div>
     </div>
   </div>
 );
};
