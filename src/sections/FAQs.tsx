"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and wire transfers.",
  },
  {
    question: "How does your customer support work?",
    answer:
      "We offer comprehensive customer support through email, live chat, and a detailed knowledge base. Our support team is dedicated to helping you get the most out of our product.",
  },
  {
    question: "Can I try your product before I purchase?",
    answer:
      "Yes, we offer a free trial period so you can test our product and see if it meets your needs.",
  },
  {
    question: "Is my data secure?",
    answer:
      " Absolutely. We prioritize data security and employ industry-leading practices to protect your information.Our platform is designed with robust security measures to ensure the confidentiality and integrity of your data.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold ">{question}</span>
        {!isOpen ? <FaPlus /> : <FaMinus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ marginTop: 0, opacity: 0, height: 0 }}
            animate={{ marginTop: "16px", opacity: 1, height: "auto" }}
            exit={{ marginTop: 0, opacity: 0, height: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <section className="bg-white text-white bg-gradient-to-b from-[#001E80] to-black py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="sm:max-w-[648px] text-center mx-auto text-5xl sm:text-6xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
