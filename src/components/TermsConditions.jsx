import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, UserCheck, ShieldAlert, Scale, CreditCard, Ban, AlertCircle, RefreshCw, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlassCard = ({ icon: Icon, title, children, delay = 0, accent = 'var(--bright-cyan)' }) => (
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
            background: `linear-gradient(135deg, ${accent}, #00d2ff)`,
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

const TermsConditions = () => {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '120px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative backgrounds */}
            <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(0,210,255,0.05) 0%, transparent 70%)', zIndex: 0 }} />

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
                            color: 'var(--bright-cyan)',
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
                        <FileText size={18} /> TERMS OF SERVICE
                    </motion.div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
                        Ground Rules for <span style={{ color: 'var(--bright-cyan)' }}>Hearts</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: 1.6, fontWeight: '500' }}>
                        By joining Little Hearts, you're agreeing to help us build a kind, respectful, and genuine community. Here's how we keep it real.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '24px'
                }}>
                    <GlassCard icon={UserCheck} title="1. Who Can Join" delay={0.1}>
                        <p>You must be 18 years of age or older to use Little Hearts. By creating an account, you promise that everything you tell us — especially your age and identity — is the absolute truth.</p>
                    </GlassCard>

                    <GlassCard icon={ShieldAlert} title="2. Your Mission" delay={0.2}>
                        <p>Be the best version of yourself. Respect others, keep your login info safe, and remember that you're responsible for everything that happens on your profile.</p>
                    </GlassCard>

                    <GlassCard icon={Ban} title="3. The 'No' List" delay={0.3} accent="#ff4b2b">
                        <p>We have zero tolerance for bullying, harassment, explicit content, or scammers. Any attempt to disrupt the kindness of this community will lead to a permanent ban.</p>
                    </GlassCard>

                    <GlassCard icon={Scale} title="4. Safe Interactions" delay={0.4}>
                        <p>Our Buddy, Friend, and Hangout zones are here for connection. While we build the stage, you're the lead — interact at your own pace and always prioritize your safety.</p>
                    </GlassCard>

                    <GlassCard icon={CreditCard} title="5. Virtual Values" delay={0.5}>
                        <p>Virtual gifts and premium features are meant to add fun. They have no real-world cash value and are generally non-refundable unless something goes wrong technically.</p>
                    </GlassCard>

                    <GlassCard icon={AlertCircle} title="6. Account Standing" delay={0.6}>
                        <p>We reserve the right to suspend or close accounts that break these rules. We're here to protect the community above all else.</p>
                    </GlassCard>

                    <GlassCard icon={Info} title="7. The Legal Side" delay={0.7}>
                        <p>Little Hearts is provided "as is." We aren't responsible for user disputes or personal outcomes. We're the platform; you're the heart of it.</p>
                    </GlassCard>

                    <GlassCard icon={RefreshCw} title="8. Staying Current" delay={0.8}>
                        <p>Rules change as we grow. We'll update these terms here, and your continued use of the app means you're still on board with us.</p>
                    </GlassCard>
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: 'var(--light-text)', fontSize: '0.9rem' }}>
                    <p>© 2026 Little Hearts. Kindness is a choice. Thank you for choosing it.</p>
                </footer>
            </div>
        </div>
    );
};

export default TermsConditions;
