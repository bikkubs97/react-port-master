import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Design = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200,
        delay: index * 0.2, // Adjust the delay value as needed
      },
    }),
  };

  const [hoveredItem, setHoveredItem] = useState(null);
  
  

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
  };

  return (
    <div className="design">

      <motion.div
        className="grid2"
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Animation to final opacity
        transition={{ duration: 0.8 }} // Transition duration
      >
        <a href="https://www.figma.com/proto/RJHqKcP5hpEjcGCIWKgn7D/Untitled?page-id=0%3A1&node-id=2-2&viewport=140%2C342%2C0.51&scaling=scale-down&starting-point-node-id=2%3A2" target="blank">
        <motion.div
          className="item1"
          variants={itemVariants}
          custom={0}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          onMouseEnter={() => handleItemHover("Design for a Move ticket booking app for local theater created in figma")}
          onMouseLeave={() => handleItemHover(null)}
        /></a>
        <a href="https://xd.adobe.com/view/21162b61-c70b-46b7-ba4f-f37d461b3a7a-7445/" target="_blank">
        <motion.div
          className="item2"
          variants={itemVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          onMouseEnter={() => handleItemHover("Design for favourite films website created in Adobe XD")}
          onMouseLeave={() => handleItemHover(null)}
        /></a>
        <a href="https://xd.adobe.com/view/fef0f0f5-c24c-4ece-b2ed-f72e3a9c6474-aba3/" target="blank">
        <motion.div
          className="item3"
          variants={itemVariants}
          custom={2}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          onMouseEnter={() => handleItemHover("Design of website for fictional character gru, form the movie minions. Created in Adobe XD")}
          onMouseLeave={() => handleItemHover(null)}
        /></a>
        <a href="https://docs.google.com/presentation/d/1gOSwDOp8kE2VyPFf7LzG1lza3D6WVn8Q/edit?rtpof=true&sd=true" target="blank">
        <motion.div
          className="item4"
          variants={itemVariants}
          custom={3}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          onMouseEnter={() => handleItemHover("The UX Research and case study for the ticket booking app, done for google UX Design certification program")}
          onMouseLeave={() => handleItemHover(null)}
        /></a>
      </motion.div>
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="details"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            key="details"
          >
            <h2>{hoveredItem}</h2>
           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Design;
