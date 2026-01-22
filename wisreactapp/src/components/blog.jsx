import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  // Sample blog data - can replace with data from API later
  const blogPosts = [
    {
      id: 1,
      title: "From High School to University: Building the Next Generation of Women in STEM",
      description: "Exploring how high school STEM programs inspire young women to become leaders and mentors in university communities.",
      image: "img/blog/University.jpg",
      date: "2025-11-13",
      excerpt: "Many young women first discover their passion for STEM through summer programs designed to inspire confidence, collaboration, and creativity."
    },

    {
      id: 2,
      title: "Unlocking the STEM Cheat Code: Why Mentors Matter More Than You Think",
      description: "Exploring the importance of mentorship in STEM education and career development.",
      image: "img/intro-bg.jpg",
      date: "2026-01-21",
      excerpt: "Mentors play a crucial role in guiding students through their academic and professional journeys."
    }

  ];

  return (
    <div>
      <div id="blog" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Blog</h2>
            <p>Stay updated with our latest news, insights, and events.</p>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-md-4 col-sm-6">
                <div className="blog-card">
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    <div className="blog-image-container">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-content">
                      <h4 className="blog-title">{post.title}</h4>
                      <p className="blog-date">{new Date(post.date).toLocaleDateString()}</p>
                      <p className="blog-description">{post.description}</p>
                      <span className="blog-read-more">Read More →</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;