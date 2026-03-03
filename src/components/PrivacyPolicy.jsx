import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

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

const SubSection = ({ title, items }) => (
    <div style={{ marginBottom: '16px' }}>
        <p style={{ fontWeight: '700', color: 'var(--dark-text)', marginBottom: '6px' }}>{title}</p>
        <List items={items} />
    </div>
);

const PrivacyPolicy = ({ onBack }) => {
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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--neon-pink)', background: 'rgba(255,0,127,0.06)', padding: '8px 20px', borderRadius: '50px', fontWeight: '800', fontSize: '0.85rem', marginBottom: '20px' }}>
                        <ShieldCheck size={16} /> PRIVACY POLICY
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '950', color: 'var(--dark-text)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
                        Your Privacy <span className="text-gradient">Matters</span>
                    </h1>
                    <p style={{ color: 'var(--light-text)', fontSize: '1rem', lineHeight: 1.7 }}>
                        At Little Hearts, we are committed to protecting your personal information and your right to privacy. This policy explains what information we collect, how we use it, and your rights.
                    </p>
                </motion.div>

                <div style={{ background: 'white', borderRadius: '32px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
                    <Section num="1" title="Information We Collect">
                        <p style={{ marginBottom: '16px' }}>We collect information necessary to provide our services.</p>
                        <SubSection
                            title="A. Information You Provide"
                            items={['Name or Username', 'Email address or phone number', 'Profile photo', 'Gender, age, bio, interests', 'Messages sent in Buddy Zone, Friend Zone, and Hangout Zone', 'Virtual gift activity']}
                        />
                        <SubSection
                            title="B. Automatically Collected Information"
                            items={['Device type and operating system', 'IP address', 'App usage data', 'Log and crash reports']}
                        />
                    </Section>

                    <Section num="2" title="How We Use Your Information">
                        <p style={{ marginBottom: '12px' }}>We use your data to:</p>
                        <List items={['Create and manage your account', 'Enable messaging and interactions', 'Process virtual gifts', 'Improve app performance', 'Prevent fraud and misuse', 'Provide customer support']} />
                        <p style={{ marginTop: '16px', fontWeight: '700', color: 'var(--dark-text)' }}>We do not sell your personal information.</p>
                    </Section>

                    <Section num="3" title="Data Storage & Security">
                        <p>We use reasonable security measures to protect your information from unauthorized access or misuse.</p>
                        <p style={{ marginTop: '10px' }}>However, no online system is 100% secure.</p>
                    </Section>

                    <Section num="4" title="Sharing of Information">
                        <p style={{ marginBottom: '12px' }}>We may share information:</p>
                        <List items={['With trusted service providers (hosting, analytics, payment services)', 'If required by law', 'To protect user safety']} />
                        <p style={{ marginTop: '12px' }}>Private chats are visible only to participating users.</p>
                    </Section>

                    <Section num="5" title="Data Retention">
                        <p>We keep your information only as long as necessary to provide services.</p>
                        <p style={{ marginTop: '10px' }}>If you delete your account, your data will be removed within a reasonable period, except where legally required.</p>
                    </Section>

                    <Section num="6" title="Children's Privacy">
                        <p>Little Hearts is not intended for children under 13 years of age (or local minimum age requirement). We do not knowingly collect data from children.</p>
                    </Section>

                    <Section num="7" title="Your Rights">
                        <p style={{ marginBottom: '12px' }}>You may:</p>
                        <List items={['Request access to your data', 'Request corrections', 'Request account deletion']} />
                        <p style={{ marginTop: '16px' }}>Contact us at: <a href="mailto:littleheartsapp@gmail.com" style={{ color: 'var(--neon-pink)', fontWeight: '700' }}>📧 littleheartsapp@gmail.com</a></p>
                    </Section>

                    <Section num="8" title="Policy Updates">
                        <p>We may update this Privacy Policy from time to time. Continued use of the app means you accept the updates.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
