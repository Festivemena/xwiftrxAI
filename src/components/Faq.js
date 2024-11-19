"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is XWIFTRX?",
      answer:
        "XWIFTRX is a fast and innovative memecoin designed to provide fun and financial opportunities while engaging the community with lightning-speed transactions.",
    },
    {
      question: "How can I buy XWIFTRX?",
      answer:
        "You can buy XWIFTRX through our official website or supported crypto exchanges. Make sure to connect your wallet to get started.",
    },
    {
      question: "What makes XWIFTRX unique?",
      answer:
        "Our focus on speed, community engagement, and meme culture sets us apart. We're revolutionizing crypto with an ecosystem backed by bold creativity.",
    },
    {
      question: "Is XWIFTRX safe?",
      answer:
        "Absolutely! We prioritize security with audited smart contracts and transparent development practices.",
    },
  ];

  return (
    <section id="faq" className="w-full bg-gray-100 dark:bg-gray-800 py-10 px-6 rounded-xl sm:px-20">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-gray-800 dark:text-gray-100 text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
          {answer}
        </p>
      )}
    </div>
  );
}
