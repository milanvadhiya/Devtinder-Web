export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-300 text-base-content rounded-t-2xl shadow-md">
      <aside>
        <p className="text-sm">
          🚀 DevTinder &copy; {new Date().getFullYear()} — Built with{" "}
          <span className="font-semibold text-primary">Express</span>,{" "}
          <span className="font-semibold text-secondary">MongoDB</span>, and{" "}
          <span className="font-semibold text-accent">React</span>.
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://github.com/milanvadhiya/DevTinder"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a href="/docs" className="hover:text-primary">
            Docs
          </a>
          <a href="/about" className="hover:text-primary">
            About
          </a>
        </div>
      </nav>
    </footer>
  );
}
