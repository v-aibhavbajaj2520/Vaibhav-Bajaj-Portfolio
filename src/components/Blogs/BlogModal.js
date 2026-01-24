import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { BsX, BsCalendar, BsClock, BsPerson } from "react-icons/bs";
import { gsap } from "gsap";

function BlogModal({ show, blog, onHide }) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (show && modalContentRef.current) {
      // Animate modal entrance
      gsap.fromTo(
        modalContentRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out"
        }
      );
    }
  }, [show]);

  const handleClose = () => {
    // Animate modal exit
    gsap.to(modalContentRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onHide
    });
  };

  if (!blog) return null;

  // Format content with proper line breaks
  const formatContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBlockContent = [];

    lines.forEach((line, index) => {
      // Check for code block delimiter
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          inCodeBlock = false;
          elements.push(
            <pre key={`code-${index}`} style={{ background: "#2d2d2d", padding: "15px", borderRadius: "5px", overflowX: "auto", color: "#f8f8f2", margin: "1rem 0" }}>
              <code style={{ fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' }}>
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          );
          codeBlockContent = [];
        } else {
          // Start of code block
          inCodeBlock = true;
        }
      } else if (inCodeBlock) {
        codeBlockContent.push(line);
      } else {
        // Normal content processing
        if (line.startsWith('## ')) {
          elements.push(<h2 key={index} className="blog-modal-subheading">{line.replace('## ', '')}</h2>);
        } else if (line.startsWith('### ')) {
          elements.push(<h3 key={index} className="blog-modal-subheading-small">{line.replace('### ', '')}</h3>);
        } else if (line.startsWith('![') && line.includes('](') && line.endsWith(')')) {
          const altText = line.substring(line.indexOf('[') + 1, line.indexOf(']'));
          const url = line.substring(line.indexOf('(') + 1, line.indexOf(')'));
          elements.push(
            <div key={index} className="blog-modal-image-container" style={{ textAlign: "center", margin: "20px 0" }}>
              <img 
                src={url} 
                alt={altText} 
                className="blog-modal-content-img img-fluid" 
                style={{ maxWidth: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
              />
              {altText && <p style={{ fontSize: "0.9rem", color: "#aaa", marginTop: "10px", fontStyle: "italic" }}>{altText}</p>}
            </div>
          );
        } else if (line.startsWith('- ') || line.startsWith('* ')) {
          elements.push(<li key={index} className="blog-modal-list-item">{line.substring(2)}</li>);
        } else if (line.match(/^\d+\./)) {
          elements.push(<li key={index} className="blog-modal-list-item">{line.replace(/^\d+\.\s*/, '')}</li>);
        } else if (line.startsWith('**') && line.endsWith('**')) {
          elements.push(<p key={index} className="blog-modal-bold">{line.replace(/\*\*/g, '')}</p>);
        } else if (line.trim() === '') {
          elements.push(<br key={index} />);
        } else {
          elements.push(<p key={index} className="blog-modal-paragraph">{line}</p>);
        }
      }
    });

    return elements;
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="blog-modal"
      backdrop={true}
    >
      <div ref={modalContentRef} className="blog-modal-content">
        <button className="blog-modal-close" onClick={handleClose}>
          <BsX />
        </button>
        
        <div className="blog-modal-header-img">
          <img src={blog.image} alt={blog.title} />
          <div className="blog-modal-category-badge">{blog.category}</div>
        </div>

        <Modal.Body className="blog-modal-body">
          <h1 className="blog-modal-title">{blog.title}</h1>
          
          <div className="blog-modal-meta">
            <span className="blog-modal-meta-item">
              <BsPerson /> {blog.author}
            </span>
            <span className="blog-modal-meta-item">
              <BsCalendar /> {new Date(blog.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
            <span className="blog-modal-meta-item">
              <BsClock /> {blog.readTime}
            </span>
          </div>

          <div className="blog-modal-divider"></div>

          <div className="blog-modal-content-text">
            {formatContent(blog.content)}
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default BlogModal;
