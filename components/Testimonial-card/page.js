"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      image: "/images/Testimonials/testimonialcard1.png",
      content:
        "i11Labs transformed our logistics platform with their AI integration. The team delivered exceptional results on time and within budget. Their expertise in custom software development is unmatched.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Director, InnovateCo",
      image: "/images/Testimonials/testimonialcard2.png",
      content:
        "The application modernization work done by i11Labs exceeded our expectations. They modernized our legacy systems seamlessly, improving performance and user experience significantly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "CEO, Digital Solutions LLC",
      image: "/images/Testimonials/testimonialcard3.png",
      content:
        "Working with i11Labs was a game-changer for our business. Their technology consultation helped us identify key opportunities and their execution was flawless. Highly recommended!",
      rating: 4,
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Operations Manager, Global Logistics",
      image: "/images/Testimonials/testimonialcard4.png",
      content:
        "The AI-powered load board developed by i11Labs revolutionized our operations. Real-time tracking and predictive pricing features have given us a competitive edge in the market.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Head of Technology, FinanceCorp",
      image: "/images/Testimonials/testimonialcard5.png",
      content:
        "The digital signature platform developed by i11Labs has streamlined our document processes. Secure, efficient, and user-friendly - exactly what we needed for our growing business.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  // Continuous sliding animation
  useEffect(() => {
    const startAnimation = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      let position = 0;
      const speed = 0.5; // pixels per frame - adjust for speed
      const cardWidth = 800; // approximate card width with margin

      const animate = () => {
        position -= speed;

        // Reset position when we've scrolled through all cards
        if (Math.abs(position) >= cardWidth * testimonials.length) {
          position = 0;
        }

        carousel.style.transform = `translateX(${position}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    startAnimation();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [testimonials.length]);

  // Also update current index for dot indicators
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change index every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={index < rating ? "#FFD700" : "#E4E5E9"}
        className={styles.star}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  return (
    <div className={styles.testimonialSection}>
      <div className="container mt-4 py-4 mx-auto" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            {/* Testimonials Carousel Container */}
            <div className={styles.carouselContainer}>
              <div ref={carouselRef} className={styles.carouselTrack}>
                {/* Original testimonials */}
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className={styles.testimonialCard}>
                    <div className={styles.cardBody}>
                      <div className="row align-items-center h-100">
                        {/* Left Side - Image & Details (30%) */}
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                          <div className={styles.profileSection}>
                            <div
                              className={styles.profileImage}
                              style={{
                                backgroundImage: `url(${testimonial.image})`,
                              }}
                            />
                            <h5 className={styles.name}>{testimonial.name}</h5>
                            <p className={styles.role}>{testimonial.role}</p>
                          </div>
                        </div>

                        {/* Right Side - Content & Rating (70%) */}
                        <div className="col-12 col-md-8">
                          <div className={styles.contentSection}>
                            {/* Left Quote Positioned Absolutely */}
                            <img
                              src="/images/Testimonials/QuoteLeft.png"
                              alt="left quote"
                              className={styles.quoteLeftDecor}
                            />

                            <p className={styles.content}>
                              {testimonial.content}
                            </p>

                            {/* Right Quote Positioned Absolutely */}
                            <div className={styles.quoteRightDecor}>
                              <img
                                src="/images/Testimonials/QuoteRight.png"
                                alt="right quote"
                              />
                            </div>
                          </div>

                          <div className={styles.ratingSection}>
                            <div className={styles.stars}>
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicated testimonials for seamless loop */}
                {testimonials.map((testimonial) => (
                  <div
                    key={`duplicate-${testimonial.id}`}
                    className={styles.testimonialCard}
                  >
                    <div className={styles.cardBody}>
                      <div className="row align-items-center h-100">
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
                          <div className={styles.profileSection}>
                            <div
                              className={styles.profileImage}
                              style={{
                                backgroundImage: `url(${testimonial.image})`,
                              }}
                            />
                            <h5 className={styles.name}>{testimonial.name}</h5>
                            <p className={styles.role}>{testimonial.role}</p>
                          </div>
                        </div>

                        <div className="col-12 col-md-8">
                          <div className={styles.contentSection}>
                            {/* Left Quote Positioned Absolutely */}
                            <img
                              src="/images/Testimonials/QuoteLeft.png"
                              alt="left quote"
                              className={styles.quoteLeftDecor}
                            />

                            <p className={styles.content}>
                              {testimonial.content}
                            </p>

                            {/* Right Quote Positioned Absolutely */}
                            <div className={styles.quoteRightDecor}>
                              <img
                                src="/images/Testimonials/QuoteRight.png"
                                alt="right quote"
                              />
                            </div>
                          </div>

                          <div className={styles.ratingSection}>
                            <div className={styles.stars}>
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
