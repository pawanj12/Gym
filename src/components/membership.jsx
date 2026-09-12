import { useState } from "react";
import '../styles/membership.css'
import Navigation from "./navbar/Navbar"
import Footer from "./footer";
import MembershipFAQ from "./MembershipFAQ";
import PricingSection from "./PricingSection";

export default function Membership() {
    return (
        <>
            {/* Navigation  */}

            <section>
                <Navigation />
            </section>

            {/* Hero Section  */}

            <section>
                <div className="container ">
                    <div className="hero ">
                        <div className="badge">
                            <span className="green-dot"></span>
                            7-DAY FREE TRIAL, NO CREDIT CARD
                        </div>
                        <h2 className="mb-5 desktop-tablet">
                            INVEST IN <br />
                            <span> YOURSELF.</span>
                        </h2>

                        <h2 className="mobile">
                            INVEST <br />
                            IN <br />
                            <span> YOURSELF.</span></h2>
                        <p>Three plans desingned for three different goals. Every one includes <br /> world-class coaching, premium facilities, and a money-back <br /> guarntee if you don't see results. </p>
                        <div className=" btns">
                            <button type="btn"><a href="" className="view-btn">VIEW PLANS</a></button>
                            <button type="btn"><a href="" className="talk-btn">TALKS TO A COACH</a></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second section Package  */}

            <section>
                <div className="container">
                    <div className="pricesec">
                        <PricingSection />
                    </div>
                </div>
            </section>


            {/* Third section(Plan ComParison) */}
            <section>
                <div className="container plan-comp">
                    <p>// FULL BREAKDOWN </p>
                    <h3> PLAN COMPARISON</h3>
                    <div>
                        <div class="table-container">
                            <table class="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Basic</th>
                                        <th>Pro</th>
                                        <th>Elite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature">Gym access hours</td>
                                        <td data-label="Basic">6am-10pm</td>
                                        <td data-label="Pro">24/7</td>
                                        <td data-label="Elite">24/7</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Group classes</td>
                                        <td data-label="Basic">2/week</td>
                                        <td data-label="Pro">Unlimited</td>
                                        <td data-label="Elite">Unlimited</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Personal training</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">4/month</td>
                                        <td data-label="Elite">Unlimited</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Nutrition coaching</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">Included</td>
                                        <td data-label="Elite">Full program</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Recovery suite</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">2x/week</td>
                                        <td data-label="Elite">Unlimited</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Guest passes</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">2/month</td>
                                        <td data-label="Elite">Unlimited</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Body composition scans</td>
                                        <td data-label="Basic">Monthly</td>
                                        <td data-label="Pro">Weekly</td>
                                        <td data-label="Elite">Daily</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">App access</td>
                                        <td data-label="Basic">Standard</td>
                                        <td data-label="Pro">Premium</td>
                                        <td data-label="Elite">Premium</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Concierge scheduling</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">—</td>
                                        <td data-label="Elite">Included</td>
                                    </tr>

                                    <tr>
                                        <td data-label="Feature">Quarterly lab testing</td>
                                        <td data-label="Basic">—</td>
                                        <td data-label="Pro">—</td>
                                        <td data-label="Elite">Quarterly</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION FAQ  */}
            <section class="faq-section">
                

                <MembershipFAQ />
        
            </section>

            <section className="container">
                <Footer />
            </section>

        </>
    )
}