


import { Route, Routes } from 'react-router-dom';
import Education from './components/resume/Education';

import App from './App';


const Home =() => {
  

  return (
    <>
      <Routes>
        <Route path='/react' element = {<App/>}/>
        {/* <Route path='/#resum' element = {<Education/>}/> */}
      </Routes>
    </>
    
    
  )
}

export default Home