"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation(); // Controls animation states
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Trigger reveal animation
    } else {
      controls.start("hidden"); // Trigger hide animation
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Revealed state
  };

  return (
    <section id="about" className="w-full rounded-xl py-12 text-white">
      <motion.div
        ref={ref}
        className="w-full text-center"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">About XWIFTRX AI</h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8">
          XWIFTRX AI is your ultimate Web3 assistant, designed to make blockchain interactions effortless.
          Protect yourself from scams, simplify NEAR transactions, and streamline token bridging—all
          through a user-friendly overlay.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed">
          Manage your Web3 activities securely and efficiently without switching apps. With XWIFTRX AI,
          you can embrace seamless blockchain interactions and take control of your digital assets
          like never before.
        </p>
      </motion.div>
    </section>
  );
}
