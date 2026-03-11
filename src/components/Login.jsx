import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    // simulate login
    localStorage.setItem("user", JSON.stringify({ email }));

    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  const handleFacebookLogin = () => {
    window.open("https://www.facebook.com/login", "_blank");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome!</h1>
          <p>Sign in to continue ordering delicious food</p>
        </div>

        <div className="login-body">
          <label>Email Address</label>
          <div className="input-box">
            <i className="ri-mail-line icon"></i>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <i className="ri-lock-line icon"></i>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <i
              className={`eye ri-${showPassword ? "eye-off-line" : "eye-line"}`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {error && <p className="error">{error}</p>}

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <span className="forgot">Forgot Password?</span>
          </div>

          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="social-btn google" onClick={handleGoogleLogin}>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
            Continue with Google
          </button>

          <button className="social-btn facebook" onClick={handleFacebookLogin}>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
            Continue with Facebook
          </button>

          <p className="signup">
            Don't have an account? <span onClick={()=>navigate("/signup")}>Sign Up</span>
          </p>
        </div>
      </div>

      <p className="terms">
        By continuing, you agree to our
        <b> Terms of Service </b> and
        <b> Privacy Policy</b>
      </p>
    </div>
  );
};

export default Login;
