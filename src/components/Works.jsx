import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./Project/ProjectCard";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex '>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.paragraphSpacing} ${styles.bodyText} max-w-3xl`}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='my-20 flex  gap-7 flex-wrap justify-center'>
      
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
    </>
  )
}

export default SectionWrapper(Works, "projects");