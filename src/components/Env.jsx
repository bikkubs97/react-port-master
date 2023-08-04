import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { motion } from "framer-motion";

export default function Env() {

  const quotes = [
    {
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
    },
    {
      quote: "Art challeges Technology, Technology inspires Art",
      author: "John Lassetter",
    },
    {
      quote: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
    },
    {
      quote: "Any sufficiently advanced technology is indistinguishable from magic.",
      author: "Arthur C. Clarke",
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      quote: "Design is thinking made visual.",
      author: "Saul Bass",
    },
   
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Update the quote every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 15000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[index];
  function Floor() {
    return (
      <mesh receiveShadow rotation-x={-Math.PI * 0.5} position={[0, , 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#3554CB" />
      </mesh>
    );
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="canvas">
      {isLoading ? (
        <div className="loader">
           <div className="react"></div>
          <motion.h1 
            initial={{ y: -1000, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 1.5,
            }}
          >
            Hi, I'm Bikku BS
          </motion.h1>
            <motion.h5   initial={{  opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              duration: 2,
            }}>Welcome to my portfolio</motion.h5>
          <motion.h3 animate={{}}>
            {"I'm Interested in MERN Stack development"
              .split("")
              .map((char, index) => (
                <motion.h3
                  key={index}
                  style={{ display: "inline-block" }}
                  animate={{
                    opacity: [0, 1],
                    transition: { type: "tween", delay: 0.5 + index * 0.07 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.h3>
              ))}
          </motion.h3>
           
        </div>
      ) : (
        <div className="greeting">
        <div className="greet-text">
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.1 }} // Scale up the text elements on hover
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            >
              {currentQuote.quote}
            </motion.h1>
            <motion.h3
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
            >
              {currentQuote.author}
            </motion.h3>
          </motion.div>
       
        </div>
        <Canvas className="avt">
          <color attach="background" args={["#020817"]} />
          
          <Experience />
          <Floor />
        </Canvas>
        </div>
       
      )}
    </div>
  );
}
