import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Zones from './components/Zones';
import Features from './components/Features';
import Community from './components/Community';
import AppPromo from './components/AppPromo';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import RefundPolicy from './components/RefundPolicy';
import BuddyZonePage from './components/BuddyZonePage';
import DatingZonePage from './components/DatingZonePage';
import HangoutZonePage from './components/HangoutZonePage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const goHome = () => {
        setCurrentPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigate = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderPage = () => {
        if (currentPage === 'privacy') return <PrivacyPolicy onBack={goHome} />;
        if (currentPage === 'terms') return <TermsConditions onBack={goHome} />;
        if (currentPage === 'refund') return <RefundPolicy onBack={goHome} />;
        if (currentPage === 'buddy-zone') return <BuddyZonePage onBack={goHome} />;
        if (currentPage === 'dating-zone') return <DatingZonePage onBack={goHome} />;
        if (currentPage === 'hangout-zone') return <HangoutZonePage onBack={goHome} />;

        return (
            <>
                <Hero />
                <Zones onNavigate={navigate} />
                <Features />
                <Community />
                <AppPromo />
            </>
        );
    };

    return (
        <div className="app-container">
            <CustomCursor />
            <ScrollProgress />
            <Navbar onLogoClick={goHome} />
            {renderPage()}
            <Footer onNavigate={navigate} onLogoClick={goHome} />
        </div>
    );
}

export default App;
