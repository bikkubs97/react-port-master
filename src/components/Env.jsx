import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { motion } from "framer-motion";

export default function Env() {
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
            I am Bikku BS
          </motion.h1>

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
        <Canvas>
          <color attach="background" args={["#020817"]} />

          <Experience />
          <Floor />
        </Canvas>
      )}
    </div>
  );
}
