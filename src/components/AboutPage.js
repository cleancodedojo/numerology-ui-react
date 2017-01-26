import React from 'react';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This application was based from numerology: the romance in your name by juno jordan.
      </p>
    </div>
  );
};

export default AboutPage;
