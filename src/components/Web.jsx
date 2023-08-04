import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Web = () => {
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

  const items = [
    {
      name: "Application for creating and saving notes with authentication, created using React, Redux, Node.js, MongoDB and Express.",
      link: "https://notes-a0aw.onrender.com/",
    },
    {
      name: "Customizable dashboard collection with google charts, Created using Typescript, Tailwind CSS and Next JS",
      link: "https://ui-project-rho.vercel.app/",
    },
    {
      name: "Application for creating and saving recipes with authentication, created using React, Node.js, MongoDB and Express.",
      link: "https://foodfiesta-hy9y.onrender.com/",
    },
  
    {
      name: "A movie fan page with color coded reviews based on tone and emotion, created using HTML,CSS,Node and MongoDB. Powered by sentiment analyzer API",
      link: "https://killbill-8fnt.onrender.com/",
    },
    {
      name: "A dashbord for visualizing news articles around the globe, created using React, Node.js, Mongo DB and Google Charts",
      link: "https://dashboard-op4d.onrender.com/",
    },
    {
      name: "A weather application quoting poems about the current weather, created using React, Node.js, CSS Powered by Open weather Map & OpenCage API",
      link: "https://weather-fuhw.onrender.com/",
    },
    {
      name: "A tool for searching images from mars rovers such as curiosity, Created using React, Express, Node.JS and CSS, Powered by NASA API",
      link: "https://curiosity-vklp.onrender.com/",
    },
    {
      name: "An API for latest technology news, created using Node.js, Express and Cheerio Available in RAPID API ",
      link: "https://rapidapi.com/bikku97-bikku97-default/api/tech-news-live1/",
    },
    {
      name: "A Simple Tic Tac Toe game Created in React",
      link: "https://tic-tac-toe-6zlc.onrender.com/",
    },
    {
      name: "A ChatGPT clone created using React, Node.js and Express, Powered by OPEN AI API",
      link: "https://vocal-kulfi-2d7c36.netlify.app/",
    },
    {
      name: "A Telegram bot for CHAT GPT created with Node.js Powered by TELEGRAM BOT API and OPEN AI API",
      link: "https://github.com/bikkubs97/chat-bot/blob/master/index.js/",
    }, {
      name: "A tool for converting videos into GIF, Created using React, WASM, FFmpeg and CSS",
      link: "https://github.com/bikkubs97/edit-mate",
    }, 
    // Add more items here
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    const nextPage = (currentPage + 1) % Math.ceil(items.length / itemsPerPage);
    setCurrentPage(nextPage);
  };

  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleItemHover = (itemName) => {
    setHoveredItem(itemName);
  };

  return (
    <div className="design">
      <motion.div
        className="grid1"
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Animation to final opacity
        transition={{ duration: 0.8 }} // Transition duration
      >
        {paginatedItems.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={`${item.name}-${index}`} // Include index in the key for uniqueness
          >
            <motion.div
              className={`item${currentPage * itemsPerPage + index + 1}`}
              variants={itemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              onMouseEnter={() => handleItemHover(item.name)}
              onMouseLeave={() => handleItemHover(null)}
            />
          </a>
        ))}
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

      <button className="next" onClick={handleNextPage}>
        Show More
      </button>
    </div>
  );
};

export default Web;
