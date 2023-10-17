import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

type DaysProps = {
  day: string;
  duration?: number;
  delay?: number;
} & HTMLMotionProps<"img">;

const Days: React.FC<DaysProps> = ({
  day,
  className,
  duration = 3,
  delay = 0,
}) => {
  const dayAnimation = {
    day: {
      scale: [1, 1.05, 1],
      transition: { duration: duration, repeat: Infinity, delay: delay },
    },
  };
  return (
    <motion.img
      className={twMerge("absolute w-[45%]", className)}
      src={`/images/events/${day}.png`}
      alt={`${day}`}
      variants={dayAnimation}
      initial="day"
      animate="day"
    />
  );
};

export default Days;
