import { useEffect } from 'react'; 
import data from '../data/data.json'; 

/* 
The Newsletter2 component is displayed at the end of the homepage. 
Purpose: 
1. Show the current monthly newsletter.
2. Allow users to view or download the newsletter PDF.
Note: This section does not have a dedicated scroll link in the navigation bar.
*/

export const Newsletter2 = () => {
  // Scrolls the page to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="newsletter" className="text-center">
      <div className="section-title">
        <h2>Interested in our Newsletter?</h2>
        <p>Check out this month's edition!</p> 
      </div>
      <div className="container"> {/* Responsive container */}
        {data.Newsletters.map((newsletter, index) => (
          <div className="row mb-4" key={index}> {/* Map through each newsletter entry */}
            <div className="col-md-6 mx-auto text-center">
              <h3>{newsletter.title}</h3> {/* Display the newsletter title */}
              {/* Button to view the newsletter in a new tab */}
              <a href={newsletter.pdf} target="_blank" rel="noopener noreferrer"> 
                <button className="btn btn-custom btn-newsletter btn-lg mr-3">
                  View
                  {/* SVG icon for "View" */}
                  <svg className="view" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68936 6.70456..." fill="#ffffff"></path> 
                  </svg>
                </button>
              </a>
              {/* Button to download the newsletter */}
              <a href={newsletter.pdf} download>
                <button className="btn btn-custom btn-newsletter btn-lg">
                  Download
                  {/* SVG icon for "Download" */}
                  <svg className="download" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V16M12 16L16..." stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter2;
