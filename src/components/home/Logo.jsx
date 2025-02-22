"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white border dark:border-white flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{ scale: 1.5 }}
      >
        AY
      </MotionLink>
    </div>
  );
}
export default Logo;
