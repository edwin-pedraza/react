
import { 
  About,
  Contact,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components';
import Resume from './components/Resume';


const App =() => {
  

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

export default App
