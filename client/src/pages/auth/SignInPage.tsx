import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignInPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = {
      fullname: name,
      email: email,
      password: password
    }
    const {data} =  await axios.post("http://localhost:3002/api/v1/user/signin", form); 

    if (data.status !== 401) {
      localStorage.setItem('token', data.token);
      navigate("/universities")
    }
  }
  return (
    <div className="flex justify-center w-full">
      <div className="rounded-2xl bg-gray-800 text-white shadow-sm w-1/3 mt-20 p-4">
        <h1 className="text-center text-3xl">Sign In</h1>
        <div className="mt-8 p-4">
          <form className="flex items-center flex-col gap-4">
            <input 
              placeholder="Name" 
              type="text" 
              className="text-black p-2 w-full rounded-md" 
              name="name" 
              value={name} 
              onChange={handleNameChange} 
            />
            <input 
              placeholder="Email" 
              type="text" 
              className="text-black p-2 w-full rounded-md" 
              name="email" 
              value={email} 
              onChange={handleEmailChange} 
            />
            <input 
              placeholder="Password" 
              type="password" 
              className="text-black p-2 w-full rounded-md" name="password" 
              value={password} 
              onChange={handlePasswordChange} 
            />
            <button onClick={handleSubmit}>SIGN In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;