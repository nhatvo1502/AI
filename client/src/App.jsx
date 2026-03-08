import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required.");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email.trim(), password })
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Login failed.");
      }

      setUser(payload.user);
    } catch (err) {
      setError(err.message || "Unable to log in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="login-card">
        <p className="badge">Secure Access</p>
        <h1>Log In</h1>
        <p className="helper">Use your account to continue.</p>

        {user ? (
          <div className="success-box">
            <h2>Welcome, {user.name}</h2>
            <p>You are logged in as {user.email}.</p>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="demo@local.dev"
            />
            {emailError && <p className="field-error">{emailError}</p>}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
            {passwordError && <p className="field-error">{passwordError}</p>}

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
