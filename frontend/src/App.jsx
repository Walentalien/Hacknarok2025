import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">ForumHub</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to ForumHub</h1>
            <p>Join our vibrant community of thinkers, creators, and innovators</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Why Choose ForumHub?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Engaging Discussions</h3>
              <p>Participate in meaningful conversations with like-minded individuals</p>
            </div>
            <div className="feature-card">
              <h3>Easy Navigation</h3>
              <p>Find topics and threads that interest you with our intuitive interface</p>
            </div>
            <div className="feature-card">
              <h3>Real-time Updates</h3>
              <p>Stay connected with instant notifications and live discussions</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About ForumHub</h2>
          <p>ForumHub is a modern platform designed to bring people together through meaningful discussions. Our mission is to create a space where ideas can flourish and communities can grow.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 ForumHub. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
