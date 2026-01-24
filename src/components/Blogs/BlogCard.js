import React from "react";
import { Card } from "react-bootstrap";
import { BsCalendar, BsClock, BsArrowRight } from "react-icons/bs";

function BlogCard({ blog, onClick }) {
  return (
    <Card 
      className="blog-card-view" 
      onClick={() => onClick(blog)}
      style={{ cursor: "pointer" }}
    >
      <Card.Img 
        variant="top" 
        src={blog.image} 
        alt={blog.title}
        className="blog-card-img"
      />
      <Card.Body>
        <div className="blog-category-badge">
          {blog.category}
        </div>
        <Card.Title className="blog-card-title">{blog.title}</Card.Title>
        <Card.Text className="blog-card-excerpt">
          {blog.excerpt}
        </Card.Text>
        <div className="blog-card-meta">
          <span className="blog-meta-item">
            <BsCalendar /> {new Date(blog.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="blog-meta-item">
            <BsClock /> {blog.readTime}
          </span>
        </div>
        <div className="blog-card-footer">
          <span className="blog-read-more">
            Read More <BsArrowRight className="arrow-icon" />
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
