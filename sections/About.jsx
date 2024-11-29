'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Xwiftrx AI" textStyles="text-center" />

      <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
>
  <span className="font-extrabold text-white">XWIFTRX AI</span> is your ultimate
  <span className="font-extrabold text-white"> Web3 assistant</span>, designed to make 
  blockchain interactions effortless. Protect yourself from scams, simplify 
  <span className="font-extrabold text-white"> NEAR transactions</span>, and streamline 
  <span className="font-extrabold text-white"> token bridging</span> seamlessly—all through 
  a user-friendly overlay. 

  Manage your Web3 activities securely and efficiently without switching apps. 
  With <span className="font-extrabold text-white">XWIFTRX AI</span>, take control of your 
  digital assets and embrace the future of effortless blockchain interaction. 
  Let’s <span className="font-extrabold text-white">explore</span> the simplicity of 
  Web3 together by scrolling down.
</motion.p>


      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
