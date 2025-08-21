import { 
  About,
  Contact,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components/Portfolio';
import Resume from './components/Portfolio/Resume';



<<<<<<< HEAD
=======
import { Route, Routes } from 'react-router-dom';

import App from './App';

>>>>>>> main

const Home =() => {
  

  return (

    <>
    <div className='relative z-0 bg-primary'>
        <div > 
          <Navbar />
          <Hero />
          
        </div>

        <About />
        <Resume/>
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        
      </div>
      <div className='relative'>
        <Contact />
        <StarsCanvas />
      </div>
    </>
    
    
    
  )
}

export default Home
