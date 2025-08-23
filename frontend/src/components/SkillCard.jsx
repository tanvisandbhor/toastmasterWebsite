// src/components/SkillCard.jsx

import { Link } from "react-router-dom";

export default function SkillCard({ skill }) {
  return (
    // ✅ Navigates to the correct section on the Skills page
    <Link to={`/skills#${skill.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl cursor-pointer transition-all w-full max-w-sm mx-auto">
        <img
          src={skill.image}
          alt={skill.title}
          className="h-40 w-full object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold mt-3">{skill.title}</h3>
        <p className="text-sm text-gray-600">{skill.teaser}</p>
      </div>
    </Link>
  );
}
