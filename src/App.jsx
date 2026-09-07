import { useState } from 'react'
import './App.css'
import Footer from "./components/footer";
import Contact from "./components/contact";
import Navi from "./components/navigation"
import Membership from './components/membership';

// function App() {

export default function App() {
  return (
    <>
      {/* Navigation */}
      {/* First Section */}
      <section>
        < Navi />
      </section>

      {/* HERO SECTION */}
      {/* Second Section */}
      <section className="hero">
        <div className="container">
          <div className="badge">
            <span className="green-dot"></span>
            NOW ACCEPTING NEW MEMBERS
          </div>

          <div className="hero-content">
            <div className="left">
              <h1>
                TRANSFORM <br />
                YOUR BODY. <br />
                <span>UNLOCK</span> <br />
                <span>YOUR</span> <br />
                POTENTIAL.
              </h1>

              <p>
                Experience elite training in a luxury environment. Certified
                coaches and cutting-edge equipment.
              </p>

              <button className="">JOIN NOW →</button>
            </div>

            <div className="right">
              <div className="card workout">
                <p>WORKOUT</p>
                <h3>85%</h3>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>

              <div className="card heart">
                <p>HEART RATE</p>
                <h3>142 BPM</h3>
                <div className="bars">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              </div>

              <div className="card calories">
                <p>CALORIES</p>
                <h3>847</h3>
                <div className="progress">
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="bg-text"> GYM PLUS</h2>

        </div>
      </section>

      {/* Third Section  */}
      <section>
        <div className="container">
          <hr />
          <div className="info mt-6 mb-6">
            <p><span>15K+</span> <br />
              MEMBER
            </p>
            <p><span>120+ </span><br />
              TRAINERS
            </p>
            <p><span>98%</span> <br />
              SUCCESS RATE
            </p>
          </div>
          <hr />
        </div>
      </section>

      {/* Fourth Section  */}
      <section>
        <div className="container">
          <div className="suggest">
            <p>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* <!-- Center Person --> */}
                  <circle cx="32" cy="24" r="5" />
                  <path d="M24 39C24 34.5 27.5 31 32 31C36.5 31 40 34.5 40 39" />

                  {/* <!-- Left Person --> */}
                  <circle cx="22" cy="28" r="3.5" />
                  <path d="M16 39C16 35.8 18.5 33.5 22 33.5" />

                  {/* <!-- Right Person --> */}
                  <circle cx="42" cy="28" r="3.5" />
                  <path d="M48 39C48 35.8 45.5 33.5 42 33.5" />
                </g>
              </svg>
              <span className="num">15,000+ </span><br />
              Active Members<br />
              <span className="certi">Across all locations</span>
            </p>

            <p>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* <!-- Graduation Cap --> */}
                  <path d="M12 26L32 18L52 26L32 34L12 26Z" />
                  <path d="M18 29V39C18 41.5 24 45 32 45C40 45 46 41.5 46 39V29" />
                  <path d="M52 26V36" />
                  <path d="M52 36L49.5 39" />
                </g>
              </svg>
              <span className="num">120+</span> <br />
              Expert Coaches <br />
              <span className="certi">Certified & Specialized </span>
            </p>

            <p>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* <!-- Calendar Body --> */}
                  <rect x="18" y="20" width="28" height="24" rx="4" />

                  {/* <!-- Top Rings --> */}
                  <path d="M24 16V22" />
                  <path d="M40 16V22" />

                  {/* <!-- Top Divider --> */}
                  <path d="M18 28H46" />
                </g>
              </svg>
              <span className="num">350+</span> <br />
              Daily Classes <br />
              <span className="certi">Every single day</span>
            </p>

            <p>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* <!-- Trophy Cup --> */}
                  <path d="M24 18H40V26C40 31 36 35 32 35C28 35 24 31 24 26V18Z" />

                  {/* <!-- Handles --> */}
                  <path d="M24 20H20C20 24 22 27 26 27" />
                  <path d="M40 20H44C44 24 42 27 38 27" />

                  {/* <!-- Stem --> */}
                  <path d="M32 35V42" />

                  {/* <!-- Base --> */}
                  <path d="M26 42H38" />
                  <path d="M24 46H40" />
                  <path d="M22 50H42" />
                </g>
              </svg>
              <span className="num">48+</span> <br />
              Awards Won <br />
              <span className="">Industry recognition</span>
            </p>
          </div>
        </div>
      </section>

      {/* Fifth Section  */}
      <section>

        <hr />
        <div className="container ">
          <div className="training mt-8">
            <p className="off">// WHAT WE OFFER</p>
            <h2>
              ELITE TRANING  <br />
              PROGRAMS</h2>
            <div className="lists mt-6">

              <div className="offers">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34 14L20 34H30L26 50L44 27H34L38 14H34Z"
                    stroke="#C6FF00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3>STRENGTH TRAINING</h3>
                <p className="mt-4">Build raw power and muscle with perioszed programming designed by world-class coaches</p>
                <div className="mt-8">
                  <a href="">Learn More →</a>
                </div>
              </div>

              <div className="offers">
                <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* <!-- Top Arrow --> */}
                    <path d="M42 20H50V12" />
                    <path d="M50 20C46.5 15.5 40.8 13 34.5 13C26.5 13 20 18.5 18.5 26" />

                    {/* <!-- Bottom Arrow --> */}
                    <path d="M22 44H14V52" />
                    <path d="M14 44C17.5 48.5 23.2 51 29.5 51C37.5 51 44 45.5 45.5 38" />
                  </g>
                </svg>
                <h3>FUNCTIONAL FITNESS</h3>
                <p className="mt-4">Move better, live stronger.Real-world movement that carry into everyday life</p>
                <div className="mt-8">
                  <a href="">Learn More →</a>
                </div>
              </div>

              <div className="offers">
                <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* <!-- Outer Flame --> */}
                    <path d="M32 16C28 21 29 25 24 28C20 30.5 18 35 18 39C18 47 24 52 32 52C40 52 46 47 46 39C46 30 40 24 35 20C34 18.5 33 17 32 16Z" />

                    {/* <!-- Inner Flame --> */}
                    <path d="M32 27C30 30 31 33 29 35C27.5 36.5 27 38.5 27 40C27 43 29.5 46 32 46C35.5 46 38 43 38 39.5C38 35.5 35.5 31.5 32 27Z" />
                  </g>
                </svg>
                <h3>HIIT</h3>
                <p className="mt-4">Maximum calories burn in minimum time. interval training that keep you metabolism elevated for 24 hours.</p>
                <div className="mt-8">
                  <a href="">Learn More →</a>
                </div>
              </div>

              <div className="offers">
                <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* <!-- Thumb --> */}
                    <path d="M24 31L20 35C18 37 18 41 20 43L25 48C27 50 30 51 33 51H36C40 51 43 48 43 44V29" />

                    {/* <!-- Fingers --> */}
                    <path d="M28 31V21C28 19.5 29.2 18 31 18C32.8 18 34 19.5 34 21V31" />
                    <path d="M34 31V19C34 17.5 35.2 16 37 16C38.8 16 40 17.5 40 19V31" />
                    <path d="M40 31V22C40 20.5 41.2 19 43 19C44.8 19 46 20.5 46 22V36" />
                    <path d="M31 31H43" />
                  </g>
                </svg>
                <h3>BOXING</h3>
                <p className="mt-4">Develop power, agility, and mental toughness in our pro-grade boxing studio.</p>
                <div className="mt-8">
                  <a href="">Learn More →</a>
                </div>
              </div>

              <div className="offers">
                <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="#C6FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">

                    {/* <!-- Large Sparkle --> */}
                    <path d="M28 20L30 26L36 28L30 30L28 36L26 30L20 28L26 26L28 20Z" />

                    {/* <!-- Small Sparkle (Top Right) --> */}
                    <path d="M42 16L43 19L46 20L43 21L42 24L41 21L38 20L41 19L42 16Z" />

                    {/* <!-- Small Sparkle (Bottom Right) --> */}
                    <path d="M38 34L39 37L42 38L39 39L38 42L37 39L34 38L37 37L38 34Z" />

                  </g>
                </svg>
                <h3>YOGA</h3>
                <p className="mt-4">Restore balance and flexibility. Premium yoga classes with certified instructors in a serene studio.</p>
                <div className="mt-8">
                  <a href="">Learn More →</a>
                </div>
              </div>

              <div className="offers">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200" fill="none">

                  {/* <!-- Heart outline with #c6ff00 --> */}
                  <path d="M100 150 
                    L60 110 
                    A25 25 0 0 1 100 70 
                    A25 25 0 0 1 140 110 
                    Z"
                    fill="none"
                    stroke="#c6ff00"
                    strokeWidth="6" />
                </svg>

                <h3>RECOVERY</h3>
                <p className="mt-4">Active recovery, mobility work, and cryotherapy. Train arder by recovering smarter|?</p>
                <div className="mt-8">
                  <a href="" >Learn More →</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr />
      {/* Built Different By Design */}
      {/* Sixth Section  */}
      <section>
        <div className="container">
          <div className="power-head">
            <div className="power-d">
              <div className="iron-section">
                {/* <!-- Animated circles --> */}
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>

                {/* <!-- Center lightning bolt --> */}
                <div className="center-icon">⚡</div>

                {/* <!-- Stat boxes --> */}
                <div className="stat-box top-left">STRENGTH +34%</div>
                <div className="stat-box top-right">FAT LOSS -22%</div>
                <div className="stat-box bottom-left">ENDURANCE +41%</div>
                <div className="stat-box bottom-right">RECOVERY 2X</div>
              </div>
            </div>
            <div className="design">
              <p className="classtrain mt-6">//Why Plus Gym</p>
              <h3>BUILT DIFFERENT <br /> BY DESIGN.</h3>
              <div className="ct mt-9">
                <div className="pt">
                  <div className="svg-p mt-5">
                    <div className="d1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                        {/* <!-- Dark circular background --> */}
                        <circle cx="100" cy="100" r="90" fill="#111" />

                        {/* <!-- Graduation cap outline --> */}
                        <path d="M100 60 L40 90 L100 120 L160 90 Z
                          M100 120 L100 150
                          M160 90 L160 120"
                          fill="none"
                          stroke="#c6ff00"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="d2">
                      <p className="pt-head">Certified Trainers</p>
                      <p>Every coach holds NSCA, NASM, or ACE certification 8+ Year average experience.</p>
                    </div>
                  </div>
                </div>

                <div className="pt">
                  <div className="svg-p">
                    <div className="d1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                        {/* <!-- Dark circular background --> */}
                        <circle cx="100" cy="100" r="90" fill="#111" />

                        {/* <!-- Two overlapping documents --> */}
                        <rect x="70" y="60" width="60" height="80" fill="none" stroke="#c6ff00" strokeWidth="6" />
                        <rect x="90" y="80" width="60" height="80" fill="none" stroke="#c6ff00" strokeWidth="6" />
                      </svg>
                    </div>
                    <div className="d2">
                      <p className="pt-head">PERSONALIZED PLANS</p>
                      <p>No cookie-cutter programs. Your plan is built around your goals, schedule, and body type.</p>
                    </div>
                  </div>
                </div>

                <div className="pt">
                  <div className="svg-p">
                    <div className="d1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
                        {/* <!-- Dark circular background --> */}
                        <circle cx="100" cy="100" r="90" fill="#111" />

                        {/* <!-- Signal bars --> */}
                        <rect x="60" y="120" width="20" height="30" fill="#c6ff00" />
                        <rect x="90" y="100" width="20" height="50" fill="#c6ff00" />
                        <rect x="120" y="80" width="20" height="70" fill="#c6ff00" />
                      </svg>
                    </div>
                    <div className="d2">
                      <p className="pt-head">SMART PROGRESS TRACKING</p>
                      <p>Real time metrics, Weekly check ins, and Ai-powered adjustment keep you on track</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seventh section */}

      <section>
        <hr />

        <div className="container">
          <div className="price">
            <div className="prime">
              <p className="pri">// PRICING</p>
              <h4 className="mt-4">CHOOSE YOUR <br /> PROTOCOL</h4>
              <p className="discrip">No hidden fees Cancel anytime. Every plan includes a 7-day <br />free trial.</p>
            </div>
          </div>

          <div className="sub">
            
            <div className="basic">
              <p>Basic</p>
              <h4>$79/mon</h4>
              <p>Perfect for independent self-starters who want access to world-class facilities.</p>
              <ol className="o-lists">
                <li><span>✓</span>Full Gym access(6am-10pm)</li>
                <li><span>✓</span>2 Group classes/weak</li>
                <li><span>✓</span>Locker room & Showers</li>
                <li><span>✓</span>Fitness app access</li>
                <li><span>✓</span>Monthly body scan</li>
              </ol>
              <div className="btn">
                <a href="">Get started</a>
              </div>
            </div>

            <div className="basic">
              <p>Pro</p>
              <h4>$149/mon</h4>
              <p>Our most popular plan. Everything you need to see real, measurable results.</p>
              <ol className="o-lists">
                <li><span>✓</span>Full Gym access(24/7)</li>
                <li><span>✓</span>Unlimited Group classes</li>
                <li><span>✓</span>4 PT sessions/month</li>
                <li><span>✓</span>Nutrition coaching</li>
                <li><span>✓</span>Weekly progress reports</li>
                <li><span>✓</span>Guest pass(2/month)</li>
                <li><span>✓</span>Priority class booking</li>
              </ol>
              <div className="btn">
                <a href="">Get started</a>
              </div>
            </div>

            <div className="basic">
              <p>ELITE</p>
              <h4>$299/mon</h4>
              <p>The complete <b>Pluse</b> experience While-golve service and unlimited everything</p>
              <ol className="o-lists">
                <li><span>✓</span>All Pro features</li>
                <li><span>✓</span>Unlimited PT sessions</li>
                <li><span>✓</span>Personal nutrition plan</li>
                <li><span>✓</span>Recovery Suit access</li>
                <li><span>✓</span>Dedicated locker</li>
                <li><span>✓</span>Quarterly lab testing</li>
                <li><span>✓</span>Concierge scheduling</li>
              </ol>
              <div className="btn">
                <a href="">Get started</a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Eighth section */}
      <section>
        <div className="container">
          <div className="faq">
            <p className="p1">// INFORMATION CENTER</p>
            <h4>FREQUENTLY  <br />
             ASKED QUESTIONS</h4>
          </div>
        </div>
      </section>



      {/* < Contact /> */}

      {/* <Footer   /> */}

    </>
  )

}
