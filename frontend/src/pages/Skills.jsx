// src/pages/Skills.jsx


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { skillPages } from "../data/skillPages";

export default function Skills() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="px-6 md:px-20 py-12 bg-gradient-to-br [#e6f0fa] to-[#f9fafb] text-gray-800 space-y-16">
      {Object.entries(skillPages).map(([key, skill]) => (
        <section key={key} id={key} >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center pt-24 ">{skill.title}</h1>
          <p className="italic text-center text-red-600 text-lg mb-8">"{skill.quote}"</p>

          <div className="flex flex-col md:flex-row items-start gap-10">
            <img
              src={skill.image}
              alt={skill.title}
              className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-md"
            />
            <div className="w-full md:w-1/2 text-lg space-y-5">
              {skill.story.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-3">Tips</h2>
            <ul className="list-disc ml-6 space-y-2">
              {skill.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Resources</h2>
            <ul className="list-disc ml-6 space-y-2">
              {skill.resources.map((res, index) => (
                <li key={index}>
                  <a href={res.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {res.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
