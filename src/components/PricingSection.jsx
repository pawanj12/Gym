import { useState } from "react";
import "../styles/pricingSection.css";

const plans = {
  monthly: [
    {
      name: "BASIC",
      price: 63,
      billed: "$756/year",
      desc: "Perfect for beginners who want to stay consistent.",
      button: "START FREE TRIAL",
      popular: false,
      features: [
        "Gym access (6am–10pm)",
        "2 group classes/week",
        "Locker room & showers",
        "Fitness app access",
        "Monthly body scan",
      ],
    },
    
    {
      name: "PRO",
      price: 119,
      billed: "$1428/year",
      desc: "Our most popular plan — everything you need to transform.",
      button: "START FREE TRIAL",
      popular: true,
      features: [
        "24/7 gym access",
        "Unlimited group classes",
        "Locker room & showers",
        "Fitness app access",
        "Weekly body scans",
        "4 PT sessions/month",
        "Nutrition coaching",
        "Recovery suite (2x/week)",
      ],
    },
    {
      name: "ELITE",
      price: 239,
      billed: "$2868/year",
      desc: "White-glove service with unlimited premium access.",
      button: "GO ELITE",
      popular: false,
      features: [
        "24/7 gym access",
        "Unlimited classes",
        "Premium locker",
        "Unlimited PT sessions",
        "Full nutrition program",
        "Recovery suite",
        "Guest passes",
      ],
    },
  ],

  annual: [
    {
      name: "BASIC",
      price: 50,
      billed: "$600/year",
      desc: "Perfect for beginners who want to stay consistent.",
      button: "START FREE TRIAL",
      popular: false,
      features: [
        "Gym access (6am–10pm)",
        "2 group classes/week",
        "Locker room & showers",
        "Fitness app access",
        "Monthly body scan",
      ],
    },
    {
      name: "PRO",
      price: 95,
      billed: "$1140/year",
      desc: "Our most popular plan — everything you need to transform.",
      button: "START FREE TRIAL",
      popular: true,
      features: [
        "24/7 gym access",
        "Unlimited group classes",
        "Locker room & showers",
        "Fitness app access",
        "Weekly body scans",
        "4 PT sessions/month",
        "Nutrition coaching",
        "Recovery suite (2x/week)",
      ],
    },
    {
      name: "ELITE",
      price: 191,
      billed: "$2292/year",
      desc: "White-glove service with unlimited premium access.",
      button: "GO ELITE",
      popular: false,
      features: [
        "24/7 gym access",
        "Unlimited classes",
        "Premium locker",
        "Unlimited PT sessions",
        "Full nutrition program",
        "Recovery suite",
        "Guest passes",
      ],
    },
  ],
};

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  const currentPlans = annual ? plans.annual : plans.monthly;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-heading">
          <span className="pricing-tag">// MEMBERSHIP</span>
          <h2>Choose Your Perfect Plan</h2>
          <p>Flexible pricing designed for every fitness journey.</p>
        </div>

        <div className="billing-toggle">
          <span className={!annual ? "active" : ""}>MONTHLY</span>

          <button
            className={`toggle-switch ${annual ? "annual" : ""}`}
            onClick={() => setAnnual(!annual)}
          >
            <div className="toggle-circle"></div>
          </button>

          <span className={annual ? "active" : ""}>ANNUAL</span>

          <div className="save-badge">SAVE 20%</div>
        </div>

        <div className="pricing-grid">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className={`price-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}

              <p className="plan-name">{plan.name}</p>

              <div className="price-row">
                <h2>${plan.price}</h2>
                <span>/mo</span>
              </div>

              <p className="bill-text">Billed {plan.billed}</p>

              <p className="plan-desc">{plan.desc}</p>

              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="plan-btn">{plan.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}