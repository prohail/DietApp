import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <>
      <div className="container pt-5">
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <form className="login mx-auto" onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <label>Email address:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button disabled={isLoading}>Log in</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      <p className="text-center py-4">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
