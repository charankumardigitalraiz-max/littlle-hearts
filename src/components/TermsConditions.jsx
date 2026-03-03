import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';

const Section = ({ num, title, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '40px' }}
    >
        <h2 style={{ fontSize: '1.3rem', fontWeight: '900', color: 'var(--dark-text)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ background: 'var(--gradient-neon)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{num}.</span>
            {title}
        </h2>
        <div style={{ color: 'var(--light-text)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            {children}
        </div>
    </motion.div>
);

const List = ({ items }) => (
    <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', margin: '10px 0' }}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);

const TermsConditions = ({ onBack }) => {
    return (
        <div style={{ minHeight: '100vh', background: 'var(--soft-bg)', paddingTop: '100px', paddingBottom: '80px' }}>
            <div style={{ maxWidth: '860px', marginInline: 'auto', padding: '0 8%' }}>
                <motion.button
                    onClick={onBack}
                    whileHover={{ x: -5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--neon-pink)', fontWeight: '800', fontSize: '0.95rem', marginBottom: '40px', padding: 0 }}
                >
                    <ArrowLeft size={18} /> Back to Home
                </motion.button>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--bright-cyan)', background: 'rgba(0,210,255,0.06)', padding: '8px 20px', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', marginBottom: '20px' }}>
                        <FileText size={16} /> TERMS & CONDITIONS
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1rem', lineHeight: 1.7 }}>
                        By using Little Hearts, you agree to the following terms. Please read them carefully before using our platform.
                    </p>
                </motion.div>

                <div style={{ background: 'white', borderRadius: '32px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
                    <Section num="1" title="User Eligibility">
                        <List items={['You must be at least 13 years old (or legal minimum age in your country).', 'You confirm that all information provided is accurate.']} />
                    </Section>

                    <Section num="2" title="User Responsibilities">
                        <p style={{ marginBottom: '12px' }}>You agree to:</p>
                        <List items={['Behave respectfully', 'Provide truthful information', 'Keep your login credentials secure']} />
                        <p style={{ marginTop: '12px' }}>You are responsible for all activity under your account.</p>
                    </Section>

                    <Section num="3" title="Prohibited Activities">
                        <p style={{ marginBottom: '12px' }}>You may <strong>NOT</strong>:</p>
                        <List items={['Harass, threaten, or bully others', 'Share explicit or illegal content', 'Impersonate another person', 'Scam or mislead users', 'Attempt to hack or disrupt the app']} />
                        <p style={{ marginTop: '12px', fontWeight: '700', color: 'var(--dark-text)' }}>Violation may result in suspension or permanent ban.</p>
                    </Section>

                    <Section num="4" title="Communication Zones">
                        <p style={{ marginBottom: '12px' }}>Buddy Zone, Friend Zone, and Hangout Zone are platforms for user interaction. Little Hearts does not guarantee:</p>
                        <List items={['Friendship success', 'Compatibility', 'Behavior of other users']} />
                        <p style={{ marginTop: '12px' }}>You interact at your own risk.</p>
                    </Section>

                    <Section num="5" title="Virtual Gifts & Purchases">
                        <List items={['Virtual gifts are digital items with no real-world monetary value.', 'Purchases are non-refundable unless required by law.', 'Misuse of digital features may result in restrictions.']} />
                    </Section>

                    <Section num="6" title="Account Suspension">
                        <p>We reserve the right to suspend or permanently terminate accounts that violate these Terms.</p>
                    </Section>

                    <Section num="7" title="Disclaimer of Liability">
                        <p style={{ marginBottom: '12px' }}>Little Hearts is provided "as is." We are not responsible for:</p>
                        <List items={['User-generated content', 'Disputes between users', 'Emotional or personal outcomes', 'Service interruptions']} />
                    </Section>

                    <Section num="8" title="Changes to Terms">
                        <p>We may update these Terms at any time. Continued use means acceptance of the updated Terms.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
