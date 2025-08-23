import React from "react";
import image2 from "../assets/image/image2.jpg";
import image4 from "../assets/image/image4.jpg";
import image5 from "../assets/image/image5.jpg";
import image6 from "../assets/image/image6.jpg";
import image7 from "../assets/image/image7.jpg";

export default function EventMarquee() {
  const images = [image2, image4, image5, image6, image7];

  // Repeat multiple times to ensure overflow
  const longTrackImages = [...images, ...images, ...images, ...images];

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-track">
          {longTrackImages.map((src, index) => (
            <div className="marquee-item" key={index}>
              <img src={src} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
      </div>
      {/* Fade blur overlays */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>
    </div>
  );
}
