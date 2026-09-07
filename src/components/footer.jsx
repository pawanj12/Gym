import { useState } from 'react'
import '../styles/footer.css'
// import dombal from "../assets/dombal.png";import {
// import {
//   Dumbbell,
//   Facebook,
//   Instagram,
//   Youtube,
//   Phone,
// } from "lucide-react";

// function Foot() {
//   const [active, setActive] = useState(null);

//   const toggleItem = (item) => {
//     setActive(active === item ? null : item);
//   };

//   return (
//     <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50">

//       <div className="flex flex-col gap-5">

//         {/* LOCATION */}
//         <div className="flex items-center">
//           <button
//             onClick={() => toggleItem("location")}
//             className={`w-12 h-12 rounded-full border border-gray-800
//               flex items-center justify-center
//               transition-all duration-300
//               ${active === "location"
//                 ? "bg-lime-400 text-black"
//                 : "bg-black text-lime-400 hover:bg-gray-900"
//               }`}
//           >
//             <svg
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
//               <circle cx="12" cy="10" r="2.5" />
//             </svg>
//           </button>

//           {active === "location" && (
//             <div className="ml-3 bg-black text-white px-4 py-3 rounded-lg border border-gray-800">
//               <p className="text-sm">123 Gym Street</p>
//               <p className="text-xs text-gray-400">New Delhi, India</p>
//             </div>
//           )}
//         </div>


//         {/* PHONE */}
//         <div className="flex items-center">
//           <button
//             onClick={() => toggleItem("phone")}
//             className={`w-12 h-12 rounded-full border border-gray-800
//               flex items-center justify-center
//               transition-all duration-300
//               ${active === "phone"
//                 ? "bg-lime-400 text-black"
//                 : "bg-black text-lime-400 hover:bg-gray-900"
//               }`}
//           >
//             <svg
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M22 16.92v3a2 2 0 0 1-2.18 2
//                 19.79 19.79 0 0 1-8.63-3.07
//                 19.5 19.5 0 0 1-6-6
//                 19.79 19.79 0 0 1-3.07-8.67
//                 A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
//                 12.84 12.84 0 0 0 .7 2.81
//                 2 2 0 0 1-.45 2.11L8.09 9.91
//                 a16 16 0 0 0 6 6l1.27-1.27
//                 a2 2 0 0 1 2.11-.45
//                 12.84 12.84 0 0 0 2.81.7
//                 A2 2 0 0 1 22 16.92z"
//               />
//             </svg>
//           </button>

//           {active === "phone" && (
//             <div className="ml-3 bg-black text-white px-4 py-3 rounded-lg border border-gray-800">
//               <p className="text-sm">+91 98765 43210</p>
//               <p className="text-xs text-gray-400">Call us</p>
//             </div>
//           )}
//         </div>


//         {/* EMAIL */}
//         <div className="flex items-center">
//           <button
//             onClick={() => toggleItem("email")}
//             className={`w-12 h-12 rounded-full border border-gray-800
//               flex items-center justify-center
//               transition-all duration-300
//               ${active === "email"
//                 ? "bg-lime-400 text-black"
//                 : "bg-black text-lime-400 hover:bg-gray-900"
//               }`}
//           >
//             <svg
//               width="22"
//               height="22"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <rect x="3" y="5" width="18" height="14" rx="2" />
//               <polyline points="3,7 12,13 21,7" />
//             </svg>
//           </button>

//           {active === "email" && (
//             <div className="ml-3 bg-black text-white px-4 py-3 rounded-lg border border-gray-800">
//               <p className="text-sm">hello@plusgym.com</p>
//               <p className="text-xs text-gray-400">Email us</p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// import {
//   Dumbbell,
//   Facebook,
//   Instagram,
//   Youtube,
//   Phone,
// } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-lime-400 text-xl">🏋️</span>
              <h2 className="font-bold uppercase text-lg">
                Iron Pulse Fitness
              </h2>
            </div>

            <p className="text-gray-500 text-sm mt-3 max-w-xs">
              Where strength meets luxury. Transform your body,
              unlock your potential.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-lime-400">Programs</a>
            <a href="#" className="hover:text-lime-400">Membership</a>
            <a href="#" className="hover:text-lime-400">Trainers</a>
            <a href="#" className="hover:text-lime-400">Contact</a>
            <a href="#" className="hover:text-lime-400">Privacy</a>
            <a href="#" className="hover:text-lime-400">Terms</a>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[<a href="">👤</a>,
            <a href="">📷</a>,
            <a href="">▶</a>,
            <a href="">📞</a>].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-lime-400 hover:text-lime-400 cursor-pointer transition"
              >
                {icon}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 mt-8 pt-5 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-gray-500 gap-3">

          <p>© 2024 Iron Pulse Fitness Inc. All Rights Reserved.</p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span>
            <span className="text-lime-400">All Systems Operational</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

// export default Foot;