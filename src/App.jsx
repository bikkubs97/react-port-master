import { NavLink, Route, Routes } from "react-router-dom";
import Env from "./components/Env";
import Web from "./components/Web";
import Design from "./components/Design";
import About from "./components/About";
import {motion} from 'framer-motion'


function App() {
  const scaleVariants = {
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="space">
          <div class="particle"></div>
          <div class="particle"></div>
           <div class="particle"></div>
         <div class="particle"></div>
        </div>
      
        
      <motion.div className="home">
        <motion.nav initial={{y:-200}} animate={{y:0}} transition={{delay:3, duration:2 ,stiffness:120}} className="nav">
        <span>
        <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
        <NavLink to="/">Bikku BS</NavLink>
        </motion.div>
      </span>
      <ul>
        <li>
          <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
            <NavLink to="/web">Web Dev Projects</NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
            <NavLink to="/design">UX Design Projects</NavLink>
          </motion.div>
        </li>
      </ul>
        </motion.nav>
        <Routes>
          <Route exact path="/" element={<Env />} />
          <Route path="/web" element={<Web />} />
          <Route path="/design" element={<Design />} />
      
        </Routes>
 
     
        <div className="footer">
        
        <motion.div initial={{y:400}} animate={{y:0}} transition={{delay:3, duration:2 ,stiffness:120}}  className="social">
        <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
          <a href="https://github.com/bikkubs97?tab=repositories" target="_blank">
            <div className="git"></div>
          </a>
       </motion.div>
       <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
          <a href="https://www.linkedin.com/in/bikku-bs-325690170/" target="_blank">
            <div className="link"></div>
          </a>
          </motion.div>
          <motion.div
            whileHover="hover"
            variants={scaleVariants}
          >
          <a href="https://www.instagram.com/bikku_bs" target="_blank">
            <div className="insta"></div>
          </a>
          </motion.div>
        </motion.div>
      
        <a href="/images/bikkubs.pdf" download>
       
      <motion.button initial={{y:400}} animate={{y:0}} transition={{delay:3, duration:2 ,stiffness:120}}>Download Resume</motion.button>
        </a>
        </div>
      </motion.div>
    
    </>
  );
}

export default App;
