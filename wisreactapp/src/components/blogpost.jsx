import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = (props) => {
  const { id } = useParams();
  
  // blog posts data 
  const blogPosts = {

    1: {
      title: "Unlocking the STEM Cheat Code: Why Mentors Matter More Than You Think",
      image: "/img/intro-bg.jpg",
      date: "2026-01-21",
      author: "Hania Yasin, Director of Technology for Women in Science at Western University",

      content: `
        <p>Learning on your own and working through difficult problems builds important skills. There's real value in figuring things out independently. However, there's a faster path to success in STEM, and it comes through mentorship. For women in science, where we already see fewer female faces in classrooms and labs, mentorship becomes even more critical.</p>

        <h3>First-Year Students: Finding Your Path Faster</h3>
        <p>Starting university in a STEM program can feel overwhelming. You're faced with countless decisions from the moment you arrive. Which courses should you take? Which professors explain concepts the most clearly? Should you try to get a research position right away, or focus on building your grades first? What extracurricular activities actually matter for your future career?</p>
        <p>Without guidance, most students spend months, sometimes an entire year trying different approaches to see what works. You might choose a course that doesn't align with your goals, or miss an important opportunity because you didn't know it existed. This trial-and-error approach means you're learning valuable lessons, but you're also losing precious time.</p>
        <p>This is where mentorship changes everything. When you connect with an upper-year student who has already walked your path, you gain immediate access to their knowledge. They can tell you which study strategies actually helped them succeed, which mistakes set them back, and which opportunities opened doors for their future. They've already made the mistakes, learned from them, and can now help you avoid the same pitfalls.</p>
        <p>For women in STEM, this guidance is particularly valuable. When you're already part of an underrepresented group, you may face additional challenges that your male peers don't encounter. A female mentor who has experienced similar situations can offer specific advice on navigating these obstacles. She understands what it's like to be the only woman in a room, to have your ideas overlooked, or to doubt whether you truly belong. Her experience becomes your roadmap, helping you move forward with confidence instead of uncertainty.</p>
        <p>Think of it this way: instead of wandering through a maze hoping to find the exit, you're getting directions from someone who has already made it through. You still do the walking, but you're not wasting time going down dead ends.</p>

        <h3>Upper-Year Students: Growing Through Teaching</h3>
        <p>If you’re an upper-year student you might think, “how does mentorship help me?” Mentorship isn't just about helping younger students; it offers powerful benefits for mentors too. When you're an upper-year student, it's easy to forget how far you've come. You're focused on your current challenges of preparing for graduate school applications, working on your thesis, or planning your career after graduation. The struggles you faced in first or second year feel distant and perhaps less significant.</p>
        <p>But when you sit down with a first-year student who is grappling with concepts you now understand deeply, something shifts. You suddenly recognize your own growth. That organic chemistry concept that kept you up at night for weeks? You can now explain it clearly in ten minutes. Those doubts about whether you were smart enough to succeed in STEM? You've moved past them and can help someone else do the same.</p>
        <p>Teaching and guiding someone else actually strengthens your own understanding. When you explain a concept out loud, you have to organize your thoughts clearly. When you give advice, you reflect on why certain strategies worked for you, while others didn't. This process of articulation and reflection deepens your learning in ways that studying alone never could.</p>
        <p>Beyond academics, mentorship builds leadership skills that will serve you throughout your career. You learn how to listen carefully, ask good questions, provide constructive feedback, and support someone through challenges. These are the same skills you'll need in your future career, whether you become a research team leader, a project manager in industry, or a professor guiding graduate students. Mentorship gives you a safe space to develop these abilities while still in school.</p>
        <p>There's also something deeply rewarding about giving back. You once needed help, and someone either formally or informally probably helped you along the way. Now you get to be that person for someone else. You get to make their path a little easier, just as yours was made easier by those who came before you.</p>

        <h3>Building Community: Breaking the Isolation</h3>
        <p>Here's a truth about STEM that many students don't expect: it can be lonely. The workload is heavy, the material is challenging, and the environment is often competitive rather than collaborative. You spend long hours in labs or libraries, working through problems that can feel insurmountable. It's easy to feel like you're struggling alone, like everyone else has it figured out while you're barely keeping up.</p>
        <p>For women in STEM, this isolation often runs deeper. You might be the only woman in your physics class, or one of just two or three in your computer science program. You walk into labs and tutorials where you don't see anyone who looks like you. You hear comments that are sometimes subtle, but sometimes not, that make you question whether you belong.</p>
        <p>This lack of representation takes a toll. <a href="https://brajets.com/brajets/article/view/1140" target="_blank" rel="noopener noreferrer">Research</a> shows that feeling isolated or like you don't belong can affect your performance, your confidence, and ultimately your decision to stay in STEM.</p>
        <p>When you don't see people like yourself succeeding, it's harder to imagine your own success.</p>
        <p>Mentorship directly addresses this problem. When you join a mentorship program, especially one designed for YOU as a woman in STEM, you're immediately connected to a supportive community. You meet other women who share your experiences, and who understand your challenges without you having to explain them. You realize you're not alone in feeling like an outsider sometimes, or in dealing with people who underestimate you because of your gender.</p>
        <p>This community becomes a support system. Instead of everyone struggling alone, you have people to turn to when things get difficult. You can ask questions without feeling judged. You can celebrate your successes with people who truly understand what you have accomplished. You can vent your frustrations to people who have felt the same way. You can share resources, study tips, and opportunities.</p>
        <p>Over time, these connections build something bigger than just individual relationships; they create a network. This network stays with you throughout your career. The peer you mentored might recommend you for a job opportunity years later. The friends you made through mentorship programs become lifelong connections who support your professional growth.</p>
        <p>Most importantly, this community reminds you that you belong. You’re not an outlier or an exception. You’re part of a growing group of women who are changing the face of STEM, one degree at a time.</p>

        <h3>Finding Your Mentorship Opportunity</h3>
        <p>Understanding why mentorship matters is the first step. The next step is actually finding these opportunities, and luckily, Western University offers many options.</p>
        <p>Start by exploring student clubs and organizations related to your field. Most STEM departments have student societies that run various programs throughout the year, including mentorship initiatives. Follow these groups on social media platforms like Instagram and Facebook, where they typically announce when applications open for their programs. Sign up for their email lists so you don't miss important deadlines.</p>
        <p>If you're a woman in science, the Women in Science (WiS) club at Western should be on your radar. WiS runs three distinct mentorship programs, each designed for different stages of your academic journey:</p>

        <h5>Little Sisters in Science Program</h5>
        <p>The Little Sisters in Science Program pairs high school students interested in STEM with undergraduate mentors. As a mentor, you’ll be able to guide your mentee through university applications, attend professional development events at Western University together, and help uplift other women in science.</p>

        <h5>Sisters in Science Mentorship Program</h5>
        <p>The Sisters in Science Mentorship Program creates peer mentorship connections among undergraduate students. Join the Sisters in Science Mentorship Program as a 1st or 2nd year undergraduate student to be paired with an upper year undergraduate student! You’ll be able to receive advice on academics, campus life, networking, and more through the program. You’ll also be able to attend professional development events through the WiS club as a mentee or a mentor.</p>

        <h5>Graduate Sisters in Science Mentorship Program</h5>
        <p>The Graduate Sisters in Science Program is open to undergraduate students at Western University in year 2, 3, 4, and 5+! The program partners you with a graduate student mentor who will help guide you through the ups and downs of your academic path! You’ll also learn more about career and educational pathways as a graduate student, and gain advice on them as an undergraduate student.</p>
        <p>Beyond WiS, don't limit yourself to just one program. If you're interested in computer science, look into tech focused clubs. If you're in life sciences, explore research-oriented groups. If you're considering medicine, connect with pre-medical societies. Many of these organizations run their own mentorship initiatives or can connect you informally with upper-year students in your area of interest.</p>
        <p>Don't be afraid to reach out directly either. If you see a program that interests you but applications aren't currently open, send an email asking when the next round's applications will be opening. If you meet an upper year student who seems knowledgeable and approachable, ask if they'd be willing to grab coffee and answer some questions. Informal mentorship relationships can be just as valuable as formal programs.</p>

        <h3>Taking Action</h3>
        <p>The path through STEM is challenging enough on its own. You don't have to walk it alone.</p>
        <p>If you're a first-year student, seek out mentorship now. Don't wait until you're struggling or until you've already made avoidable mistakes. The guidance you receive early can shape your entire university experience and set you on a path toward your goals. If you're an upper-year, consider becoming a mentor. You have more knowledge than you realize, and sharing it benefits both you and your mentee. You'll develop leadership skills, gain fresh perspective on your own journey, and contribute to building a stronger community of women in STEM.</p>
        <p>Your future self will thank you for it.</p>
      `
    },

    2: {
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
        
        <ul>
          <li><strong>Web Development:</strong> Scholars build dynamic websites using JavaScript, HTML, and CSS while learning about responsive design, accessibility, and improving user interface (UI) and user experience (UX).</li>
          
          <li><strong>Machine Learning:</strong> Scholars explore the fundamentals of artificial intelligence and machine learning using Python. They study algorithms, datasets, and natural language processing to train a chatbot while also examining bias and ethics in AI.</li>
          
          <li><strong>Mobile App Development:</strong> Scholars code in Swift and use SwiftUI within Xcode to design fully functioning iOS applications.</li>
          
          <li><strong>Data Science:</strong> Scholars analyze data using SQL, Python, and visualization tools to create visual projects based on topics they care about.</li>
        </ul>
        
        <p>Through these specialized tracks, Kode With Klossy empowers participants to understand not only how technology works, but also how to use it responsibly and creatively.</p>
        
        <p>Girls Who Code provides a range of opportunities that focus on skill-building and community. Their Summer Immersion Program is a two-week experience in which participants learn game design in live virtual classrooms, make friends, and receive college and career advice from industry leaders. The Pathways Program extends this learning through a six-week self-paced opportunity to explore web development, cybersecurity, data science, and artificial intelligence independently, fostering both technical ability and confidence.</p>
        
        <p>HackerGal focuses on inspiring Canadian girls and gender-diverse learners in grades 9–12 to explore post-secondary education and careers in technology. Its National Ambassador Program is a four-year journey that builds leadership and mentorship skills:</p>
        
        <ul>
          <li><strong>Year 1: Becoming a Role Model</strong> – Ambassadors create and launch a Hackergal Club in their community.</li>
          
          <li><strong>Year 2: Learning to Lead</strong> – They mentor first-year Ambassadors and begin exploring career pathways.</li>
          
          <li><strong>Year 3: Expanding Your Network</strong> – Participants meet women in tech, develop networking skills, and prepare for post-secondary education.</li>
          
          <li><strong>Year 4: Shaping Future-Ready Learners</strong> – Ambassadors build portfolios, strengthen professional competencies, and empower others through mentorship.</li>
        </ul>
        
        <p>HackerGal participants also gain digital skills training, mentorship, scholarship opportunities, and volunteer experience that supports both their personal and professional growth.</p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/logos.png" alt="Kode with Klossy, Girls Who Code, Hackergal logos" class="blog-content-image" />
            <p class="image-caption">Programs that spark an early passion for STEM.</p>
        </div>

        <h3>From Inspiration to Action: Continuing the Journey in University</h3>
        <p>When those students enter university, the opportunities shift from learning to leading. Clubs like Women in Science (WiS) at Western University become the next chapter in their career journey. WiS provides a community where women in STEM fields can connect, collaborate, and uplift one another through mentorship programs, speaker events, and outreach initiatives.</p>
        
        <p>The same encouragement that once came from instructors or mentors now comes from peers and professionals within the university community. It is about carrying forward that passion for STEM, this time, not as a participant, but as an advocate and role model.</p>

        <div class="blog-image-with-caption">
            <img src="/img/blog/community.jpeg" alt="WiS team events" class="blog-content-image" />
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