import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!name || !email || !password) {
    setError("Please fill all fields");
    return;
  }

  if (!emailRegex.test(email)) {
    setError("Enter a valid email address");
    return;
  }

  if (!passwordRegex.test(password)) {
    setError(
      "Password must contain 8+ characters, uppercase, lowercase, number and special symbol"
    );
    return;
  }

  try {
    setError("");
    setLoading(true);

    const res = await fetch("https://order-de0s.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Signup failed");
      return;
    }

    if (data.message === "User already exists") {
      setError("User already exists");
      return;
    }

    if (data.message === "Signup successful") {
      alert("Account created successfully");
      navigate("/login");
    }
  } catch (err) {
    setError("Server error. Try again later.");
  } finally {
    setLoading(false);
  }
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
              type={showPassword ? "text":"password"}
              placeholder="••••••••"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <i
              className={`eye ri-${showPassword ? "eye-off-line":"eye-line"}`}
              onClick={()=>setShowPassword(!showPassword)}
            ></i>

          </div>

          {error && <p className="error">{error}</p>}

          <button className="login-btn" onClick={handleSignup}>

            {loading ? "Creating..." : "Sign Up"}

          </button>

          <p className="signup">
            Already have an account? 
            <span onClick={()=>navigate("/login")}> Sign In</span>
          </p>

        </div>

      </div>

    </div>
  );
};

export default SignUp;