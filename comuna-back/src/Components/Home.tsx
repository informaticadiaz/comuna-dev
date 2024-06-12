import Layout from "../Layout/Layout"
import { useState } from "react"
export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <h1>Comuna</h1>
    <form>
    <h2>Login</h2>
    <label>Username</label>
    <input 
      type="text"
      value={username}
      onChange={(event) => setUsername(event.target.value)}  
    />

    <label>Password</label>
    <input 
      type="password"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    
    <button>Login</button>
    </form>
    <Layout />
    </>
  )
}
