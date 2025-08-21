import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/LogoEdwin.svg'
import { supabase } from '../../../supabase/client'
import { useEffect, useState } from 'react'

function Header() {
  const navigate = useNavigate()

  const [loginLabel, setLoginLabel] = useState('Login')
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  const redirectTo = `${window.location.origin}/react/blog`

  // --- Email magic-link sign in ---
  async function signInWithEmail() {
    try {
      setLoading(true)
      setMsg('')
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: redirectTo },
      })
      if (error) throw error
      setMsg('Check your email for a login link.')
      setShowForm(false)
    } catch (err) {
      console.error(err)
      setMsg('Could not send login link. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // --- Sign out ---
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Sign out error', error)
  }

  // --- Auth state listener ---
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        setLoginLabel('Login')
        // Stay or navigate as you need
        // navigate('/react/blog', { replace: true })
      } else {
        setLoginLabel('LogOut')
        navigate('/react/blog', { replace: true })
      }
    })

    return () => authListener.subscription.unsubscribe()
  }, [navigate])

  // --- Click login/logout button ---
  function handleLoginClick() {
    if (loginLabel === 'Login') {
      setShowForm((s) => !s)
    } else {
      signOut()
    }
  }

  return (
    <div className="flex justify-between items-center p-[20px] relative">
      <img src={logo} className="w-[60px]" alt="logo" />

      <ul className="hidden md:flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer" onClick={() => navigate('/react')}>Home</li>
        <li className="hover:font-bold cursor-pointer">About Us</li>
        <li className="hover:font-bold cursor-pointer">Contact Us</li>
      </ul>

      <button onClick={handleLoginClick} className="bg-red-500 btn rounded-full text-white flex items-center text-[14px] px-4 py-2">
        {loginLabel}
      </button>

      {/* Email login popover */}
      {showForm && (
        <div className="absolute top-[72px] right-[20px] w-[300px] rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-4 text-white">
          <div className="text-sm mb-2">Sign in with your email</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 outline-none"
          />
          <button
            disabled={loading || !email}
            onClick={signInWithEmail}
            className="mt-3 w-full px-3 py-2 rounded-lg bg-blue-600 disabled:bg-blue-600/50"
          >
            {loading ? 'Sending…' : 'Send login link'}
          </button>
          {msg && <div className="mt-2 text-xs opacity-80">{msg}</div>}
        </div>
      )}
    </div>
  )
}

export default Header

/*
// If you prefer email + password instead of magic link, use:

async function signInWithPassword(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  return data
}
*/
