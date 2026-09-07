import { useState } from "react";

const faqData = [
    {
        q: "HOW DO I GET STARTED AT IRON PULSE?",
        a: "Simply visit our gym, choose your membership plan, and our trainers will help you get started.",
    },
    {
        q: "DO I NEED PRIOR GYM EXPERIENCE?",
        a: "No, beginners are welcome and our trainers will guide you.",
    },
    {
        q: "CAN I FREEZE OR CANCEL MY MEMBERSHIP?",
        a: "Yes, according to our membership policy.",
    },
    {
        q: "WHAT ARE YOUR GYM HOURS?",
        a: "Monday to Sunday: 5:00 AM – 11:00 PM.",
    },
    {
        q: "IS THERE A FREE TRIAL?",
        a: "Yes, we offer a free trial for new members.",
    },
    {
        q: "DO YOU OFFER NUTRITION COACHING?",
        a: "Yes, personalized nutrition coaching is available.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-5xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="Rounded-[24px] border border-white/10 bg-[#0B0B0B] overflow-hidden"
                    >
                        <button
                            onClick={() => setOpen(open === index ? null : index)}
                            className="w-full flex items-center justify-between px-6 py-6"
                        >
                            <span className="text-white font-bold uppercase text-sm md:text-lg text-left">
                                {item.q}
                            </span>

                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                                <svg
                                    className={`w-5 h-5 text-white transition-transform duration-300 ${open === index ? "rotate-45" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${open === index ? "max-h-40 pb-6" : "max-h-0"
                                }`}
                        >
                            <p className="px-6 text-gray-400">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}