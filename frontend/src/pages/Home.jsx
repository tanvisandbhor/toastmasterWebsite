// src/pages/Home.jsx                           
import { motion } from "framer-motion";
import About from "./About";
import JoinUs from "./JoinUs";
import Team from "./Team";
import MurderMystery from "../components/MurderMystery";
import SkillCard from "../components/SkillCard";
import { skillPages as skills } from "../data/skillPages";
import EventLocation from "../components/EventLocation";
import EventMarquee from "../components/EventMarquee";

// Inside your <main> or Home return:




export default function Home() {
  return (
    <main id="home">
      {/* ✅ Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-[#002654] to-[#00172e] text-white flex items-center justify-center px-4">
        <div className="max-w-4xl text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Lead. Speak. Inspire.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-gray-300"
          >
            Your journey of transformation begins at Toastmaster DYPCOE. Build confidence,
            leadership & public speaking skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-6"
          >
            <a
              href="#join"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
            >
              Join Us
            </a>
          </motion.div>
        </div>
      </section>

      <JoinUs />

      {/* ✅ Skills Section */}
      <div className="px-6 md:px-20 py-12 bg-[#f9fafb] min-h-screen">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Explore Some Key Soft Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([id, skill]) => (
            <SkillCard key={id} skill={{ ...skill, id }} />
          ))}
        </div>
      </div>

        <MurderMystery/> 

       <EventLocation />

      <Team />
      
      <About />
      <EventMarquee />
    </main>
  );
}
