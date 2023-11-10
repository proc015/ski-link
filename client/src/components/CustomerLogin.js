import { useState } from 'react';
import { postLogin } from '../apiService'; // Make sure this path is correct

const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const loginObj = { email, password };
    try {
      const response = await postLogin(loginObj);
      if (response.message) {
        // Handle successful login here
        console.log(response.message);
        //  redirect to another route using your routing library
      } else {
        alert('login failed')
        console.error('Login failed');
      }
    } catch (err) {
      console.error('Error submitting login:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default CustomerLogin;
