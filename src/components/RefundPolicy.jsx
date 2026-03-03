import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard } from 'lucide-react';

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

const RefundPolicy = ({ onBack }) => {
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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--vivid-orange)', background: 'rgba(255,108,0,0.06)', padding: '8px 20px', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', marginBottom: '20px' }}>
                        <CreditCard size={16} /> REFUND POLICY
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
                        Refund <span className="text-gradient">Policy</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1rem', lineHeight: 1.7 }}>
                        Please read our refund policy carefully before making any purchases on the Little Hearts platform.
                    </p>
                </motion.div>

                <div style={{ background: 'white', borderRadius: '32px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
                    <Section num="1" title="Digital Products & Virtual Items">
                        <p style={{ marginBottom: '12px' }}>Little Hearts may offer:</p>
                        <List items={['Virtual Gifts', 'Profile Frames', 'Premium Features', 'In-App Currency (if applicable)']} />
                        <p style={{ marginTop: '12px' }}>All items are digital and have no real-world monetary value.</p>
                    </Section>

                    <Section num="2" title="General Refund Policy">
                        <p style={{ marginBottom: '12px' }}>Due to the nature of digital products:</p>
                        <List items={['All purchases are final and non-refundable', 'Virtual gifts sent to other users cannot be reversed', 'Used profile frames or activated premium features are non-refundable']} />
                    </Section>

                    <Section num="3" title="Exceptions">
                        <p style={{ marginBottom: '12px' }}>Refunds may be considered in the following cases:</p>
                        <List items={['Accidental duplicate charges', 'Unauthorized transactions', 'Technical errors causing failed delivery of purchased items']} />
                        <p style={{ marginTop: '12px', fontWeight: '700', color: 'var(--dark-text)' }}>Refund requests must be submitted within 7 days of the transaction.</p>
                    </Section>

                    <Section num="4" title="Platform-Based Purchases">
                        <p style={{ marginBottom: '12px' }}>If your purchase was made through Google Play Store, refunds are subject to the respective platform's refund policies. Users must request refunds directly through the platform where the purchase was made.</p>
                        <p>Little Hearts does not control platform payment processing decisions.</p>
                    </Section>

                    <Section num="5" title="Processing Time">
                        <p style={{ marginBottom: '12px' }}>If a refund is approved:</p>
                        <List items={['It may take 5–10 business days to reflect in your account', 'The refund will be issued to the original payment method']} />
                    </Section>

                    <Section num="6" title="Fraud Prevention">
                        <p style={{ marginBottom: '12px' }}>We reserve the right to deny refund requests if:</p>
                        <List items={['There is evidence of misuse', 'Multiple refund claims are made', 'The purchase has already been consumed']} />
                    </Section>

                    <Section num="7" title="Contact Us">
                        <p style={{ marginBottom: '12px' }}>For refund-related inquiries, please contact:</p>
                        <p style={{ fontWeight: '700', color: 'var(--dark-text)' }}>Little Hearts Support</p>
                        <p>📧 <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--neon-pink)', fontWeight: '700' }}>littleheartsapp@gmail.com</a></p>
                        <p style={{ marginTop: '12px' }}>Include: Username, Transaction ID, Date of purchase, Description of issue.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
