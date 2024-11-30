'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {/* Hero Heading */}
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} text-center`}
        >
          <span className="text-[#69BB9F]">Xwiftrx</span>{' '}
          <span className="text-[#ED6C60]">AI</span>
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          {/* Placeholder for additional content */}
        </motion.div>
      </div>

      {/* Hero Image Section */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        {/* Image for Small Screens */}
        <img
          src="/xwai.png"
          alt="Hero Cover"
          className="w-full sm:hidden h-[350px] object-cover z-10 relative"
        />
        {/* Image for Medium and Larger Screens */}
        <img
          src="/xwai.png"
          alt="Hero Cover"
          className="hidden ml-96 sm:block sm:h-[500px] object-cover z-10 relative"
        />

        {/* Stamp Section */}
        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
          <a
            href="https://meme.cooking/meme/728"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Xwiftrx Meme"
          >
            <img
              src="/stamp.png"
              alt="Explore Stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
