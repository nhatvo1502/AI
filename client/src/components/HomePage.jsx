export default function HomePage({ onLoginClick }) {
  return (
    <main className="page">
      <section className="home-card">
        <p className="badge">Welcome</p>
        <h1>Home Page</h1>
        <p className="helper">
          This is the new entry page. Continue to login to access your account.
        </p>
        <button type="button" onClick={onLoginClick}>
          Log In
        </button>
      </section>
    </main>
  );
}
