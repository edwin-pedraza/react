import { motion } from "framer-motion";

import { styles } from "../styles";
import { ModelCanvas, StarsCanvas } from "./canvas";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb"
import {SiTailwindcss,SiFigma} from "react-icons/si"
import {BsGithub} from "react-icons/bs"


const Hero = () => {

  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}
      >
        
        <div className='flex flex-row sm:flex-col justify-center items-center mt-12 place-content-center absolute'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className=' w-40 h-1 sm:h-80 sm:w-1  violet-gradient' />
        </div>

        <div className="basis-1/2 my-14 mx-4 sm:my-14 sm:mx-10">
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi,{` I'm `}  <span className='text-fourth'> Edwin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* I develop Front End */}
            {text}
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#915EFF"
          />
          </p>

          <div className="flex flex-col xl:flex-row sm:flex-col gap-8 lgl:gap-0 justify-between my-10 px-5">
            <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                Find me in
              </h2>
              <div className="flex gap-4">
                <a className="bannerIcon" href='https://github.com/edwin-pedraza' target= '_blank' rel='noreferrer'>
                  <BsGithub />
                </a>
                
                <a className="bannerIcon" href='https://www.linkedin.com/in/edwin-y-pedraza-b-/' target= '_blank' rel='noreferrer'>
                  <FaLinkedinIn className="w-ful h-full"/>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-base uppercase mb-4">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4 ">
              <a className="bannerIcon" href = "#tech">
                  <FaReact values={{size: '100px'}}/>
                  
                </a>
                
                <a className="bannerIcon" href = "#tech">
                <TbBrandNextjs className="w-ful h-full"/>
                </a>
                <a className="bannerIcon" href = "#tech">
                  <SiTailwindcss className="w-ful h-full"/>
                </a>
                <a className="bannerIcon" href = "#tech">
                  <SiFigma className="w-ful h-full"/>
                </a>
              </div>
          </div>

        </div>
          
          
        </div>
        <div className='w-2/3 h-2/3 m-auto'>

          
          < ModelCanvas />
        </div>
        <StarsCanvas/>
      </div>

     

      <div className='absolute xs:bottom-8 bottom-1 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;