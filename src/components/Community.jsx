import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Users, HeartHandshake } from 'lucide-react';

const Community = () => {
    return (
        <section id="community" style={{ background: 'var(--dark-text)', color: 'white', borderRadius: '60px', margin: '0 2% 40px', padding: '40px 8%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: 'spring' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--bright-cyan)', background: 'rgba(0,242,255,0.1)', padding: '10px 24px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', marginBottom: '24px' }}
                    >
                        <HeartHandshake size={16} /> JOIN THE MOVEMENT
                    </motion.div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '950', lineHeight: 1.05, marginBottom: '25px' }}>
                        Built on <br />
                        <span style={{ color: 'var(--neon-pink)' }}>Pure Kindness</span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '50px', lineHeight: 1.7, maxWidth: '550px' }}>
                        Little Hearts is more than an app — it's a movement to make digital connection feel human again. No negativity, no ghosting, just real warmth.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {[
                            { title: "Zero Tolerance Policy", desc: "No bullying, harassment, or misuse — ever.", icon: <Smile color="var(--bright-cyan)" /> },
                            { title: "No-Ghosting Zone", desc: "Built-in accountability so every connection is respected.", icon: <Heart color="var(--neon-pink)" /> }
                        ].map((item, id) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: id * 0.2 }}
                                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                            >
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '20px' }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{item.title}</h4>
                                    <p style={{ opacity: 0.7, fontSize: '1.05rem' }}>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: 'spring', damping: 20 }}
                    className="glass"
                    style={{ padding: '40px', borderRadius: '50px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{ color: 'var(--neon-pink)', marginBottom: '40px' }}
                    >
                        <Heart size={100} fill="currentColor" stroke="none" />
                    </motion.div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '900' }}>1 Million+ Hearts</h3>
                    <p style={{ marginBottom: '40px', opacity: 0.8, fontSize: '1.15rem' }}>Join a growing community focused on real friendships, meaningful dates, and fun hangouts.</p>
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,255,255,0.2)' }}
                        className="btn-primary"
                        style={{ background: 'white', color: 'var(--dark-text)' }}
                    >
                        Become a Little Heart
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Community;
