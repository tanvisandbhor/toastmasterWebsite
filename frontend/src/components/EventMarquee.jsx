

import React from "react";
import img1 from "../assets/image/image2.jpg";
import img2 from "../assets/image/image4.jpg";
import img3 from "../assets/image/image5.jpg";
import img4 from "../assets/image/image6.jpg";
import img5 from "../assets/image/image7.jpg";
import img6 from "../assets/image/image6.jpg";

/**
 * ImageMarquee – Infinite image scroller (LTR / RTL)
 */
export function ImageMarquee({
  images,
  height =  "10rem",
  
  gap = "1rem",
  speed = 45,
  direction = "ltr",
  pauseOnHover = true,
}) {
  const duration = `${speed}s`;
  const dirClass = direction === "ltr" ? "ltr" : "rtl";
  
const Strip = () => (
  <div className="flex items-center shrink-0" style={{ gap }}>
    {[...images, ...images].map((img, i) => (
      <figure key={`${img.src}-${i}`}
        className="flex items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/10 bg-white overflow-hidden"
        style={{ height, width: `calc(${height} * 1.2)` }}>
        <img
          src={img.src}
          alt={img.alt || ""}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </figure>
    ))}
  </div>
);

  return (
    <section
      className={`group relative w-full select-none ${
        pauseOnHover
          ? "hover:[&_.marquee-track]:[animation-play-state:paused]"
          : ""
      }`}
      aria-label="Toastmasters gallery scroller"
    >
      {/* Fade mask for nicer edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      />

      <div className="overflow-hidden w-full py-6">
        <div
          className={`marquee-track ${dirClass} flex w-max items-center`}
          style={{
            gap,
            ["--duration"]: duration,
          }}
        >
          <Strip />
          <Strip />
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        .marquee-track {
          animation-duration: var(--duration, 45s);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          will-change: transform;
          transform: translateX(0);
        }
        .marquee-track.ltr {
          animation-name: marquee-ltr;
        }
        .marquee-track.rtl {
          animation-name: marquee-rtl;
        }
        @keyframes marquee-ltr {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused; }
        }
      `}</style>
    </section>
  );
}

/**
 * Demo component with 6 images
 */
export default function ToastmastersImageMarqueeDemo() {
  const images = [
    { src: img1, alt: "Toastmasters Event 1" },
    { src: img2, alt: "Toastmasters Event 2" },
    { src: img3, alt: "Toastmasters Event 3" },
    { src: img4, alt: "Toastmasters Event 4" },
    { src: img5, alt: "Toastmasters Event 5" },
    { src: img6, alt: "Toastmasters Event 6" },
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
          Trusted by Speakers & Leaders
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Highlights from our recent Toastmasters sessions, contests, and workshops.
        </p>

        <ImageMarquee
          images={images}
          height="13rem"
          gap="1rem"
          speed={45}
          direction="ltr"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
