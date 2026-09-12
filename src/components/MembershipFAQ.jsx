import { useState, useEffect } from "react";
import "../styles/membershipFAQ.css";

const faqData = [
  {
    question: "IS THERE REALLY NO CREDIT CARD REQUIRED FOR THE FREE TRIAL?",
    answer:
      "Yes. You can start your free trial without entering any credit card details. Enjoy full access before deciding to become a member.",
  },
  {
    question: "CAN I UPGRADE OR DOWNGRADE MY PLAN AT ANY TIME?",
    answer:
      "Absolutely. You can change your membership plan whenever you want from your account settings with no hidden charges.",
  },
  {
    question: "WHAT IS YOUR REFUND POLICY?",
    answer:
      "Refund requests are reviewed according to our membership terms. If you're eligible, the refund will be processed as quickly as possible.",
  },
  {
    question: "DO YOU OFFER CORPORATE OR FAMILY MEMBERSHIPS?",
    answer:
      "Yes. We provide discounted plans for families and corporate teams. Contact us for custom pricing.",
  },
  {
    question: "ARE THERE ANY JOINING OR INITIATION FEES?",
    answer:
      "No hidden initiation fees. You only pay for the membership plan you choose unless a promotional offer states otherwise.",
  },
];

function FAQItem({ item, isOpen, onClick }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setText("");
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      i++;
      setText(item.answer.slice(0, i));
      if (i >= item.answer.length) clearInterval(timer);
    }, 15);

    return () => clearInterval(timer);
  }, [isOpen, item.answer]);

  return (
    <div className={`faq-card ${isOpen ? "active" : ""}`}>
      <button className="faq-question" onClick={onClick} type="button">
        <span>{item.question}</span>

        <div className="faq-icon">
          <span>{isOpen ? "×" : "+"}</span>
        </div>
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <span className="faq-tag">// QUESTIONS</span>

        <h2 className="faq-title">MEMBERSHIP FAQ</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}


