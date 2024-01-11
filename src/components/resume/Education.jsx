
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles";
import { educationes} from "../../constants";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";

const ExperienceCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={education.icon}
            alt={education.company_name}
            className='w-[90%] h-[90%] object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {education.company_name}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold my-2'
          
        >
          {education.Achievement.subtitle}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {education.Achievement.point.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      
    </VerticalTimelineElement>
  );
};

const Education = () => {

  
  return (
    <>
      <motion.div>
        <p className={`${styles.resumeSubText} text-center`}>
          My Background
        </p>
        <h2 className={`${styles.resumeTex} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {educationes.map((education, index) => (
            <ExperienceCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "Education");