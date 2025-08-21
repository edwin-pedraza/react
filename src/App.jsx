import { Route, Routes } from 'react-router-dom';
// import Education from './components/resume/Education';

// import Blog from './components/blog/Blog';
import Home from './Home';

const App =() => {
  

  return (
    
    
    <>
    
      
      <Routes>
        <Route path='/react' element = {< Home/>}/>
        {/* <Route path='/react/blog' element = {< Blog/>}/> */}
        {/* <Route path='/react/login' element = {< Blog/>}/> */}
      </Routes>
    </>
    
      
    
  )
}

export default App
