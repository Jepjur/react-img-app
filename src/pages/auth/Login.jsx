import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { loginWithEmail, loginWithGoogle } = useAuth(); // no need to call setCurrentUser
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await loginWithEmail(email, password); // now handled by context
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    try {
      await loginWithGoogle(); // context already sets currentUser
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "4rem auto", padding: "2rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleEmailLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.75rem", background: "#2563eb", color: "white", border: "none", borderRadius: "4px" }}>
          Login
        </button>
      </form>

      <hr style={{ margin: "2rem 0" }} />

      <button
        onClick={handleGoogleLogin}
        style={{ padding: "0.75rem", background: "#db4437", color: "white", border: "none", borderRadius: "4px", width: "100%" }}
      >
        Continue with Google
      </button>
    </div>
  );
}
