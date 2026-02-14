import "./App.css";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-box"></div>

          <div className="logo-text">
            <div className="logo-title">
              CollabSphere
            </div>

            <div className="logo-tag">
              Where Brands & Creators Unite
            </div>
          </div>
        </div>

        <div className="nav-buttons">
          <button className="signin">Sign in</button>
          <button className="signup">Sign up</button>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-left">

          <span className="badge">
            ✨ A premium workflow for high-signal partnerships
          </span>

          <h1>
            Find the right creators.
            <br />
            <span className="gradient">Launch campaigns</span>
            <br />
            with clarity.
          </h1>

          <p>
            CollabSphere is a modern marketplace for brands and creators—
            campaigns, applications, messaging, and payments in one polished system.
          </p>

          <div className="buttons">
            <button className="primary">Get started →</button>
            <button className="secondary">Explore Marketplace</button>
          </div>

        </div>


        {/* RIGHT CORNER PANEL */}
        <div className="hero-right">

          <div className="panel">

            <h4>SIGNAL PANEL</h4>

            <div className="card">
              <h3>Campaign brief</h3>
              <p>
                Clear deliverables, category, budget range and timeline.
              </p>
              <div className="progress"></div>
            </div>


            <div className="card-row">

              <div className="card small">
                <h3>Applicants</h3>
                <p>Review, accept, reject.</p>
              </div>

              <div className="card small">
                <h3>Threaded chat</h3>
                <p>Keep context per campaign.</p>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <h3>Precision matchmaking</h3>
          <p>
            Filter campaigns by budget and category.
            Search briefs instantly—no clutter, no guesswork.
          </p>
        </div>


        <div className="feature">
          <h3>Confident collaboration</h3>
          <p>
            Built-in messaging keeps threads tied to the work.
            Approvals stay clean and traceable.
          </p>
        </div>


        <div className="feature">
          <h3>Designed to scale</h3>
          <p>
            From one-off deals to repeat partnerships CollabSphere keeps operations consistent and fast.
          </p>
        </div>

      </section>



      {/* CTA */}
      <section className="cta">

        <div className="cta-left">
          Free to start. Professional from day one.
        </div>

        <div className="cta-right">
          <button className="cta-button">
            Sign in to CollabSphere →
          </button>
        </div>

      </section>



      {/* FOOTER */}
      <footer>
        © 2026 CollabSphere
      </footer>


    </div>
  );
}
