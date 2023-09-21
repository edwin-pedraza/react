import { Route, Routes } from 'react-router-dom';
// import Education from './components/resume/Education';

import App from './App';
import Blog from './components/blog/Blog';


const Home =() => {
  

  return (
    <>
    
      
      <Routes>
        <Route path='/react' element = {<App/>}/>
        <Route path='/react/blog' element = {< Blog/>}/>
      </Routes>
    </>
    
    
  )
}

export default Home