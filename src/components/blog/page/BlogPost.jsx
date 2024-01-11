
import { useState, useEffect } from 'react'
import { clientSupa } from "../../../supabase/client";
import { useNavigate } from 'react-router-dom';
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function BlogPost() {
  const [session, setSession] = useState(null)
  // const navigate = useNavigate();


  useEffect(() => {
    clientSupa.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = clientSupa.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<h1>deslogueado</h1>)
  }
  else {
    return (<div>Logged in!</div>)
  }
}