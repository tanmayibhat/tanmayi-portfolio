import "./Hero.css";

function Hero() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <section className="hero-section" id="hero">
      <h1>{greeting}, I'm Tanmayi Bhat 👋</h1>

      <p className="tagline">
        I'm a passionate web developer from Bengaluru
      </p>

      <div className="hero-button">
        <a href="#projects" className="btn btn-primary">
          View my projects
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact me
        </a>
      </div>
    </section>
  );
}

export default Hero;