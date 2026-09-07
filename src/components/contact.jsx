import { react } from 'react'
import '../styles/contact.css'
import Footer from "./footer";
function contact() {


    return (
        <>
            <section className="containe">
                <div className="containe-inner">
                    <div className="response">
                        <p><span className="circle"></span> WE RESPONED WITHIN 2 HOURS</p>
                    </div>
                    <div className="heading">
                        <h2 >LET'S TALK <br />
                            <span>TRANSFORMATION.</span>
                        </h2>
                        <p>Whether you're ready to join, have querstions about programs, or want <br /> to book a facility tour - our team is here.</p>
                    </div>
                </div>
            </section>

            {/* <section >
                <div className="containe flex flex-wrap">
                    <div className="containe-inner w-full md:w-1/2 max-lg:lg:w-1/2">

                    </div>

                    <div className="containe-inner w-full md:w-1/2 max-lg:w-1/2 flex flex-wrap">
                        <div>

                        </div>

                        <div>

                        </div>
                    </div>
                </div>

            </section> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left */}
                <div className='containe-inner w-full'>

                    <div className="forms">
                        <p className='pt'>// SEND A MESSAGE</p>
                        <h2>GET IN TOUCH</h2>

                        <div>
                            <form action="">
                                <div >
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="full-name" className="block text-sm/6 font-medium text-white">FULL NAME *</label>
                                            <div className="mt-2">
                                                <input id="full-name" type="text" name="full-name" autoComplete="given-name" className="labin block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required placeholder='Enter Your Name' />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm/6 font-medium text-white">EMAIL *</label>
                                            <div className="mt-2">
                                                <input id="last-name" type="email" name="last-name" className="labin block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required placeholder='email@gmail.com' />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4">
                                            <label htmlFor="mobile-number" className="block text-sm/6 font-medium text-white">MOBILE</label>
                                            <div className="mt-2">
                                                <input id="mobile-number" type="text" name="mobile-number" autoComplete="mobile-number" className="labin block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required placeholder='Enter Your Mobile NUMBER' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="information" className="block text-sm/6 font-medium text-white-900">I'M INTERESTED IN *</label>
                                        <div className="mt-2 grid grid-cols-1">
                                            <select id="information" name="information" autoComplete="information" className="inform col-start-1 row-start-1 w-100% appearance-none rounded-md py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 required">
                                                <option className="option">Select an Option...</option>
                                                <option>General Inquiry</option>
                                                <option>Membership Information</option>
                                                <option>Personal Training</option>
                                                <option>Nutrition Coaching</option>
                                                <option>Corporate Membership</option>
                                                <option>Facility Tour</option>
                                                <option>Recovery Services</option>
                                            </select>
                                            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        {/* <label htmlFor="">MESSAGE *</label>
                                        <textarea id="message" name="message" rows="3" class="mess block w-full rounded-md px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6" placeholder="Tell us about your goals, questions, or anything else..."></textarea> */}
                                        <label htmlFor="Message" className="block text-sm/6 font-medium text-white">MOBILE</label>
                                        <div className="mt-2">
                                            <input id="message" type="text" name="message" className="mess block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required placeholder="Tell us about your goals, questions, or anything else..." />
                                        </div>
                                    </div>

                                    <div className='btn sm:col-span-4'>
                                        <button type="submit" className="btn w-full px-3 py-1.5 text-sm/6 hover:focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500">
                                            SEND MESSAGE <span className="arrow">→</span> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                {/* Right */}
                <div className="flex flex-col gap-6 containe-inner w-full ">
                    <div>

                        <div className="forms">

                            <div className="bg-[#111111] text-white px-6 py-10">

                                {/* Heading */}
                                <p className="font-bold pt">// FIND US</p>
                                <h2 className="text-2xl font-bold mb-8">
                                    CONTACT DETAILS
                                </h2>

                                <div className="flex flex-col gap-8">

                                    {/* LOCATION */}
                                    <div className="flex items-start gap-5">

                                        {/* Icon */}
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-gray-800 flex items-center justify-center text-lime-400">
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                                                <circle cx="12" cy="10" r="2.5" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <p className="text-xs tracking-[3px] text-gray-500 mb-1">
                                                LOCATION
                                            </p>

                                            <p className="text-lg ">
                                                A-777 shayam vihar,
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                New Delhi, India 110059
                                            </p>
                                        </div>

                                    </div>


                                    {/* PHONE */}
                                    <div className="flex items-start gap-5">

                                        {/* Icon */}
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-gray-800 flex items-center justify-center text-lime-400">
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91 a16 16 0 0 0 6 6l1.27-1.27 a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 A2 2 0 0 1 22 16.92z"
                                                />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <p className="text-xs tracking-[3px] text-gray-500 mb-1">
                                                PHONE
                                            </p>

                                            <p className="text-lg font-bold">
                                                +1 (212) 555-0198
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Mon–Fri, 6am–10pm EST
                                            </p>
                                        </div>

                                    </div>


                                    {/* EMAIL */}
                                    <div className="flex items-start gap-5">

                                        {/* Icon */}
                                        <div className="w-12 h-12 shrink-0 rounded-full border border-gray-800 flex items-center justify-center text-lime-400">
                                            <svg
                                                width="21"
                                                height="21"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect
                                                    x="3"
                                                    y="5"
                                                    width="18"
                                                    height="14"
                                                    rx="2"
                                                />
                                                <polyline points="3,7 12,13 21,7" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <p className="text-xs tracking-[3px] text-gray-500 mb-1">
                                                EMAIL
                                            </p>

                                            <p className="text-sm font-bold ">
                                                hello@ironpulsefitness.com
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Response within 2 hours
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div>

                        <div className='hour mb-5'>
                            <div className='rounded-2xl  w-80% bodyy '>
                                <p className='hours-time tracking-[3px] mb-4 '>// Hours</p>
                                <h3 className='font-bold text-3xl mt-3~~'>GYM HOURS</h3>
                                <div className=''>
                                    <p className='mt-3 mb-3 days'>Monday - Friday    <span className='spanns'> 5:30am -10:30pm </span></p>
                                    <hr />
                                    <p className='mt-3 mb-3 days'>Saturday     <span className='spanns'>7:00am -9:00pm</span> </p>
                                    <hr />
                                    <p className='mt-3 mb-3 days'>Sunday     <span className='spanns'>7:30am -8:30pm</span> </p>
                                    <hr />
                                    <p className='mt-3 mb-3 days'>Pro & Elite (24/7)             <span className='spanns'>Keycard access always</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default contact