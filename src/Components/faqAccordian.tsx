import React, { useState } from 'react';

const faqItems: string[] = [
  "What is TSOSM?",
  "What makes TSOSM different from other programs?",
  "Is TSOSM therapy or coaching?",
  "What results can I expect?",
  "Is there support included?",
  "What does the phrase 'Be. Do. Have.' mean in TSOSM?",
  "Is TSOSM spiritual or religious?",
  "How does international access work?",
  "How do I join TSOSM?",
  "Is my information protected?"
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {faqItems.map((item, index) => (
        <div key={index} className={`accordion-item ${openIndex === index ? "active" : ""}`}>
          <button className="accordion-header" onClick={() => toggle(index)}>
            <span>{item}</span>
            <span className="accordion-icon">{openIndex === index ? '−' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="accordion-body">
              <p>The Science of Self-Mastery (TSOSM) is a life realignment system offered exclusively through the Sovero Private Membership Association. It helps individuals reconnect with their true identity, reclaim authorship of their time and decisions, and permanently align behavior with purpose. This is not coaching or self-help—it is structured identity evolution.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
