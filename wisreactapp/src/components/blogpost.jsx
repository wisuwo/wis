import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = (props) => {
  const { id } = useParams();
  
  // blog posts data 
  const blogPosts = {
    1: {
      title: "From High School to University: Building the Next Generation of Women in STEM",
      image: "/img/blog/University.jpg",
      date: "2025-11-13",
      author: "Harleen Monder, Director of Technology for Women in Science at Western University",
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt auctor mauris, eu aliquet neque placerat eget. Proin molestie ante at dui dignissim, dictum dictum est pulvinar.</p>
        
        <h3>Heading One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt auctor mauris, eu aliquet neque placerat eget. Proin molestie ante at dui dignissim, dictum dictum est pulvinar.</p>
        
        <div class="blog-image-with-caption">
            <img src="/img/blog/logos.png" alt="Kode with Klossy, Girls Who Code, Hackergal logos" class="blog-content-image" />
            <p class="image-caption">Programs that spark an early passion for STEM.</p>
        </div>

        <h3>Heading Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt auctor mauris, eu aliquet neque placerat eget. Proin molestie ante at dui dignissim, dictum dictum est pulvinar.</p>
        
        <h3>Heading Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt auctor mauris, eu aliquet neque placerat eget. Proin molestie ante at dui dignissim, dictum dictum est pulvinar. </p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/community.png" alt="WiS team events" class="blog-content-image" />
            <p class="image-caption">Women in Science members fostering mentorship and community at Western.</p>
        </div>

      `
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div id="blog-post" className="section">
        <div className="container">
          <h2>Post not found</h2>
          <Link to="/blog" className="btn-custom">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div id="blog-post" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Back to Blog Link */}
            <Link to="/blog" className="back-to-blog">
              <span className="back-arrow">←</span> Back to Blog
            </Link>
            
            {/* Blog Post Header */}
            <header className="blog-post-header text-center mb-5">
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-author">By: {post.author}</span>
                <span className="blog-post-separator"> • </span>
                <span className="blog-post-date">{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="blog-post-featured-image mb-5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-post-image"
                />
              </div>
            )}

            {/* Blog Post Content */}
            <article className="blog-post-content">
              <div 
                className="blog-post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Back to Blog Button at Bottom */}
            <div className="text-center mt-5">
              <Link to="/blog" className="btn-custom">
                Back to All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;