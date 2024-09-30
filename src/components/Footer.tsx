import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light mt-auto py-3">
      <div className="container">
        <span className="text-muted">&copy; {new Date().getFullYear()} Admin System. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
