import { useState } from "react";
// import dombal from "./assets/dombal.png";
import '../styles/navigation.css'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className=" bg-black text-white">

                {/* ================= NAVBAR ================= */}
                <nav className="w-full bg-black">

                    <div className="max-w-7xl mx-auto px-4">

                        {/* ================= MOBILE NAVBAR ================= */}
                        <div className="grid grid-cols-[40px_1fr_auto] items-center h-20 md:hidden">

                            {/* Hamburger */}
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="flex items-center justify-start"
                                aria-label="Toggle menu"
                            >
                                {menuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                        <line x1="4" y1="18" x2="20" y2="18" />
                                    </svg>
                                )}
                            </button>

                            {/* Logo */}
                            <div className="text-center text-lg sm:text-xl font-bold whitespace-nowrap">
                                PLUS GYM
                            </div>

                            {/* Login + Join */}
                            <div className="flex items-center justify-end gap-1.5">

                                <button className="border border-white rounded-lg px-2.5 py-2 text-xs sm:text-sm whitespace-nowrap">Login</button>

                                <button className="bg-white text-black rounded-lg px-2.5 py-2 text-xs sm:text-sm whitespace-nowrap " >Join In </button>
                            </div>
                        </div>


                        {/* ================= MOBILE MENU ================= */}

                        {menuOpen && (
                            <div className="md:hidden border-t border-gray-700">

                                <div className="flex flex-col py-5">

                                    <a href="#home" onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400"> HOME</a>

                                    <a href="#programs" onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400"> PROGRAMS</a>

                                    <a href="#trainers" onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400"> TRAINERS</a>

                                    <a
                                        href="#membership" onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400" > MEMBERSHIP </a>

                                    <a
                                        href="#nutrition"
                                        onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400" > NUTRITION </a>

                                    <a href="../components/contact.jsx" onClick={() => setMenuOpen(false)} className="py-3 hover:text-gray-400" > CONTACT </a>

                                </div>

                            </div>
                        )}


                        {/* ================= DESKTOP NAVBAR ================= */}

                        <div className="hidden md:flex items-center justify-between h-20">

                            {/* Logo */}
                            <div className="text-2xl lg:text-3xl font-bold whitespace-nowrap">PLUS GYM </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-5 lg:gap-8">

                                <a href="#home" className="hover:text-gray-400 transition">HOME </a>
                                <a href="#programs" className="hover:text-gray-400 transition" > PROGRAMS </a>

                                <a href="#trainers" className="hover:text-gray-400 transition">TRAINERS</a>

                                <a href="#membership" className="hover:text-gray-400 transition"> MEMBERSHIP </a>

                                <a href="#nutrition" className="hover:text-gray-400 transition">NUTRITION</a>

                                <a href="#contact" className="hover:text-gray-400 transition"> CONTACT </a>

                            </div>

                            {/* Desktop Buttons */}
                            <div className="flex items-center gap-2">

                                <button className="border border-white rounded-lg px-4 py-2 hover:bg-white hover:text-black transition ">Login </button>

                                <button className="bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-200 transition">Join In</button>

                            </div>

                        </div>
                    </div>
                </nav>
            </div >
        </>
    )
} 