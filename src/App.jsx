import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zones from './components/Zones';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import ChildSafetyPolicy from './components/ChildSafetyPolicy';
import RefundPolicy from './components/RefundPolicy';
import BuddyZonePage from './components/BuddyZonePage';
import DatingZonePage from './components/DatingZonePage';
import HangoutZonePage from './components/HangoutZonePage';

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleNavClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Small delay to allow home to mount before scrolling
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Determine if Navbar should be shown
    // User requested no header on policy pages
    const hideHeader = ['/privacy', '/terms', '/refund', '/child-safety', '/buddy-zone', '/dating-zone', '/hangout-zone'].includes(location.pathname);

    return (
        <div style={{ background: 'var(--soft-bg)', minHeight: '100vh', cursor: 'none' }}>
            <CustomCursor />
            {!hideHeader && <Navbar onLogoClick={() => navigate('/')} onNavClick={handleNavClick} />}

            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <div id="zones"><Zones onNavigate={(path) => navigate(`/${path}`)} /></div>
                        <div id="features"><Features /></div>
                        <div id="community"><Community /></div>
                    </>
                } />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/child-safety" element={<ChildSafetyPolicy />} />
                <Route path="/refund" element={<RefundPolicy />} />
                <Route path="/buddy-zone" element={<BuddyZonePage />} />
                <Route path="/dating-zone" element={<DatingZonePage />} />
                <Route path="/hangout-zone" element={<HangoutZonePage />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
