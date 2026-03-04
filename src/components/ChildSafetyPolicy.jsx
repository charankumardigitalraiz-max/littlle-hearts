import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowLeft, Baby, Lock, Heart, Eye, Bell, ShieldCheck, LifeBuoy, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlassCard = ({ icon: Icon, title, children, delay = 0, accent = 'var(--vivid-orange)' }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '32px',
            padding: '35px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}
    >
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${accent}, #ffae00)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: `0 8px 16px ${accent}33`
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--dark-text)', letterSpacing: '-0.02em' }}>{title}</h3>
        <div style={{ color: 'var(--light-text)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: '500' }}>
            {children}
        </div>
    </motion.div>
);

const ChildSafetyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,108,0,0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <div style={{ maxWidth: '1200px', marginInline: 'auto', padding: '0 5%', position: 'relative', zIndex: 1 }}>
                <motion.button
                    onClick={() => navigate('/')}
                    whileHover={{ x: -8 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.05)',
                        cursor: 'pointer',
                        color: 'var(--dark-text)',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        marginBottom: '40px',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.03)'
                    }}
                >
                    <ArrowLeft size={18} /> Back to Home
                </motion.button>

                <header style={{ marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--vivid-orange)',
                            background: 'white',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            fontWeight: '900',
                            fontSize: '0.8rem',
                            marginBottom: '24px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.02)',
                            letterSpacing: '0.05em'
                        }}
                    >
                        <ShieldAlert size={18} /> SAFETY FIRST
                    </motion.div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Protecting Our <span style={{ color: 'var(--vivid-orange)' }}>Youngest Hearts</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.6, fontWeight: '500' }}>
                        Safety isn't just a feature; it's our foundation. We've implemented rigorous standards to ensure a secure environment for everyone in our community.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px'
                }}>
                    <GlassCard icon={Baby} title="1. Age Requirement" delay={0.1}>
                        <p>Little Hearts is designed for users aged 13 and older. We use a combination of self-declaration and monitoring to ensure strictly age-appropriate interactions.</p>
                    </GlassCard>

                    <GlassCard icon={ShieldCheck} title="2. Verified Environment" delay={0.2}>
                        <p>We encourage and implement profile verification to ensure that every "heart" on our platform is a real, genuine human being with honest intentions.</p>
                    </GlassCard>

                    <GlassCard icon={Eye} title="3. Active Moderation" delay={0.3} accent="#ff4b2b">
                        <p>Our systems and human moderators work around the clock to detect and remove inappropriate content, harassment, or any behavior that compromises safety.</p>
                    </GlassCard>

                    <GlassCard icon={Bell} title="4. Instant Reporting" delay={0.4}>
                        <p>Found something that doesn't feel right? Our 1-tap reporting tool puts the power in your hands. We investigate every single report with the highest priority.</p>
                    </GlassCard>

                    <GlassCard icon={Lock} title="5. Privacy Controls" delay={0.5}>
                        <p>By default, we minimize the amount of personal data shared. You have full control over who can see your profile and who can start a conversation with you.</p>
                    </GlassCard>

                    <GlassCard icon={Users} title="6. Community Standards" delay={0.6}>
                        <p>We've built a "Kindness-First" culture. Any user found targeting minors or engaging in predatory behavior is permanently banned and reported to authorities if necessary.</p>
                    </GlassCard>

                    <GlassCard icon={LifeBuoy} title="7. Parental Resources" delay={0.7}>
                        <p>We believe in teamwork. We provide resources and clear channels for parents to understand how our app works and how they can support their teen's safety.</p>
                    </GlassCard>

                    <GlassCard icon={Heart} title="8. Our Commitment" delay={0.8}>
                        <p>Your safety is our north star. We continuously evolve our technology and policies to stay ahead of risks and keep Little Hearts a warm, safe space.</p>
                        <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(255,108,0,0.05)', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p style={{ fontSize: '0.85rem', color: 'var(--vivid-orange)', fontWeight: '800' }}>
                                Safety Email: <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'inherit', textDecoration: 'underline' }}>littleheartsapp@gmail.com</a>
                            </p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--vivid-orange)', fontWeight: '800' }}>
                                Support: 7995135561
                            </p>
                            <p style={{ fontSize: '0.8rem', color: 'var(--light-text)', fontWeight: '600', lineHeight: 1.4 }}>
                                Address:<br />
                                1-209, Near by Chervu , Thorredu,<br />
                                East Godavari, Andhra Pradesh-533293
                            </p>
                        </div>
                    </GlassCard>
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    <p>© 2024 Little Hearts Tech. Safe hearts are happy hearts.</p>
                </footer>
            </div>
        </div>
    );
};

export default ChildSafetyPolicy;
