import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageCircle, Gift, ShieldCheck, Star, Globe, Sparkles, ArrowUpRight } from 'lucide-react';

const features = [
    {
        icon: <Zap size={22} />,
        title: "Smart Matching",
        desc: "Get matched based on shared interests, values, and communication style — not just photos.",
        color: "var(--vivid-orange)",
        accent: "#FF9F43"
    },
    {
        icon: <MessageCircle size={22} />,
        title: "Safe Messaging",
        desc: "Chat freely in Buddy, Friend, and Hangout Zones with built-in icebreakers and positivity filters.",
        color: "var(--bright-cyan)",
        accent: "#00D2FF"
    },
    {
        icon: <Gift size={22} />,
        title: "Virtual Gifts",
        desc: "Send digital gifts to brighten someone's day. Express yourself beyond words.",
        color: "var(--neon-pink)",
        accent: "#FF007F"
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Verified & Safe",
        desc: "Advanced verification, reporting tools, and zero-tolerance against harassment and misuse.",
        color: "#20BF6B",
        accent: "#66BB6A"
    },
    {
        icon: <Star size={22} />,
        title: "Profile Frames",
        desc: "Customize your profile with premium frames to stand out and express your personality.",
        color: "var(--deep-purple)",
        accent: "#9D50BB"
    },
    {
        icon: <Globe size={22} />,
        title: "Zone Switching",
        desc: "Instantly switch between Buddy Zone, Friend Zone, and Hangout Zone based on your mood.",
        color: "#F7B731",
        accent: "#FCC02E"
    }
];

const FeatureCard = ({ f, idx }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 100, damping: 20, delay: idx * 0.08 }
                }
            }}
            whileHover="hover"
            style={{
                position: 'relative',
                height: '100%'
            }}
        >
            <motion.div
                className="glass"
                variants={{
                    hover: {
                        y: -8,
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        borderColor: 'rgba(255,255,255,0.4)'
                    }
                }}
                style={{
                    padding: '32px 28px',
                    borderRadius: '24px',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.3s ease'
                }}
            >
                {/* Dynamic Gradient Background */}
                <motion.div
                    variants={{
                        hover: { opacity: 1, scale: 1.1 }
                    }}
                    initial={{ opacity: 0, scale: 1 }}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-10%',
                        width: '140px',
                        height: '140px',
                        background: `radial-gradient(circle, ${f.color}15 0%, transparent 70%)`,
                        filter: 'blur(30px)',
                        zIndex: 0
                    }}
                />

                {/* Icon Container */}
                <div style={{ position: 'relative', zIndex: 1, marginBottom: '24px' }}>
                    <motion.div
                        variants={{
                            hover: {
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                            }
                        }}
                        style={{
                            width: '55px',
                            height: '55px',
                            borderRadius: '16px',
                            background: `linear-gradient(135deg, ${f.color} 0%, ${f.accent} 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: `0 10px 20px ${f.color}22`,
                        }}
                    >
                        {f.icon}
                    </motion.div>
                </div>

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                    <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        marginBottom: '12px',
                        color: 'var(--dark-text)',
                        letterSpacing: '-0.01em'
                    }}>
                        {f.title}
                    </h3>
                    <p style={{
                        color: 'var(--light-text)',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        opacity: 0.85
                    }}>
                        {f.desc}
                    </p>
                </div>

                {/* Bottom Link indicator */}
                {/* <motion.div
                    variants={{
                        hover: { x: 4, opacity: 1 }
                    }}
                    initial={{ x: 0, opacity: 0 }}
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: f.color,
                        fontWeight: '700',
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                    }}
                >
                    Learn More <ArrowUpRight size={16} />
                </motion.div> */}
            </motion.div>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section id="features" style={{
            padding: '80px 8%',
            background: 'var(--soft-bg)',
            position: 'relative'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--neon-pink)',
                        background: 'rgba(255,0,127,0.06)',
                        padding: '10px 24px',
                        borderRadius: '50px',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        marginBottom: '20px',
                        letterSpacing: '0.02em'
                    }}
                >
                    <Sparkles size={16} /> CORE MAGIC
                </motion.div>
                <h2 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                    marginBottom: '20px',
                    fontWeight: '900',
                    lineHeight: 1.15,
                    letterSpacing: '-0.03em'
                }}>
                    Packed with <span className="text-gradient">Features.</span>
                </h2>
                <p style={{
                    color: 'var(--light-text)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    marginInline: 'auto',
                    fontWeight: '500',
                    lineHeight: 1.55
                }}>
                    Everything you need to connect, chat, gift, and grow — built for genuine human interaction.
                </p>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '25px',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                {features.map((f, idx) => (
                    <FeatureCard key={idx} f={f} idx={idx} />
                ))}
            </motion.div>

            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '70%',
                height: '70%',
                background: 'radial-gradient(circle, rgba(255,0,127,0.02) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0
            }} />
        </section>
    );
};

export default Features;
