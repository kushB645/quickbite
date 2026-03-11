import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [error,setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    if(!name || !email || !password){
      setError("Please fill all fields");
      return;
    }

    if(password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    const user = {name,email,password};

    localStorage.setItem("user",JSON.stringify(user));

    navigate("/login");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>Create Account</h1>
          <p>Join us and start ordering delicious food</p>
        </div>

        <div className="login-body">

          <label>Full Name</label>
          <div className="input-box">
            <i className="ri-user-line icon"></i>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <label>Email Address</label>
          <div className="input-box">
            <i className="ri-mail-line icon"></i>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <i className="ri-lock-line icon"></i>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <i
              className={`eye ri-${showPassword ? "eye-off-line" : "eye-line"}`}
              onClick={()=>setShowPassword(!showPassword)}
            ></i>
          </div>

          {error && <p className="error">{error}</p>}

          <button className="login-btn" onClick={handleSignup}>
            Sign Up
          </button>

          <p className="signup">
            Already have an account? <span onClick={()=>navigate("/login")}>Sign In</span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default SignUp;