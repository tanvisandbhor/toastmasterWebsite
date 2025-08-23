import { FaLinkedin } from "react-icons/fa";
import faculty from "../assets/faculty.jpg";

export default function FacultySection() {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-[#f9fafb] via-[#f1f5f9] to-[#e2e8f0]">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Meet the Faculty Coordinator
      </h2>

      {/* Flex Layout */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        
        {/* Left: Faculty Card */}
        <div className="w-full md:w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden group transition-all hover:shadow-xl">
          <img
            src={faculty}
            alt="Prof. Swati Jadhav"
            className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Prof. Swati Jadhav</h3>
            <p className="text-red-600 text-sm font-medium mb-1">Faculty Coordinator</p>
            <a
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium text-sm mt-2"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Belief Text with soft background */}
        <div className="w-full md:flex-1 bg-red-50 rounded-xl shadow-sm p-6 text-[15px] leading-relaxed text-gray-800 border-l-4 border-red-400">
          <p className="italic">
            As the Faculty Coordinator, I firmly believe that soft skills are the foundation of a student’s personal and professional success. 
            This club isn’t just about speaking well — it’s about building confidence, clarity of thought, and the courage to lead. 
            Through a culture of encouragement, collaboration, and consistency, we strive to shape students into expressive, thoughtful, and future-ready individuals.
          </p>
        </div>
      </div>
    </section>
  );
}
