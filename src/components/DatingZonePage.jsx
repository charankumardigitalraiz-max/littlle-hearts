import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ShieldCheck, Zap, ArrowLeft, Camera, Shield, Search, MessageSquare, Gamepad, Lock, Star, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DatingZonePage = () => {
    const navigate = useNavigate();
    const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingBottom: '100px' }}>
            {/* Hero */}
            <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                <img src="/date.png" alt="Dating Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, var(--soft-bg) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8% 50px' }}>
                    <motion.button onClick={() => navigate('/')} whileHover={{ x: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--neon-pink)', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '20px', padding: 0 }}>
                        <ArrowLeft size={18} /> Back to Experience
                    </motion.button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,0,127,0.12)', border: '1px solid var(--neon-pink)', padding: '6px 18px', borderRadius: '50px', color: 'var(--neon-pink)', fontWeight: '800', fontSize: '0.8rem', marginBottom: '16px', width: 'fit-content' }}>
                        <Heart size={14} fill="var(--neon-pink)" /> DATING ZONE
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: '950', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
                        Intentional Dating for <span style={{ color: 'var(--neon-pink)' }}>Modern Hearts</span>
                    </h1>
                    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
                        An intentional, safe space for romantic connections. Every profile is verified. Every interaction is meant to be meaningful and respectful.
                    </p>
                </div>
            </div>

            <div style={{ padding: '60px 8%', maxWidth: '1200px', marginInline: 'auto' }}>
                {/* About */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--neon-pink)', background: 'rgba(255,0,127,0.08)', padding: '6px 18px', borderRadius: '50px', fontWeight: '800', fontSize: '0.8rem', marginBottom: '20px' }}>
                        <Heart size={14} /> ABOUT THIS ZONE
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { icon: <Heart size={22} />, title: 'Romantic Connections', desc: 'A dedicated space for people seeking meaningful relationships — not just a swipe. We believe in quality over quantity.' },
                            { icon: <ShieldCheck size={22} />, title: 'Verified & Safe', desc: 'Every profile is verified. Advanced safety tools let you block, report, and stay in full control of your experience.' },
                            { icon: <Lock size={22} />, title: 'No-Ghosting Policy', desc: 'We believe every person deserves respect. Our built-in accountability ensures interactions stay dignified and real.' },
                        ].map((item, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,0,127,0.1)', color: 'var(--neon-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '30px' }}>Zone <span style={{ color: 'var(--neon-pink)' }}>Features</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {[
                            { icon: <ShieldCheck size={20} />, title: 'Safety Toolkit', desc: 'Profile verification, instant reporting, blocking tools, and a support team that takes safety seriously.' },
                            { icon: <Zap size={20} />, title: 'Icebreaker Games', desc: 'Fun mini-games designed to spark meaningful conversations and skip the awkward small talk.' },
                            { icon: <Heart size={20} />, title: 'No-Ghosting Policy', desc: 'Built-in accountability so both people feel respected — no more being left on read.' },
                            { icon: <Gift size={20} />, title: 'Virtual Gifts', desc: 'Send thoughtful digital gifts to express how you feel. A small gesture that means a lot.' },
                            { icon: <Star size={20} />, title: 'Smart Matching', desc: 'AI-powered match suggestions based on personality, values, and relationship goals.' },
                            { icon: <MessageSquare size={20} />, title: 'Private Messaging', desc: 'Secure, private chats visible only to you and your match. Full privacy, always.' },
                        ].map((f, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
                                style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '20px' }}>
                                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,0,127,0.1)', color: 'var(--neon-pink)', display: 'flex', flexShrink: 0, height: 'fit-content' }}>{f.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '6px' }}>{f.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* How It Works */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '30px' }}>How It <span style={{ color: 'var(--neon-pink)' }}>Works</span></h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {[
                            { step: '01', title: 'Complete Your Profile', desc: 'Add a verified photo, your age, bio, and what you are looking for in a relationship.' },
                            { step: '02', title: 'Enter Dating Zone', desc: 'Switch to Dating Zone — your dedicated space for intentional romantic connections.' },
                            { step: '03', title: 'Smart Match', desc: 'Receive curated match suggestions based on compatibility, not just photos.' },
                            { step: '04', title: 'Connect Respectfully', desc: 'Send an icebreaker, a virtual gift, or start a sincere conversation.' },
                            { step: '05', title: 'Build a Real Bond', desc: 'Take things at your pace in a safe, monitored environment designed for genuine connection.' },
                        ].map((s, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '24px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '950', color: 'rgba(255,0,127,0.2)', minWidth: '60px', lineHeight: 1 }}>{s.step}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '6px', color: 'var(--neon-pink)' }}>{s.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.65 }}>{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Guidelines */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
                        style={{ background: 'rgba(255,0,127,0.05)', border: '1px solid rgba(255,0,127,0.15)', borderRadius: '20px', padding: '28px' }}>
                        <h3 style={{ color: 'var(--neon-pink)', fontWeight: '900', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '18px' }}>⚠ ZONE GUIDELINES</h3>
                        {['Only connect with users who have consented', 'No explicit or inappropriate content — ever', 'Respect every "no" — harassment results in a permanent ban', 'No fake profiles or impersonation', 'All activity is monitored for safety compliance'].map((r, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', color: 'var(--light-text)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                <ShieldCheck size={15} color="var(--neon-pink)" style={{ flexShrink: 0, marginTop: '2px' }} /> {r}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DatingZonePage;
