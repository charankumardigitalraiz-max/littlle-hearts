import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Zap, Sparkles, ShieldCheck, MessageCircle, Heart, Star } from 'lucide-react';

const BuddyZonePage = ({ onBack }) => {
    const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

    return (
        <div style={{ minHeight: '100vh', background: '#0F172A', color: 'white', paddingTop: '90px' }}>
            {/* Hero */}
            <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                <img src="/friendship_1.png" alt="Buddy Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, #0F172A 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8% 50px' }}>
                    <motion.button onClick={onBack} whileHover={{ x: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--bright-cyan)', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '20px', padding: 0 }}>
                        <ArrowLeft size={18} /> Back
                    </motion.button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,210,255,0.12)', border: '1px solid var(--bright-cyan)', padding: '6px 18px', borderRadius: '50px', color: 'var(--bright-cyan)', fontWeight: '800', fontSize: '0.8rem', marginBottom: '16px', width: 'fit-content' }}>
                        <Users size={14} /> BUDDY ZONE
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: '950', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
                        Find Your <span style={{ color: 'var(--bright-cyan)' }}>Platonic Match</span>
                    </h1>
                    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
                        A relaxed, pressure-free zone where you explore friendships. No romantic expectations — just real human warmth and connection.
                    </p>
                </div>
            </div>

            <div style={{ padding: '60px 8%', maxWidth: '1200px', marginInline: 'auto' }}>
                {/* What Is Buddy Zone */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bright-cyan)', background: 'rgba(0,210,255,0.08)', padding: '6px 18px', borderRadius: '50px', fontWeight: '800', fontSize: '0.8rem', marginBottom: '20px' }}>
                        <Sparkles size={14} /> ABOUT THIS ZONE
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { icon: <Users size={22} />, title: 'Real Friendships', desc: 'Match with like-minded people based on shared hobbies, values, and interests. No pressure — friendships grow naturally here.' },
                            { icon: <MessageCircle size={22} />, title: 'Meaningful Conversations', desc: 'Start with fun icebreakers and daily challenges that make connecting feel effortless and genuine.' },
                            { icon: <Heart size={22} />, title: 'Kindness First', desc: 'Every interaction is grounded in respect and warmth. This is a safe space built for positive human connection.' },
                        ].map((item, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0,210,255,0.12)', color: 'var(--bright-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Features */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '30px' }}>Zone <span style={{ color: 'var(--bright-cyan)' }}>Features</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                        {[
                            { icon: <Zap size={20} />, title: 'Friendship Matcher', desc: 'AI-powered compatibility matching based on your personality, interests, and communication style.' },
                            { icon: <Sparkles size={20} />, title: 'Kindness Challenges', desc: 'Daily acts of care to do with a new friend — from sharing a compliment to trying a new activity together.' },
                            { icon: <Users size={20} />, title: 'Interest Groups', desc: 'Join micro-communities built around every hobby — music, books, gaming, sports, travel, and more.' },
                            { icon: <MessageCircle size={20} />, title: 'Icebreaker Games', desc: 'Mini-games and prompts that make starting a conversation natural and fun.' },
                            { icon: <Star size={20} />, title: 'Profile Badges', desc: 'Earn badges for completing challenges and being an active, kind community member.' },
                            { icon: <ShieldCheck size={20} />, title: 'Verified Users', desc: 'All users are verified for safety. Report any concerns instantly from within the chat.' },
                        ].map((f, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} variants={fadeUp}
                                style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '20px' }}>
                                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(0,210,255,0.1)', color: 'var(--bright-cyan)', display: 'flex', flexShrink: 0, height: 'fit-content' }}>{f.icon}</div>
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
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '30px' }}>How It <span style={{ color: 'var(--bright-cyan)' }}>Works</span></h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                        {[
                            { step: '01', title: 'Set Up Your Profile', desc: 'Add your name, photo, interests, hobbies, and a short bio about yourself.' },
                            { step: '02', title: 'Enter Buddy Zone', desc: 'Switch to Buddy Zone from the home screen — your safe space for platonic connections.' },
                            { step: '03', title: 'Get Matched', desc: 'Our AI matches you with compatible friends based on shared values and interests.' },
                            { step: '04', title: 'Start a Conversation', desc: 'Use icebreakers or jump straight in — every chat is a chance for a real friendship.' },
                            { step: '05', title: 'Grow Together', desc: 'Complete Kindness Challenges, join Interest Groups, and build friendships that last.' },
                        ].map((s, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '24px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: '950', color: 'rgba(0,210,255,0.2)', minWidth: '60px', lineHeight: 1 }}>{s.step}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '6px', color: 'var(--bright-cyan)' }}>{s.title}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.65 }}>{s.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Guidelines & Privacy */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
                        style={{ background: 'rgba(0,210,255,0.06)', border: '1px solid rgba(0,210,255,0.15)', borderRadius: '20px', padding: '28px' }}>
                        <h3 style={{ color: 'var(--bright-cyan)', fontWeight: '900', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '18px' }}>⚠ ZONE GUIDELINES</h3>
                        {['Be respectful and kind at all times', 'No romantic solicitation in Buddy Zone', 'Keep personal info private until comfortable', 'Report anyone making you feel uncomfortable', 'No harassment or bullying — results in a ban'].map((r, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                <ShieldCheck size={15} color="var(--bright-cyan)" style={{ flexShrink: 0, marginTop: '2px' }} /> {r}
                            </div>
                        ))}
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
                        <h3 style={{ color: 'rgba(255,255,255,0.5)', fontWeight: '900', fontSize: '1rem', letterSpacing: '0.08em', marginBottom: '18px' }}>🔒 PRIVACY & TERMS</h3>
                        {['Messages are visible only to participating users', 'We collect profile & usage data to run this zone', 'Your data is never sold to third parties', 'You must be 13+ to use this zone', 'Little Hearts does not guarantee friendship outcomes', 'Contact: littleheartsapp@gmail.com'].map((r, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '12px', color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                <span style={{ color: 'var(--neon-pink)', flexShrink: 0 }}>•</span> {r}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
                    style={{ textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(0,210,255,0.08) 0%, rgba(0,210,255,0.02) 100%)', border: '1px solid rgba(0,210,255,0.12)', borderRadius: '32px' }}>
                    <Users size={48} color="var(--bright-cyan)" style={{ marginBottom: '20px', opacity: 0.7 }} />
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '950', marginBottom: '14px' }}>Ready to Find Your <span style={{ color: 'var(--bright-cyan)' }}>Buddy?</span></h2>
                    <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '30px', fontSize: '1rem', lineHeight: 1.7 }}>Download Little Hearts and enter the Buddy Zone today. Real friendships are waiting.</p>
                    <button className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem' }}>Download the App</button>
                </motion.div>
            </div>
        </div>
    );
};

export default BuddyZonePage;
