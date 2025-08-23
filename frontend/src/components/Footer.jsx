// src/components/Footer.jsx
import { Link } from "react-scroll";
import { FaInstagram, FaLinkedin, FaYoutube ,FaWhatsapp} from "react-icons/fa";
import logo from "../assets/about.jpg"; // your club logo

export default function Footer() {
  const navItems = ["Home", "About", "Events", "Join"];

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo + Club Name */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Toastmasters" className="w-12 h-12 rounded-full mb-3" />
          <h2 className="text-xl font-bold text-white">Toastmaster DYPCOE</h2>
          <p className="text-sm text-gray-400 mt-2">We Rise By Lifting Others.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth
                  duration={500}
                  className="cursor-pointer hover:text-red-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4 text-xl mb-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/company/toastmaster-dypcoe" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a href="https://chat.whatsapp.com/GS6tcEl4mYYHscuE0J5c2o?mode=ac_t
                      " target="_blank" rel="noreferrer">
              <FaWhatsapp className="hover:text-red-500" />
            </a>
          </div>
          <p className="text-sm text-gray-400">toastmasterdypcoe@gmail.com</p>
         
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Toastmasters Club. All rights reserved.
      </div>
    </footer>
  );
}
