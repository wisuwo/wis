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
         <p>Here are some of our current and past events!</p>
          <div className='calendar-link'>
          <Link to="/calendar"><button className="btn btn-custom btn-lg">Go to Calendar</button></Link>
          </div> 
       </div>
       {/* Render current events */}
       <h3>Recent Events</h3>
        <hr></hr>
       <div className='row'>
         {props.data ? renderEvents(filterEvents('current')) : 'Loading...'}
       </div>
       {/* Render past events */}
       <br></br>
       <br></br>
       <h3>Past Events</h3>
       <hr></hr>
       <div className='row'>
         {props.data ? renderEvents(filterEvents('past')) : 'Loading...'}
       </div>
       <div className='calendar-link'>
            <button className="btn btn-custom btn-lg"><Link to="/imagegallery">Go To Event Gallery</Link></button>
       </div> 
     </div>
   </div>
 );
};
