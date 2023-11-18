import { useState } from "react";
import { postLogin } from "../apiService";
import { useNavigate } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";

const CustomerLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const loginObj = { email, password };
    const response = await postLogin(loginObj);

    if (response.message) {
      navigate("/client");
    } else {
      alert("login failed");
      console.error("Login failed");
    }
  };

  return (
    <div className="customer-login-container">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="login-image">
          <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required={true}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required={true}
        />
        <button id="customer-login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default CustomerLogin;
