import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} Sarath. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
