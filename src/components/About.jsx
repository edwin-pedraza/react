import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import foto from "../assets/foto_edwin.png";

const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className = "sm:w-[250px] w-full ">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
       
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain rounded-full'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="flex flex-row gap-10">
        <div>

          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4  text-secondary text-[17px] max-w-2 leading-[30px]'
          >
            {`I'm `} a Colombian System Engineer with a strong software testing and IT support background. Transitioning seamlessly into a skilled Frontend Developer, {`I'm `} passionate 
            about crafting user-friendly web applications with CSS, HTML, React.js.
            <br/>
            My standout feature I merge frontend finesse with backend proficiency. Python and Node.js fortify my server-side work, ensuring smooth user experiences 
            by bridging the gap between front and backend.

            
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4  text-secondary text-[17px] max-w-2 leading-[30px]'
          >
            I excel in API management and thorough testing through tools like Postman, guaranteeing seamless integration of frontend and backend functionalities.
            Versatility defines me – SQL, MySQL, SQLite, MongoDB – I architect data-driven apps with scalable solutions for diverse project needs.
            Driven by meticulousness and problem-solving, I deliver uncompromising quality, exceeding expectations in dynamic environments.
            With my frontend prowess and robust backend/database foundation, I'm poised to elevate innovative projects in growth-focused organizations.
          </motion.p>
        </div>

        <div className="m-auto">

          <Tilt className = "sm:w-[350px] w-full ">
              <motion.div
              variants={fadeIn("left", "spring", 0.5 , 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
              >
              <div
              
                className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <img
                  src={foto}
                  alt='web-development'
                  className='w-full h-full object-contain'
                />

                
              </div>
            </motion.div>

          </Tilt>
          {/* <img src={foto} alt="" /> */}
        </div>
      </div>



      
      <div className='mt-20 mx-10 flex flex-wrap gap-10 justify-between '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper (About,"about");