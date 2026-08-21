const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10">
      {/* Top gradient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-primary via-gold to-accent" />

      <div
        className="py-8 text-center"
        style={{ background: "linear-gradient(180deg, #FAF8FF 0%, #ffffff 100%)" }}
      >
        <p className="text-sm text-textLight">
          Made with ❤️ by{" "}
          <a
            href="https://tech.kiet.edu/team-erp/"
            rel="noreferrer"
            target="_blank"
            className="font-semibold transition-colors duration-200 hover:underline"
            style={{ color: "#F47920" }}
          >
            TEAM ERP
          </a>
          {" "}• © 2026 KIET Deemed To Be University
        </p>
      </div>
    </footer>
  );
};

export default Footer;
