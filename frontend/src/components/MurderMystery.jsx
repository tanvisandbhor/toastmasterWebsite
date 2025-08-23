import React from "react";
import { Link } from "react-router-dom";
import murdercover from "../assets/murder-cover.jpg";

export default function MurderMystery() {
  return (
    <section className="py-24 bg-[#0a0a23] text-white px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-4">
        Murder Mystery: Can You Crack the Case?
      </h2>
      <p className="text-center italic text-red-400 mb-10">
        “Everyone had a motive. No one had an alibi.”
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <img
          src={murdercover}
          alt="Murder Mystery"
          className="w-80 h-80 object-cover rounded-xl shadow-lg"
        />
        <div className="w-full md:w-1/2 space-y-5 text-lg">
          <p>
            Our most hyped event — the Murder Mystery — isn't just a game. It's an immersive
            soft skills challenge where participants take on roles, uncover secrets, and
            solve a dramatic crime.
          </p>
          <p>
            It's where storytelling meets deduction, and confidence meets creativity.
            Everyone walks away transformed.
          </p>
          <p className="text-red-300 font-semibold">Would you survive... or get caught?
            <Link
            to="/gallery"
            className="text-red-400 underline hover:text-red-300 transition"
          >
            → Here are glimpse of the event
          </Link>
          </p>
          
        </div>
      </div>

      
    </section>
  );
}
