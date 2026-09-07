import { useState } from "react";
import '../styles/membership.css'
import Navigation from "./navigation";


export default function Membership() {
    return (
        <>
            {/* Navigation  */}

            <section>
                <Navigation />
            </section>

            {/* Hero Section  */}

            <section>
                <div className="container">
                    <div className="hero">
                        <div className="badge">
                            <span className="green-dot"></span>
                            7-DAY FREE TRIAL, NO CREDIT CARD
                        </div>
                        <h2>
                            INVEST IN YOURSELF.
                        </h2>
                        <p>Three plans desingned for three different goals. Every one includes <br /> world-class coaching, premium facilities, and a money-back <br /> guarntee if you don't see results. </p>
                        <div>
                            <button><a href="">VIEW PLANS</a></button>
                            <button><a href="">TALKS TO A COACH</a></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}