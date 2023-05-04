import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {user, setUser} = useContext(LoginContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      setUser(data.user);
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="text-center">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <br />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />
          <br />
          <div style={{ color: "red" }}>{error}</div>
          <input type="submit" value="Login" />
        </form>
        {user && (
          <div>
            Logged in as {user.email}, name: {user.name}
          </div>
        )}
      </div>
    </>
  );
}

export default LoginPage;
