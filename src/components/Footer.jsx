import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';

const Footer = ({ onNavigate, onLogoClick }) => {
    const linkStyle = { color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.9rem', cursor: 'pointer', background: 'none', border: 'none', padding: 0, textAlign: 'left' };
    const hoverStyle = { ...linkStyle, color: 'white' };

    return (
        <footer style={{ padding: '60px 8% 40px', background: 'var(--dark-text)', color: 'white', borderTopLeftRadius: '60px', borderTopRightRadius: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                {/* Brand */}
                <div style={{ maxWidth: '350px' }}>
                    <div
                        onClick={onLogoClick}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', cursor: 'pointer' }}
                    >
                        <img src="/launcher_icon.png" alt="Logo" style={{ width: '55px', borderRadius: '12px' }} />
                        <span style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'Varela Round', background: 'var(--gradient-neon)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Little Hearts</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: '500' }}>Bringing back genuine human warmth to the digital world. One heart at a time.</p>
                </div>

                {/* Platform */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: '800' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#zones" style={linkStyle}>Buddy Zone</a></li>
                        <li><a href="#zones" style={linkStyle}>Friend Zone</a></li>
                        <li><a href="#zones" style={linkStyle}>Hangout Zone</a></li>
                        <li><a href="#features" style={linkStyle}>Features</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: '800' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li>
                            <button onClick={() => { onNavigate('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={linkStyle}>
                                Privacy Policy
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { onNavigate('terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={linkStyle}>
                                Terms & Conditions
                            </button>
                        </li>
                        <li>
                            <button onClick={() => { onNavigate('refund'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={linkStyle}>
                                Refund Policy
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', fontWeight: '800' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                        <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '12px', display: 'flex' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '12px', display: 'flex' }}><Twitter size={20} /></a>
                        <a href="#" style={{ color: 'white', background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '12px', display: 'flex' }}><Facebook size={20} /></a>
                    </div>
                    <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>
                        📧 littleheartsapp@gmail.com
                    </a>
                    <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                        <Sparkles size={12} /> Made with Love for Humanity
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                <p>© 2024 Little Hearts Tech. All rights reserved. Let's make the world <Heart size={12} fill="var(--neon-pink)" stroke="none" /> again.</p>
            </div>
        </footer>
    );
};

export default Footer;
