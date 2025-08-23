import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/about.jpg"; //  Replace with your logo path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Events", "Join"];

  return (
    
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center h-20">
        {/* Logo + Club Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-2xl font-bold text-white">Toastmaster DYPCOE</div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              className="cursor-pointer text-red-400 transition"
            >
              {item}
            </Link>
          ))}
          
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md p-4 space-y-4 text-white text-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block text-lg"
            >
              {item}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="mt-3 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600"
          >
           
          </button>
        </div>
      )}
    </header>
  );
}



// import { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import logo from "../assets/about.jpg";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Define scroll vs route links
//   const navItems = [
//     { name: "Home", type: "scroll" },
//     { name: "About", type: "scroll" },
//     { name: "Events", type: "route", path: "/events" },
//     { name: "Join", type: "scroll" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center h-20">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img src={logo} alt="Logo" className="h-10 w-10 rounded-full object-cover" />
//           <div className="text-2xl font-bold text-white">Toastmasters</div>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-8 items-center">
//           {navItems.map(({ name, type, path }) =>
//             type === "scroll" ? (
//               <ScrollLink
//                 key={name}
//                 to={name.toLowerCase()}
//                 smooth
//                 duration={500}
//                 className="cursor-pointer text-red-400 transition"
//               >
//                 {name}
//               </ScrollLink>
//             ) : (
//               <RouterLink
//                 key={name}
//                 to={path}
//                 className="text-red-400 transition hover:text-red-500"
//               >
//                 {name}
//               </RouterLink>
//             )
//           )}

//           {/* Admin Login */}
//           <button
//             onClick={() => navigate("/login")}
//             className="ml-6 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-sm transition"
//           >
//             Admin Login
//           </button>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <HiX /> : <HiMenuAlt3 />}
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/80 backdrop-blur-md p-4 space-y-4 text-white text-center">
//           {navItems.map(({ name, type, path }) =>
//             type === "scroll" ? (
//               <ScrollLink
//                 key={name}
//                 to={name.toLowerCase()}
//                 smooth
//                 duration={500}
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-lg"
//               >
//                 {name}
//               </ScrollLink>
//             ) : (
//               <RouterLink
//                 key={name}
//                 to={path}
//                 onClick={() => setMenuOpen(false)}
//                 className="block text-lg text-red-400 hover:text-red-300"
//               >
//                 {name}
//               </RouterLink>
//             )
//           )}

//           {/* Mobile Admin Login */}
//           <button
//             onClick={() => {
//               setMenuOpen(false);
//               navigate("/login");
//             }}
//             className="mt-3 px-4 py-2 bg-red-500 rounded-full hover:bg-red-600"
//           >
//             Admin Login
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }
