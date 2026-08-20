import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        &copy; {year} Tanmayi Bhat. All rights reserved
      </p>

      <nav aria-label="Social links">
        <a href="#" target="_blank" rel="noreferrer">
          Github
        </a>

        <a href="#" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </nav>
    </footer>
  );
}

export default Footer;