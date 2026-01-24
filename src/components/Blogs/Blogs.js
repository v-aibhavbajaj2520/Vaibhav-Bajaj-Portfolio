import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import { blogData, categories } from "./blogData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const blogCardsRef = useRef([]);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Animate title on mount
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate category buttons
    if (categoryRef.current) {
      gsap.fromTo(
        categoryRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }
  }, []);

  useEffect(() => {
    // Animate blog cards with scroll trigger
    blogCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedCategory]);

  const filteredBlogs = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === selectedCategory);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedBlog(null), 300);
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 ref={titleRef} className="project-heading">
          My <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "2rem" }}>
          Insights on technology, cybersecurity, and how things work
        </p>

        {/* Category Filter */}
        <div className="blog-category-filter" ref={categoryRef}>
          {categories.map((category) => (
            <button
              key={category}
              className={`blog-category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredBlogs.map((blog, index) => (
            <Col 
              md={6} 
              lg={4} 
              className="blog-card" 
              key={blog.id}
              ref={el => blogCardsRef.current[index] = el}
            >
              <BlogCard blog={blog} onClick={handleBlogClick} />
            </Col>
          ))}
        </Row>

        {filteredBlogs.length === 0 && (
          <div style={{ textAlign: "center", color: "white", padding: "3rem" }}>
            <h3>No blogs found in this category</h3>
          </div>
        )}
      </Container>

      {/* Blog Modal */}
      <BlogModal 
        show={showModal} 
        blog={selectedBlog} 
        onHide={handleCloseModal} 
      />
    </Container>
  );
}

export default Blogs;
