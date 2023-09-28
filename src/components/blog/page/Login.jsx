import { useState } from "react";
import { clientSupa } from "../../../supabase/client";

function Login() {

  const [email, setemail] = useState("initialState");

  const handleSumit = async (e) => {
    e.preventDefault()
    try {
      const result = await clientSupa.auth.signInWithOtp({
        email,
      })
      console.log(result)
    } catch (error) {
      console.error(error)
    }
    
  }
  return (
    <footer className="bg-gray-200 p-4">
      {/* Footer content */}
      <h1 className="text-black">login</h1>

      <div>
        <form onSubmit={handleSumit}>
          <input 
            type="email"
            name="email"
            placeholder="Yourmail@site.com"
            onChange={(e) => setemail(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
    </footer>
  );
}

export default Login;