import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sPhone = phone.toString();
    await signup(name, email, sPhone, password);
  };

  return (
    <div className="container pt-5">
      <div className="pt-5"></div>
      <div className="pt-5"></div>
      <form className="signup mx-auto" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <label>Full Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label>Email address:</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          pattern="\d*"
          minLength="11"
          maxLength="11"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button disabled={isLoading}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
