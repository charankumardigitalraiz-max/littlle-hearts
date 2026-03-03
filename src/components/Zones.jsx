import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, Coffee, ArrowRight, X, Sparkles, ShieldCheck, MapPin, Zap } from 'lucide-react';

const zones = [
    {
        id: 'buddy',
        title: 'Buddy Zone',
        subtitle: 'Find your platonic match',
        description: 'Meet like-minded people for genuine friendships. No pressure, just real bonds.',
        icon: <Users size={24} />,
        color: 'var(--bright-cyan)',
        image: '/friendship_1.png',
        features: [
            { icon: <Zap size={16} />, title: "Friendship Matcher", text: "AI-powered compatibility for platonic bonds." },
            { icon: <Sparkles size={16} />, title: "Kindness Challenges", text: "Daily acts of care with new friends." },
            { icon: <Users size={16} />, title: "Interest Groups", text: "Micro-communities for every hobby." }
        ]
    },
    {
        id: 'dating',
        title: 'Dating Zone',
        subtitle: 'Intentional dating for modern hearts',
        description: 'Spark something special. Safe, intentional space for romantic connections.',
        icon: <Heart size={24} />,
        color: 'var(--neon-pink)',
        image: '/date.png',
        features: [
            { icon: <ShieldCheck size={16} />, title: "Safety Toolkit", text: "Advanced verification and reporting." },
            { icon: <Zap size={16} />, title: "Icebreaker Games", text: "Fun mini-games to bypass small talk." },
            { icon: <Heart size={16} />, title: "No-Ghosting Policy", text: "Built-in accountability and respect." }
        ]
    },
    {
        id: 'hangout',
        title: 'Hangout Zone',
        subtitle: 'Your city is your playground',
        description: 'Keep it casual. Meet for coffee, events, or just chill — no strings attached.',
        icon: <Coffee size={24} />,
        color: 'var(--vivid-orange)',
        image: '/hangout.png',
        features: [
            { icon: <MapPin size={16} />, title: "Local Events", text: "See what's happening around you." },
            { icon: <Users size={16} />, title: "Spontaneous Meetups", text: "Grab coffee or lunch in minutes." },
            { icon: <Zap size={16} />, title: "Group Adventures", text: "From hiking to board game nights." }
        ]
    }
];

const zoneDetails = {
    buddy: {
        what: [
            'Match with people based on shared hobbies and values',
            'Join micro-communities for every interest',
            'Complete daily Kindness Challenges together',
            'Start conversations with fun icebreakers',
            'Build genuine platonic friendships at your own pace'
        ],
        expect: 'A relaxed, pressure-free zone where you explore friendships. No romantic expectations — just real human warmth and connection.',
        rules: [
            'Be respectful and kind at all times',
            'No romantic solicitation in Buddy Zone',
            'Keep personal information private until you feel comfortable',
            'Report anyone who makes you feel uncomfortable'
        ]
    },
    dating: {
        what: [
            'Get matched with compatible romantic interests',
            'Play Icebreaker Games to skip the awkward small talk',
            'Send virtual gifts to express how you feel',
            'Use the Safety Toolkit with verified profiles',
            'Honor the No-Ghosting Policy for respectful interactions'
        ],
        expect: 'An intentional, safe space for romantic connections. Every profile is verified. Every interaction is meant to be meaningful and respectful.',
        rules: [
            'Only connect with people who have consented',
            'No explicit or inappropriate content',
            'Respect every "no" — harassment results in a ban',
            'All activity is monitored for safety compliance'
        ]
    },
    hangout: {
        what: [
            'Browse local events and activities around you',
            'Organize spontaneous meetups — coffee, lunch, walks',
            'Join group adventures like hiking and game nights',
            'Meet new people in a casual, no-pressure setting',
            'Share your city with people who love it too'
        ],
        expect: 'A casual, fun space with zero pressure. Whether you\'re new in town or just want to explore more, Hangout Zone gets you out there.',
        rules: [
            'Hangouts are public — meet in safe, public places',
            'Always let someone know where you\'re going',
            'No inappropriate behavior at meetups',
            'Report any safety concerns immediately'
        ]
    }
};

const zonePageMap = { buddy: 'buddy-zone', dating: 'dating-zone', hangout: 'hangout-zone' };

const ZoneDetail = ({ zone, onClose, onNavigate, showInfo }) => {
    const details = zoneDetails[zone.id];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(15, 23, 42, 0.97)',
                backdropFilter: 'blur(12px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '60px 20px',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: '960px',
                    background: '#0F172A',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 60px 120px -20px rgba(0,0,0,0.8)',
                    position: 'relative',
                    margin: 'auto 0'
                }}
            >
                {/* Hero Banner */}
                <div style={{
                    height: '260px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <img
                        src={zone.image}
                        alt={zone.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }}
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, #0F172A 100%)'
                    }} />

                    {/* Close Button */}
                    <motion.button
                        onClick={onClose}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.25)' }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            position: 'absolute', top: '25px', right: '25px',
                            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.3)', color: 'white',
                            width: '46px', height: '46px', borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', zIndex: 10,
                            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.2s ease'
                        }}
                    >
                        <X size={24} strokeWidth={2.5} />
                    </motion.button>

                    {/* Zone Badge */}
                    <div style={{
                        position: 'absolute', bottom: '24px', left: '30px',
                        display: 'flex', alignItems: 'center', gap: '15px'
                    }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '20px',
                            background: zone.color, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', boxShadow: `0 15px 35px ${zone.color}55`, color: 'white'
                        }}>
                            {React.cloneElement(zone.icon, { size: 30 })}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: zone.color, letterSpacing: '0.1em', marginBottom: '4px' }}>ZONE DETAILS</div>
                            <h2 style={{ fontSize: '2.2rem', fontWeight: '950', color: 'white', lineHeight: 1 }}>{zone.title}</h2>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div style={{ padding: '30px 35px' }}>
                    <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '35px', maxWidth: '700px' }}>
                        {details.expect}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                        {/* What You Can Do */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.12em', color: zone.color, marginBottom: '18px' }}>✦ WHAT YOU CAN DO</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {details.what.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.08 }}
                                        style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.5 }}
                                    >
                                        <span style={{ color: zone.color, fontSize: '1rem', lineHeight: 1.5 }}>›</span>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Zone Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>FEATURES</h4>
                            {zone.features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '14px', border: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <div style={{ padding: '9px', borderRadius: '10px', background: `${zone.color}18`, color: zone.color, display: 'flex', flexShrink: 0 }}>
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h5 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '3px', color: 'white' }}>{feature.title}</h5>
                                        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{feature.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Zone Rules */}
                    <div style={{ background: `${zone.color}08`, border: `1px solid ${zone.color}22`, borderRadius: '18px', padding: '20px 24px', marginBottom: '28px' }}>
                        <h4 style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.12em', color: zone.color, marginBottom: '14px' }}>⚠ ZONE GUIDELINES</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                            {details.rules.map((rule, i) => (
                                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                    <ShieldCheck size={14} color={zone.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                                    {rule}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                        <button className="btn-primary" style={{ padding: '14px 36px', borderRadius: '14px', fontSize: '0.95rem' }}>
                            Join {zone.title}
                        </button>
                        <button
                            onClick={() => { onClose(); onNavigate(zonePageMap[zone.id]); }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: `1px solid ${zone.color}`,
                                color: zone.color,
                                padding: '14px 24px', borderRadius: '14px',
                                fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Full Details →
                        </button>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

const Zones = ({ onNavigate }) => {
    const [activeZone, setActiveZone] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <section id="zones" style={{
            background: '#0F172A',
            color: 'white',
            overflow: 'hidden',
            padding: '80px 8%'
        }}>
            <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <motion.div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--neon-pink)',
                            background: 'rgba(255,0,127,0.08)',
                            padding: '8px 20px',
                            borderRadius: '50px',
                            fontWeight: '800',
                            fontSize: '0.85rem',
                            marginBottom: '20px'
                        }}
                    >
                        <Zap size={14} /> SPACES
                    </motion.div>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: '950', marginBottom: '15px', lineHeight: 1.15 }}>
                        Choose Your <span className="text-gradient">Zone</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', marginInline: 'auto', fontWeight: '500', lineHeight: 1.5 }}>
                        Three distinct spaces — Buddy Zone, Friend Zone, and Hangout Zone. Each designed for a different kind of connection.
                    </p>
                </motion.div>

                <div className="zones-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px'
                }}>
                    {zones.map((zone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => setActiveZone(zone)}
                            style={{
                                position: 'relative',
                                height: '320px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                background: '#1E293B',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '24px',
                                cursor: 'pointer',
                                boxShadow: '0 15px 35px -10px rgba(0,0,0,0.3)'
                            }}
                        >
                            {/* Background Image */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${zone.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 0.2,
                                transition: 'opacity 0.4s ease',
                                zIndex: 0
                            }} className="zone-bg" />

                            {/* Overlay Gradient */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, #0F172A 5%, rgba(15,23,42,0.2) 60%, transparent 100%)',
                                zIndex: 1
                            }} />

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '14px',
                                    background: zone.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '15px',
                                    boxShadow: `0 10px 20px ${zone.color}33`,
                                    color: 'white'
                                }}>
                                    {zone.icon}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '900', marginBottom: '8px' }}>{zone.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, marginBottom: '16px', fontSize: '0.9rem', fontWeight: '500' }}>{zone.description}</p>
                                <motion.div
                                    style={{
                                        color: zone.color,
                                        fontWeight: '800',
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    Enter <ArrowRight size={16} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeZone && (
                    <ZoneDetail
                        zone={activeZone}
                        onNavigate={onNavigate}
                        onClose={() => setActiveZone(null)}
                    />
                )}
            </AnimatePresence>

            <style>{`
                .zone-bg:hover { opacity: 0.4 !important; }
                @media (max-width: 992px) {
                    .zones-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .zones-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Zones;
