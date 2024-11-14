import { Image } from "./image";
import { Link } from "react-router-dom";

/* 
Here is the Gallery component displayed on the Home page. It consists of a
section displaying current and past events. It displays a grid of images
representing the events.

Events can be added and configured in the data.json file, under the data folder.
The data.json file contains an array of objects, each representing an event.
Each event object contains the following properties:
- title: the title of the event
- eventType: the type of event (current or past)
- largeImage: the path to the large image file
- smallImage: the path to the small image file
*/ 

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
