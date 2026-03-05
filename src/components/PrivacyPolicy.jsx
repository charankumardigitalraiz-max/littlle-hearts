import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, User, Eye, Lock, Share2, Clock, Baby, HelpCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlassCard = ({ icon: Icon, title, children, delay = 0, gridArea }) => (
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
            gridArea: gridArea,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}
    >
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '16px',
            background: 'var(--gradient-neon)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 8px 16px rgba(255, 0, 127, 0.2)'
        }}>
            <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--dark-text)', letterSpacing: '-0.02em' }}>{title}</h3>
        <div style={{ color: 'var(--light-text)', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: '500' }}>
            {children}
        </div>
    </motion.div>
);

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative backgrounds */}
            <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(255,0,127,0.05) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '30%', height: '30%', background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)', zIndex: 0 }} />

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
                            color: 'var(--neon-pink)',
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
                        <ShieldCheck size={18} /> PRIVACY PROTECTION
                    </motion.div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Your Privacy <span className="text-gradient">Matters</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '700px', lineHeight: 1.6, fontWeight: '500' }}>
                        At Little Hearts, we believe your data belongs to you. We've built our platform with transparency and protection at its core.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px',
                    gridAutoRows: 'minmax(250px, auto)'
                }}>
                    <GlassCard icon={User} title="1. Information We Collect" delay={0.1}>
                        <p>We only collect what's necessary: Name, email, profile photos, and your interests. This helps us create a more personalized experience for you.</p>
                        <ul style={{ marginTop: '10px', paddingLeft: '20px', listStyle: 'disc' }}>
                            <li>Basic Identity Data</li>
                            <li>Buddy & Interaction Preferences</li>
                            <li>Messages & Virtual Gifts</li>
                        </ul>
                    </GlassCard>

                    <GlassCard icon={Eye} title="2. Automatic Insights" delay={0.2}>
                        <p>To keep the app running smoothly, we automatically collect technical data like device type, IP address, and app usage patterns.</p>
                        <p style={{ marginTop: '10px' }}>This helps us fix bugs and improve performance daily.</p>
                    </GlassCard>

                    <GlassCard icon={Lock} title="3. Security First" delay={0.3}>
                        <p>Your data is shielded using industry-standard encryption. We treat your personal information with the same care we treat our own.</p>
                        <p style={{ marginTop: '10px', fontWeight: '700', color: 'var(--neon-pink)' }}>We never sell your personal data to third parties.</p>
                    </GlassCard>

                    <GlassCard icon={Share2} title="4. Sharing with Trust" delay={0.4}>
                        <p>We only share data with trusted partners (like hosting or payment providers) who help us operate, or when required by law to protect user safety.</p>
                    </GlassCard>

                    <GlassCard icon={Clock} title="5. Data Lifespan" delay={0.5}>
                        <p>We keep your info only as long as you're a part of the community. Delete your account, and your data is cleared from our active systems promptly.</p>
                    </GlassCard>

                    <GlassCard icon={Baby} title="6. Younger Hearts" delay={0.6}>
                        <p>Little Hearts is for users 13 and older. We do not knowingly collect information from anyone under this age limit.</p>
                    </GlassCard>

                    <GlassCard icon={HelpCircle} title="7. Your Choice" delay={0.7}>
                        <p>You have the right to access, correct, or delete your data at any time. Your settings are always in your hands.</p>
                        <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(255,0,127,0.05)', borderRadius: '16px' }}>
                            <p style={{ fontSize: '0.85rem' }}>Support: <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--neon-pink)', fontWeight: '800' }}>littleheartsapp@gmail.com</a></p>
                        </div>
                    </GlassCard>

                    <GlassCard icon={FileText} title="8. Policy Evolution" delay={0.8}>
                        <p>As we grow, this policy might evolve. We'll always keep you informed of major changes so you're never in the dark.</p>
                    </GlassCard>
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    <p>© 2024 Little Hearts. Protecting hearts, protecting privacy.</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
