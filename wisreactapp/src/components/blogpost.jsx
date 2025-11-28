import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = (props) => {
  const { id } = useParams();
  
  // blog posts data 
  const blogPosts = {
    1: {
      title: "From High School to University: Building the Next Generation of Women in STEM",
      image: "/img/blog/University.jpg",
      date: "2025-11-28",
      author: "Harleen Monder, Director of Technology for Women in Science at Western University",
      content: `
        <h3>Introduction</h3>
        <p>Many young women first discover their passion for science, technology, engineering, and math (STEM) through summer programs designed to inspire confidence, collaboration, and creativity.</p>
        
        <p>Having participated in programs like Kode With Klossy, Girls Who Code, and HackerGal, I experienced firsthand how empowering it is to learn in an all-female environment. These programs not only teach technical skills but also create communities where girls see what is possible when they take up space in technology.</p>
        
        <p>As university students, we often look back at those early experiences and realize how much they shaped our academic and career goals. But the journey does not end there, it evolves.</p>

        <h3>High School Programs That Sparked my Tech Journey</h3>
        <p>Kode With Klossy offers several intensive two-week programs designed to introduce high school girls to technology and innovation. Each curriculum focuses on a key area of computer science:</p>
        
        <p><strong>Web Development:</strong> Scholars build dynamic websites using JavaScript, HTML, and CSS while learning about responsive design, accessibility, and improving user interface (UI) and user experience (UX).</p>
        
        <p><strong>Machine Learning:</strong> Scholars explore the fundamentals of artificial intelligence and machine learning using Python. They study algorithms, datasets, and natural language processing to train a chatbot while also examining bias and ethics in AI.</p>
        
        <p><strong>Mobile App Development:</strong> Scholars code in Swift and use SwiftUI within Xcode to design fully functioning iOS applications.</p>
        
        <p><strong>Data Science:</strong> Scholars analyze data using SQL, Python, and visualization tools to create visual projects based on topics they care about.</p>
        
        <p>Through these specialized tracks, Kode With Klossy empowers participants to understand not only how technology works, but also how to use it responsibly and creatively.</p>
        
        <p>Girls Who Code provides a range of opportunities that focus on skill-building and community. Their Summer Immersion Program is a two-week experience in which participants learn game design in live virtual classrooms, make friends, and receive college and career advice from industry leaders. The Pathways Program extends this learning through a six-week self-paced opportunity to explore web development, cybersecurity, data science, and artificial intelligence independently, fostering both technical ability and confidence.</p>
        
        <p>HackerGal focuses on inspiring Canadian girls and gender-diverse learners in grades 9–12 to explore post-secondary education and careers in technology. Its National Ambassador Program is a four-year journey that builds leadership and mentorship skills:</p>
        
        <p><strong>Year 1: Becoming a Role Model</strong> – Ambassadors create and launch a Hackergal Club in their community.</p>
        
        <p><strong>Year 2: Learning to Lead</strong> – They mentor first-year Ambassadors and begin exploring career pathways.</p>
        
        <p><strong>Year 3: Expanding Your Network</strong> – Participants meet women in tech, develop networking skills, and prepare for post-secondary education.</p>
        
        <p><strong>Year 4: Shaping Future-Ready Learners</strong> – Ambassadors build portfolios, strengthen professional competencies, and empower others through mentorship.</p>
        
        <p>HackerGal participants also gain digital skills training, mentorship, scholarship opportunities, and volunteer experience that supports both their personal and professional growth.</p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/logos.png" alt="Kode with Klossy, Girls Who Code, Hackergal logos" class="blog-content-image" />
            <p class="image-caption">Programs that spark an early passion for STEM.</p>
        </div>

        <h3>From Inspiration to Action: Continuing the Journey in University</h3>
        <p>When those students enter university, the opportunities shift from learning to leading. Clubs like Women in Science (WiS) at Western University become the next chapter in their career journey. WiS provides a community where women in STEM fields can connect, collaborate, and uplift one another through mentorship programs, speaker events, and outreach initiatives.</p>
        
        <p>The same encouragement that once came from instructors or mentors now comes from peers and professionals within the university community. It is about carrying forward that passion for STEM, this time, not as a participant, but as an advocate and role model.</p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/community.png" alt="WiS team events" class="blog-content-image" />
            <p class="image-caption">Women in Science members fostering mentorship and community at Western.</p>
        </div>

        <h3>Giving Back: Opportunities to Mentor the Next Generation</h3>
        <p>The beauty of programs like Kode With Klossy and Girls Who Code is that they come full circle. Many university students return as Instructional Assistants, Teaching Fellows, or Interns, guiding new cohorts of high school girls through their first coding projects.</p>
        
        <p>These roles allow university students to strengthen their own technical and leadership skills while giving back to the programs that once inspired them. Similarly, volunteering with HackerGal or local outreach initiatives can be an incredibly rewarding way to promote accessibility and inclusion in STEM.</p>

        <h3>Why This Matters</h3>
        <p>Creating gender equity in STEM is not only about early education, it is about sustaining momentum. When girls are supported in high school and women are empowered in university, it builds a continuous pipeline of talent, leadership, and innovation.</p>
        
        <p>By joining clubs like Women in Science, students extend that same sense of belonging they once received to the next generation. Whether it is through mentorship, workshops, or volunteering, every contribution helps shape a more inclusive future for STEM.</p>

        <h3>Closing Thoughts</h3>
        <p>The journey from high school STEM programs to university communities like WiS represents more than academic growth, it is a story of empowerment, connection, and purpose.</p>
        
        <p>As university students, we have the opportunity to transform inspiration into impact. Whether by mentoring, organizing events, or sharing our stories, we continue building a world where every girl knows she belongs in STEM.</p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/group_photo.png" alt="WiS Team" class="blog-content-image" />
            <p class="image-caption">Together, we are building the next generation of women in STEM.</p>
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