import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
  // Sample blog data - can replace with data from API later
  const blogPosts = [
    {
      id: 1,
      title: "From High School to University: Building the Next Generation of Women in STEM",
      description: "Add short, one sentence description of the article here.",
      image: "img/blog/University.jpg",
      date: "2025-11-13",
      excerpt: "Enter the excerpt (first half sentence) of the article here."
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