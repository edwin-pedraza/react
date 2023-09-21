
import { Route, Routes } from 'react-router-dom';
import Header from './page/header';
import BlogList from './page/BlogList';
import BlogPost from './page/BlogPost';
import Footer from './page/Footer';
const Blog =() => {
  

  return (
    <>
      
      < Header />
      < BlogList />
      < BlogPost />
      < Footer />
    
    </>
    
    
  )
}

export default Blog