import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const linkStyle = {
        color: 'rgba(0,0,0,0.6)',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: 'color 0.2s',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        textAlign: 'left'
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleBrandClick = () => {
        navigate('/');
        scrollToTop();
    };

    return (
        <footer style={{ padding: '80px 8% 40px', background: 'white', borderTop: '1px solid rgba(0,0,0,0.05)', borderTopLeftRadius: '60px', borderTopRightRadius: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                {/* Brand */}
                <div style={{ maxWidth: '350px' }}>
                    <div
                        onClick={handleBrandClick}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', cursor: 'pointer' }}
                    >
                        <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--gradient-neon)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <Heart size={24} fill="currentColor" />
                        </div>
                        <span style={{ fontSize: '1.4rem', fontWeight: '950', background: 'var(--gradient-neon)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.04em' }}>Little Hearts</span>
                    </div>
                    <p style={{ color: 'var(--light-text)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: '500' }}>
                        Bringing back genuine human warmth to the digital world. One heart at a time. Join our kind community today.
                    </p>
                </div>

                {/* Platform */}
                <div>
                    <h4 style={{ color: 'var(--dark-text)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '900' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('zones')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={linkStyle}>Zones</button></li>
                        <li><button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={linkStyle}>Features</button></li>
                        <li><button onClick={() => { navigate('/'); setTimeout(() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={linkStyle}>Community</button></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 style={{ color: 'var(--dark-text)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '900' }}>Legal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><button onClick={() => { navigate('/privacy'); scrollToTop(); }} style={linkStyle}>Privacy Policy</button></li>
                        <li><button onClick={() => { navigate('/terms'); scrollToTop(); }} style={linkStyle}>Terms & Conditions</button></li>
                        <li><button onClick={() => { navigate('/child-safety'); scrollToTop(); }} style={linkStyle}>Child Safety Policy</button></li>
                        <li><button onClick={() => { navigate('/refund'); scrollToTop(); }} style={linkStyle}>Refund Policy</button></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 style={{ color: 'var(--dark-text)', fontSize: '1.1rem', marginBottom: '20px', fontWeight: '900' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                        <a href="#" style={{ color: 'var(--neon-pink)', background: 'rgba(255,0,127,0.05)', padding: '10px', borderRadius: '15px', display: 'flex', transition: 'transform 0.2s' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: 'var(--neon-pink)', background: 'rgba(255,0,127,0.05)', padding: '10px', borderRadius: '15px', display: 'flex', transition: 'transform 0.2s' }}><Twitter size={20} /></a>
                        <a href="#" style={{ color: 'var(--neon-pink)', background: 'rgba(255,0,127,0.05)', padding: '10px', borderRadius: '15px', display: 'flex', transition: 'transform 0.2s' }}><Facebook size={20} /></a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--light-text)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            📧 littleheartsapp@gmail.com
                        </a>
                        <div style={{ color: 'var(--light-text)', fontSize: '0.9rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            📞 7995135561
                        </div>
                        <div style={{ color: 'var(--light-text)', fontSize: '0.85rem', fontWeight: '500', lineHeight: 1.5, marginTop: '5px' }}>
                            1-209, Chervu Daggara,<br />
                            Thorredu, East Godavari,<br />
                            Andhra Pradesh - 533293
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '30px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem', fontWeight: '500' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Sparkles size={16} style={{ color: 'var(--neon-pink)' }} /> Made with Love for Humanity
                </div>
                <p>© 2024 Little Hearts Tech. All rights reserved. Let's make the world <Heart size={12} fill="var(--neon-pink)" stroke="none" style={{ display: 'inline', verticalAlign: 'middle' }} /> again.</p>
            </div>
        </footer>
    );
};

export default Footer;
