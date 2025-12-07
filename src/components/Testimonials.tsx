import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section section-bg-light">
      <h2>⭐ What Our Clients Say</h2>
      <blockquote className="testimonial">
        "It wasn't just organizing; it was like **brain-training**. I finally have a system that doesn't rely on my memory. The labels are a game-changer."
        <cite>– Ben L., Zurich</cite>
      </blockquote>
      <blockquote className="testimonial">
        "I feel **calm and focused** in my new office. They didn't just declutter; they made my space feel safe."
        <cite>– Mia S., Winterthur</cite>
      </blockquote>
    </section>
  );
};

export default Testimonials;
