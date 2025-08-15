


import { Route, Routes } from 'react-router-dom';

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
