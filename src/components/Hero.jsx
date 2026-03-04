import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Zap, Globe, Users, Coffee } from 'lucide-react';


const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.05, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const essenceTokens = [
        { icon: <Heart size={18} />, text: 'Buddy Zone' },
        { icon: <ShieldCheck size={18} />, text: 'Verified Safe' },
        { icon: <Zap size={18} />, text: 'Virtual Gifts' },
        { icon: <Globe size={18} />, text: 'Real Connections' }
    ];

    return (
        <section className="hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '100px',
            background: 'var(--soft-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Soft Ambient Glows */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,0,127,0.05) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hero-container"
                style={{
                    maxWidth: '1400px',
                    width: '92%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '40px',
                    zIndex: 1,
                    position: 'relative'
                }}
            >
                {/* Left Side: Editorial Content */}
                <div style={{ textAlign: 'left', flex: 1.2, maxWidth: '700px' }}>
                    <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--neon-pink)', fontWeight: '800', fontSize: '0.85rem', marginBottom: '25px', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>
                        <Sparkles size={16} fill="currentColor" />
                        <span>Friendship · Buddy · Hangouts</span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                            fontWeight: '950',
                            lineHeight: 1.05,
                            marginBottom: '30px',
                            letterSpacing: '-0.05em',
                            color: 'var(--dark-text)'
                        }}
                    >
                        Meet. Bond. <br />
                        Build <span className="text-gradient">Real Moments.</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                            color: 'var(--light-text)',
                            marginBottom: '45px',
                            fontWeight: '500',
                            lineHeight: 1.65,
                            maxWidth: '580px',
                            opacity: 0.9
                        }}
                    >
                        Little Hearts is your safe space to find genuine friends, explore meaningful dates, and plan casual hangouts — all in one app designed for real human warmth.
                    </motion.p>

                    {/* Brand Essence Tokens */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            gap: '30px',
                            flexWrap: 'wrap',
                            paddingTop: '20px',
                            borderTop: '1px solid rgba(0,0,0,0.05)'
                        }}
                    >
                        {essenceTokens.map((token, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ color: 'var(--neon-pink)' }}>{token.icon}</div>
                                <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--dark-text)', opacity: 0.7 }}>{token.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Three-Zone Collage */}
                <motion.div
                    variants={imageVariants}
                    style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'flex-end', width: '100%' }}
                >
                    {/* Desktop: absolute floating layout */}
                    <div className="hero-collage hero-collage-desktop" style={{ position: 'relative', width: '100%', maxWidth: '580px', height: '520px' }}>

                        {/* Main Card - Buddy Zone (large, left) */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: '30px',
                                width: '58%',
                                height: '88%',
                                borderRadius: '28px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 70px -15px rgba(0,0,0,0.15)',
                                zIndex: 2
                            }}
                        >
                            <img src="/friendship_1.png" alt="Buddy Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '8px 16px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Users size={14} color="var(--bright-cyan)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.8rem' }}>Buddy Zone</span>
                            </div>
                        </motion.div>

                        {/* Top Right Card - Friend Zone */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                width: '40%',
                                height: '47%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)',
                                zIndex: 3
                            }}
                        >
                            <img src="/date.png" alt="Friend Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '6px 14px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Heart size={13} color="var(--neon-pink)" fill="var(--neon-pink)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.75rem' }}>Friend Zone</span>
                            </div>
                        </motion.div>

                        {/* Bottom Right Card - Hangout Zone */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: '10px',
                                width: '40%',
                                height: '47%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)',
                                zIndex: 3
                            }}
                        >
                            <img src="/hangout.png" alt="Hangout Zone" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '6px 14px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Coffee size={13} color="var(--vivid-orange)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.75rem' }}>Hangout Zone</span>
                            </div>
                        </motion.div>

                        {/* Floating Sparkle Accent */}
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            style={{ position: 'absolute', top: '-10px', left: '52%', background: 'white', borderRadius: '16px', padding: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', zIndex: 5 }}
                        >
                            <Sparkles size={22} color="var(--neon-pink)" />
                        </motion.div>
                    </div>

                    {/* Mobile: grid layout — all 3 cards fully visible */}
                    <div className="hero-collage hero-collage-mobile" style={{ display: 'none', width: '100%' }}>
                        {/* Large card — Buddy Zone */}
                        <div style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)', gridColumn: '1 / -1', aspectRatio: '16/9' }}>
                            <img src="/friendship_1.png" alt="Buddy Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '6px 14px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Users size={14} color="var(--bright-cyan)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.8rem' }}>Buddy Zone</span>
                            </div>
                        </div>
                        {/* Friend Zone */}
                        <div style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)', aspectRatio: '1/1' }}>
                            <img src="/date.png" alt="Friend Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '5px 12px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                                <Heart size={12} color="var(--neon-pink)" fill="var(--neon-pink)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.72rem' }}>Friend Zone</span>
                            </div>
                        </div>
                        {/* Hangout Zone */}
                        <div style={{ position: 'relative', borderRadius: '22px', overflow: 'hidden', boxShadow: '0 20px 50px -10px rgba(0,0,0,0.15)', aspectRatio: '1/1' }}>
                            <img src="/hangout.png" alt="Hangout Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)', padding: '5px 12px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                                <Coffee size={12} color="var(--vivid-orange)" />
                                <span style={{ color: 'white', fontWeight: '800', fontSize: '0.72rem' }}>Hangout Zone</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style>{`
                @media (max-width: 1150px) {
                    .hero-container {
                        flex-direction: column !important;
                        text-align: center !important;
                        padding-bottom: 60px;
                        gap: 48px !important;
                    }
                    .hero-container > div {
                        text-align: center !important;
                        align-items: center !important;
                        max-width: 100% !important;
                    }
                    .hero-container h1 {
                        margin-bottom: 25px !important;
                    }
                    .hero-container p {
                        margin-inline: auto !important;
                    }
                    .hero-container div[style*="display: flex"] {
                        justify-content: center !important;
                    }

                    /* Swap collage variants */
                    .hero-collage-desktop {
                        display: none !important;
                    }
                    .hero-collage-mobile {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                        width: 100%;
                        max-width: 560px;
                        margin-inline: auto;
                    }
                    /* Buddy Zone spans full width */
                    .hero-collage-mobile > div:first-child {
                        grid-column: 1 / -1;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
