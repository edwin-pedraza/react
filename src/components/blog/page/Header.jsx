import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/LogoEdwin.svg'
import { clientSupa } from "../../../supabase//client";
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContex } from '../context/AuthContext';

function Header() {
  // const { signInWithGoogle } = UserAuth();

  const navigate = useNavigate();

  const [login, setlogin] = useState("Login");

  const loginGoogle = async function signInWithGoogle() {
    try {
      const { data, error } = await clientSupa.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: 'http://localhost:5173/react/blog'
        }
      });
      
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function signout() {
    const { error } = await clientSupa.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  }

  

  useEffect(() => {

    clientSupa.auth.onAuthStateChange(async (event, session) => {
      

      if (session == null){
        setlogin("Login")
        navigate("/react/blog", { replace: true });
      }
      else{
        setlogin("LogOut")
        navigate("/react/blog", { replace: true });
      }
    })

  }, [navigate])

  function validarLogin() {
    if (login == "Login" ){
      loginGoogle()
    }
    else{
      
      signout()
      setlogin("Login")
    }
  }

  return (
    <div className='flex justify-between items-center p-[20px] '>
        <img src={logo} className='w-[60px]' />
        <ul className='hidden md:flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/react')}>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button onClick={validarLogin} className='bg-red-500 btn rounded-full text-white flex items-center text-[14px]'>
           {login} </button>
    </div>
  );
}

export default Header;
