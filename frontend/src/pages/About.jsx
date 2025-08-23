// src/pages/About.jsx
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg"; // Replace with your own image

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <img
            src={aboutImg}
            alt="About Toastmasters"
            className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 space-y-5"
        >
          <h2 className="text-4xl font-bold text-red-600">About Us</h2>
          <p className="text-lg">
            Toastmasters is a global platform for building communication, leadership, and public speaking skills in a supportive environment.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>Weekly meetings with speeches, evaluations, and table topics</li>
            <li>Personal mentorship and continuous feedback</li>
            <li>Leadership roles and stage confidence</li>
            <li>Friendly, supportive, and growth-driven culture</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
