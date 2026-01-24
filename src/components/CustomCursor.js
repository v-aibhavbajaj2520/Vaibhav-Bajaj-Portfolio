import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function CustomCursor() {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const cursorPos = useRef({ x: 0, y: 0 });
    const cursorDotPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Check if device supports hover (not touch device)
        const isTouchDevice = window.matchMedia("(hover: none)").matches;
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Mouse move handler
        const handleMouseMove = (e) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };
            cursorDotPos.current = { x: e.clientX, y: e.clientY };

            // Animate cursor dot (instant)
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0,
            });

            // Animate cursor ring (with lag)
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        // Mouse enter on interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 1.8,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(cursorDot, {
                scale: 0,
                duration: 0.3,
            });
        };

        // Mouse leave from interactive elements
        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.3,
            });
        };

        // Add event listeners
        document.addEventListener("mousemove", handleMouseMove);

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, .project-card-view, .blog-card-view, .tech-icons, input, textarea, [role="button"]'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    // Don't render on touch devices
    if (window.matchMedia("(hover: none)").matches) {
        return null;
    }

    return (
        <>
            <div ref={cursorRef} className="custom-cursor"></div>
            <div ref={cursorDotRef} className="custom-cursor-dot"></div>
        </>
    );
}

export default CustomCursor;
