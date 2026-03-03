import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, MapPin, Users, Zap, Star, ShieldCheck, Gift, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pricingPlans = [
    {
        name: 'Free',
        price: '₹0',
        period: '/ month',
        color: 'rgba(0,0,0,0.02)',
        border: 'rgba(0,0,0,0.05)',
        badge: null,
        features: [
            'Access to Hangout Zone',
            '3 hangout requests per day',
            'Browse local events',
            'Basic profile customization',
            'Standard messaging'
        ],
        cta: 'Get Started Free',
        ctaStyle: { background: 'white', color: 'var(--dark-text)', border: '1px solid rgba(0,0,0,0.1)' }
    },
    {
        name: 'Hangout Plus',
        price: '₹149',
        period: '/ month',
        color: 'rgba(255,108,0,0.05)',
        border: 'var(--vivid-orange)',
        badge: 'MOST POPULAR',
        features: [
            'Unlimited hangout requests',
            'Priority event discovery',
            'Send 10 Virtual Gifts/month',
            'Premium profile frame',
            'See who viewed your profile',
            'No-ad experience'
        ],
        cta: 'Start Hangout Plus',
        ctaStyle: { background: 'var(--vivid-orange)', color: 'white' }
    },
    {
        name: 'Social Pro',
        price: '₹299',
        period: '/ month',
        color: 'rgba(157,80,187,0.05)',
        border: 'var(--deep-purple)',
        badge: 'BEST VALUE',
        features: [
            'Everything in Hangout Plus',
            'Unlimited Virtual Gifts',
            'Exclusive Pro profile badges',
            'Early access to new events',
            'Priority support',
            'Access all 3 zones with premium'
        ],
        cta: 'Go Social Pro',
        ctaStyle: { background: 'var(--deep-purple)', color: 'white' }
    }
];

const virtualGifts = [
    { emoji: '☕', name: 'Coffee Cheers', price: '₹9', desc: 'Send a virtual coffee to your hangout buddy.' },
    { emoji: '🍕', name: 'Pizza Party', price: '₹15', desc: 'A fun gift for your foodie hangout partners.' },
    { emoji: '🎮', name: 'Game Night', price: '₹19', desc: 'Perfect for gaming buddies and game night plans.' },
    { emoji: '🎉', name: 'Party Popper', price: '₹25', desc: 'Celebrate a great hangout with this festive gift.' },
];

const HangoutZonePage = () => {
    const navigate = useNavigate();
    const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }) };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingBottom: '100px' }}>
            {/* Hero */}
            <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                <img src="/hangout.png" alt="Hangout Zone" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.45)' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.4) 0%, var(--soft-bg) 100%)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 8% 50px' }}>
                    <motion.button onClick={() => navigate('/')} whileHover={{ x: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--vivid-orange)', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '20px', padding: 0 }}>
                        <ArrowLeft size={18} /> Back to Experience
                    </motion.button>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,108,0,0.12)', border: '1px solid var(--vivid-orange)', padding: '6px 18px', borderRadius: '50px', color: 'var(--vivid-orange)', fontWeight: '800', fontSize: '0.8rem', marginBottom: '16px', width: 'fit-content' }}>
                        <Coffee size={14} /> HANGOUT ZONE
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: '950', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
                        Your City is Your <span style={{ color: 'var(--vivid-orange)' }}>Playground</span>
                    </h1>
                    <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
                        Meet for coffee, explore local events, or plan spontaneous adventures. A casual, zero-pressure zone built for fun.
                    </p>
                </div>
            </div>

            <div style={{ padding: '60px 8%', maxWidth: '1200px', marginInline: 'auto' }}>
                {/* About Section */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--vivid-orange)', background: 'rgba(255,108,0,0.08)', padding: '6px 18px', borderRadius: '50px', fontWeight: '800', fontSize: '0.8rem', marginBottom: '20px' }}>
                        <Coffee size={14} /> ABOUT THIS ZONE
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            { icon: <MapPin size={22} />, title: 'Local & Live', desc: 'Discover events and meetups happening around you right now. Your next adventure is just around the corner.' },
                            { icon: <Users size={22} />, title: 'Zero Pressure', desc: 'No romantic expectations, no awkward situations. Just casual meetups with interesting people in your city.' },
                            { icon: <Zap size={22} />, title: 'Spontaneous Plans', desc: 'Organize or join events in minutes — coffee, lunch, hikes, board game nights, cinema runs, and more.' },
                        ].map((item, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '28px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,108,0,0.1)', color: 'var(--vivid-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: '900', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ color: 'var(--light-text)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Pricing */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2.2rem', fontWeight: '950', marginBottom: '12px' }}>Simple, Transparent <span style={{ color: 'var(--vivid-orange)' }}>Pricing</span></h2>
                        <p style={{ color: 'var(--light-text)', maxWidth: '500px', marginInline: 'auto', lineHeight: 1.7 }}>Start for free, upgrade when you're ready to do more.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                        {pricingPlans.map((plan, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                whileHover={{ y: -8 }}
                                style={{ background: plan.color, border: `1px solid ${plan.border}`, borderRadius: '24px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                                {plan.badge && (
                                    <div style={{ position: 'absolute', top: '18px', right: '18px', background: 'var(--vivid-orange)', color: 'white', fontSize: '0.65rem', fontWeight: '900', padding: '4px 12px', borderRadius: '50px', letterSpacing: '0.08em' }}>{plan.badge}</div>
                                )}
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '900', marginBottom: '8px' }}>{plan.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '24px' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: '950', color: 'var(--vivid-orange)', lineHeight: 1 }}>{plan.price}</span>
                                    <span style={{ color: 'var(--light-text)', fontSize: '0.9rem', marginBottom: '4px' }}>{plan.period}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                                    {plan.features.map((f, j) => (
                                        <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'var(--light-text)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                                            <CheckCircle size={15} color="var(--vivid-orange)" style={{ flexShrink: 0, marginTop: '1px' }} /> {f}
                                        </div>
                                    ))}
                                </div>
                                <button style={{ width: '100%', padding: '13px', borderRadius: '14px', border: 'none', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', ...plan.ctaStyle }}>{plan.cta}</button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Virtual Gifts */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp} style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '10px' }}>Virtual <span style={{ color: 'var(--vivid-orange)' }}>Gifts</span></h2>
                    <p style={{ color: 'var(--light-text)', marginBottom: '30px', fontSize: '0.95rem' }}>Send a fun digital gift to make your hangout plans even more exciting. All gifts are digital with no real-world value.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {virtualGifts.map((g, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                                whileHover={{ scale: 1.03 }}
                                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '18px', padding: '24px', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{g.emoji}</div>
                                <h4 style={{ fontWeight: '900', fontSize: '1rem', marginBottom: '6px', color: 'var(--dark-text)' }}>{g.name}</h4>
                                <p style={{ color: 'var(--light-text)', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '14px' }}>{g.desc}</p>
                                <div style={{ color: 'var(--vivid-orange)', fontWeight: '900', fontSize: '1.1rem' }}>{g.price}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
                    style={{ textAlign: 'center', padding: '60px 40px', background: 'linear-gradient(135deg, rgba(255,108,0,0.08) 0%, rgba(255,108,0,0.02) 100%)', border: '1px solid rgba(255,108,0,0.12)', borderRadius: '32px' }}>
                    <Coffee size={48} color="var(--vivid-orange)" style={{ marginBottom: '20px', opacity: 0.7 }} />
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '950', marginBottom: '14px' }}>Ready to <span style={{ color: 'var(--vivid-orange)' }}>Hang Out?</span></h2>
                    <p style={{ color: 'var(--light-text)', marginBottom: '30px', fontSize: '1rem', lineHeight: 1.7 }}>Download Little Hearts and enter the Hangout Zone today. Your next adventure is waiting.</p>
                    <button className="btn-primary" style={{ padding: '16px 44px', fontSize: '1.05rem' }}>Download the App</button>
                </motion.div>
            </div>
        </div>
    );
};

export default HangoutZonePage;
