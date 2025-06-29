import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Footer.css';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleDashboard = () => {
    window.scrollTo(0, 0);
    navigate('/dashboard');
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem'}}>
            <img src={require('./A_logo_in_vector_graphic_format_is_displayed_on_a_-removebg-preview (1).png')} alt="AllerGEN AI Logo" style={{height: '2.8rem', width: '2.8rem', objectFit: 'contain', marginRight: '0.3rem'}} />
            <h3 style={{margin: 0}}>AllerGEN AI</h3>
          </div>
          <p>Advanced AI-powered allergen detection for clinical applications. FDA registered medical device.</p>
        </div>
        
        <div className="footer-section">
          <h3>Clinical Resources</h3>
          <ul className="footer-links">
            <li><a href="#upload">Begin Analysis</a></li>
            <li><a href="#how-it-works">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Clinical Validation</a></li>
          </ul>
          {user ? (
            <button className="footer-dashboard-btn" onClick={handleDashboard}>Dashboard</button>
          ) : (
            <button className="footer-signup-btn" onClick={handleSignIn}>Sign In</button>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} AllergyReal Clinical Systems. All rights reserved. FDA Registered Medical Device.
      </div>
    </footer>
  );
};

export default Footer; 