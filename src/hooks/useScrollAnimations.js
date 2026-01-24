import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to add scroll-triggered animations to elements
 * @param {Array} refs - Array of refs to animate
 * @param {Object} options - Animation options
 */
export const useScrollAnimation = (refs, options = {}) => {
    const {
        from = { opacity: 0, y: 50 },
        to = { opacity: 1, y: 0 },
        duration = 0.8,
        stagger = 0.2,
        start = "top 80%",
        end = "top 50%",
        ease = "power3.out"
    } = options;

    useEffect(() => {
        const elements = Array.isArray(refs) ? refs : [refs];

        elements.forEach((ref) => {
            if (ref.current) {
                gsap.fromTo(
                    ref.current,
                    from,
                    {
                        ...to,
                        duration,
                        ease,
                        scrollTrigger: {
                            trigger: ref.current,
                            start,
                            end,
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [refs, from, to, duration, stagger, start, end, ease]);
};

/**
 * Add scroll animation to multiple children elements
 * @param {Ref} containerRef - Container ref
 * @param {String} selector - CSS selector for children
 * @param {Object} options - Animation options
 */
export const useScrollStagger = (containerRef, selector = ".animate-item", options = {}) => {
    const {
        from = { opacity: 0, y: 50, scale: 0.9 },
        to = { opacity: 1, y: 0, scale: 1 },
        duration = 0.6,
        stagger = 0.15,
        start = "top 85%",
        ease = "power3.out"
    } = options;

    useEffect(() => {
        if (containerRef.current) {
            const elements = containerRef.current.querySelectorAll(selector);

            gsap.fromTo(
                elements,
                from,
                {
                    ...to,
                    duration,
                    stagger,
                    ease,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start,
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [containerRef, selector, from, to, duration, stagger, start, ease]);
};

export default useScrollAnimation;
