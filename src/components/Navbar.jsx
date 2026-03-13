import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Heart } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = ({ onLogoClick, onNavClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Smoother responsive values for the floating effect
    const width = useTransform(scrollY, [0, 150], ['100%', '92%']);
    const top = useTransform(scrollY, [0, 150], ['0px', '20px']);
    const borderRadius = useTransform(scrollY, [0, 150], ['0px', '24px']);
    const navHeight = useTransform(scrollY, [0, 150], ['90px', '70px']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: null },
        { name: 'Zones', id: 'zones' },
        { name: 'Features', id: 'features' },
        { name: 'Community', id: 'community' },
    ];

    return (
        <motion.nav
            style={{
                width: width,
                top: top,
                borderRadius: borderRadius,
                height: navHeight,
                left: '50%',
                x: '-50%',
                position: 'fixed',
                zIndex: 100,
                padding: '0 40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
                border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                boxShadow: isScrolled ? '0 20px 40px rgba(0,0,0,0.06)' : 'none',
                transition: 'background-color 0.3s ease, border 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            {/* Branding */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                onClick={onLogoClick}
            >
                <div style={{ position: 'relative' }}>
                    <img
                        src="/launcher_icon.png"
                        alt="Logo"
                        style={{ width: '65px', height: '65px', borderRadius: '15px' }}
                    />
                    {isScrolled && (
                        <motion.div
                            layoutId="heart-indicator"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{ position: 'absolute', top: '-5px', right: '-5px', color: 'var(--neon-pink)' }}
                        >
                            <Heart size={14} fill="currentColor" />
                        </motion.div>
                    )}
                </div>
                <span style={{
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    letterSpacing: '-0.03em',
                    color: 'var(--dark-text)',
                    fontFamily: 'Varela Round'
                }}>
                    Little<span className="text-gradient">Hearts</span>
                </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
                {navLinks.map((link) => (
                    <motion.div
                        key={link.name}
                        onClick={() => onNavClick(link.id)}
                        style={{
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            color: 'var(--dark-text)',
                            textDecoration: 'none',
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                        whileHover="hover"
                    >
                        {link.name}
                        <motion.div
                            variants={{
                                hover: { width: '100%', opacity: 1 }
                            }}
                            initial={{ width: '0%', opacity: 0 }}
                            style={{
                                position: 'absolute',
                                bottom: '-4px',
                                left: 0,
                                height: '2px',
                                background: 'var(--gradient-electric)',
                                borderRadius: '2px'
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <motion.a
                    href="https://play.google.com/store/apps/details?id=com.little.hearts&hl=en_IN"
                    target='_blank'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary"
                    style={{
                        padding: '10px 24px',
                        fontSize: '0.9rem',
                        borderRadius: '14px',
                        display: 'none',
                    }}
                    id="nav-get-app"
                >
                    <Download size={18} /> Get App
                </motion.a>

                <div
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ cursor: 'pointer', display: 'none' }}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: 0,
                            right: 0,
                            background: 'white',
                            borderRadius: '24px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            zIndex: 99
                        }}
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                onClick={() => {
                                    onNavClick(link.id);
                                    setMobileMenuOpen(false);
                                }}
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '800',
                                    color: 'var(--dark-text)',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {link.name}
                            </div>
                        ))}
                        <a href="https://play.google.com/store/apps/details?id=com.little.hearts&hl=en_IN" target='_blank' className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            <Download size={20} /> Download App
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 993px) {
                    #nav-get-app { display: flex !important; }
                }
                @media (max-width: 992px) {
                    .nav-links-desktop { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
