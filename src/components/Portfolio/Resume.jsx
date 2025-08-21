import  { useState } from 'react'
import { SectionWrapper } from "./hoc";

import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";
import { styles } from "../../styles";
import Education from './resume/Education';
import Experience from './resume/Experience';





const Resume = () => {

  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <>
      
      
        <p className={`${styles.sectionSubText} text-center`}>What I have done</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Resume.</h2>
      

      <motion.div variants={textVariant(0)}>
          <div className="w-full flex justify-around my-12">
            <a
              onClick={() => {
                setEducationData(true);
                setExperienceData(false);
              }}
              className={`${
                educationData
                  ? "border-2 p-2 rounded-lg text-2xl "
                  : "border-transparent text-xl cursor-pointer"
              } resumeLi`}
            >
              Education
            </a>

            <a
              onClick={() => {
                setEducationData(false);
                setExperienceData(true);
              }}
              className={`${
                experienceData
                  ? "border-2 p-2 rounded-lg text-2xl"
                  : "border-transparent text-xl cursor-pointer"
              } resumeLi`}
            >
              Experience
            </a>
          </div>

          {educationData && <Education />}
          {experienceData && <Experience />}
        </motion.div>


      


          
    </>
    
  );
};

export default SectionWrapper(Resume, "resume");
