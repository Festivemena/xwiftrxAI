'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, color, label, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    {/* Background Div with Dynamic Color */}
    <div
      style={{ backgroundColor: color }}
      className="absolute w-full h-full rounded-[24px]"
    ></div>

    {/* Label - Always Visible */}
    <p className="absolute top-4 left-4 font-medium text-[14px] leading-[18px] text-white bg-[rgba(0,0,0,0.6)] px-3 py-1 rounded-full">
      {label}
    </p>

    {/* Show title only when active */}
    {active === id && (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        {/* Title Section */}
        <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
