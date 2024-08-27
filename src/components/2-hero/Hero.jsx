/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import Lottie from "lottie-react";
import animationDevelopment from "../../animation/animationDevelopment.json";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const lottieRef = useRef();
  return (
    <section className="flex hero">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/public/images/c6e42ba5-3327-4f39-8101-09e299a35c0a.jpg"
            alt="imagePortfolio"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Software Engineer,founder, and amateur astronaut.
        </motion.h1>
        <p className="subtitle">
        Dedicated Software Engineer with over one year of expertise in Front-End Development using React.js and nearly two
years in Back-End Development using Node.js. Currently completing my studies at the Faculty of Computer Science,
well-versed in Agile methodologies. Seeking a challenging position to apply an outside-of-the-box approach and a
keen ability to identify problems and create effective solutions, ensuring projects stay on track and within budget
        </p>
        <div className="allIcons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          style={{ height: 400 }}
          onLoadedImages={() => {
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={animationDevelopment}
        />
      </div>
    </section>
  );
}

export default Hero;
