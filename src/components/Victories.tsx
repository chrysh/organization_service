import React, { useState } from 'react';

// --- New Carousel Component ---
interface CarouselProps {
  images: string[];
  label: string;
  isAfter: boolean; // Flag to determine styling (Before/After)
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, label, isAfter }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the previous image
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to move to the next image
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const labelClass = isAfter ? 'after-label' : 'before-label';

  return (
    <div className={`image-box ${isAfter ? 'after' : 'before'}`}>

      {/* Label Badge */}
      <span className={`label-badge ${labelClass}`}>{label}</span>

      {/* Current Image */}
      {images.length > 0 && (
        <img src={images[currentIndex]} alt={`${label} image ${currentIndex + 1}`} />
      )}

      {/* Navigation Buttons (Only visible if more than one image exists) */}
      {images.length > 1 && (
        <>
          <button className="carousel-btn left-arrow" onClick={goToPrevious}>&lt;</button>
          <button className="carousel-btn right-arrow" onClick={goToNext}>&gt;</button>

          {/* Slide Indicator Dots */}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
              </span>
            ))}
          </div>
        </>
      )}

      {isAfter && <div className="shiny-overlay"></div>}
    </div>
  );
};
// -----------------------------


const Victories: React.FC = () => {
  // --- UPDATED DATA STRUCTURE: Images are now Arrays ---
  const transformations = [
    {
      id: 1,
      title: "The Doom-Pile Dungeon",
      location: "Bedroom Office",
      level: "Level 10 Unlocked",
      stats: "+50 Focus",
      beforeImgs: [
        "/images/victories/christina_room_before_1.jpg",
        "/images/victories/christina_room_before_2.jpg",
        "/images/victories/christina_room_before_3.jpg",
      ],
      afterImgs: [
        "/images/victories/christina_room_after_1.jpg",
        "/images/victories/christina_room_after_2.jpg",
        "/images/victories/christina_room_after_3.jpg",
      ],
    },
    {
      id: 2,
      title: "The Kitchen of Chaos",
      location: "Pantry",
      level: "System Mastered",
      stats: "+30 Cooking Speed",
      beforeImgs: [
        "/images/victories/alex_room_before_1.jpg",
        "/images/victories/alex_room_before_2.jpg",
      ],
      afterImgs: [
        "/images/victories/alex_room_after_1.jpg",
        "/images/victories/alex_room_after_2.jpg",
      ],
    }
  ];
  // ----------------------------------------------------

  return (
    <section className="victories-section section-bg-light" id="victories">
      <div className="victories-wrapper">

        {/* Header Section (Rest of header remains the same) */}
        <div className="victories-header">
          <div className="icon-badge">✨</div>
          <h2>Real Life Victories</h2>
          <p>See how we turn "Game Over" into "Level Up."</p>
        </div>

        {/* Gallery Grid */}
        <div className="victories-grid">
          {transformations.map((item) => (
            <div key={item.id} className="victory-card">

              {/* Card Header */}
              <div className="victory-card-header">
                <div>
                  <h3>{item.title}</h3>
                  <span className="location-tag">{item.location}</span>
                </div>
                <div className="xp-badge">{item.stats}</div>
              </div>

              {/* Comparison Area (Now uses the Carousel Component) */}
              <div className="comparison-container">

                {/* Before Carousel */}
                <ImageCarousel images={item.beforeImgs} label="Before" isAfter={false} />

                {/* Arrow Icon in middle */}
                <div className="flow-arrow">➜</div>

                {/* After Carousel */}
                <ImageCarousel images={item.afterImgs} label="Quest Complete!" isAfter={true} />
              </div>

              {/* Footer / Level Status */}
              <div className="victory-footer">
                <span className="trophy-icon">🏆</span> {item.level}
              </div>

            </div>
          ))}
        </div>

        <button className="cta-primary cta-wide" style={{ marginTop: '40px' }}>
          Start Your Own Transformation
        </button>

      </div>
    </section>
  );
};

export default Victories;
