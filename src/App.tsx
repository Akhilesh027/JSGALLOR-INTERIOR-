import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { BrandLoader } from './components/BrandLoader';
import { TierLevel } from './types/interior';

// Active Multi-Page Views
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { ServicesPage } from './pages/ServicesPage';
import { EstimatorPage } from './pages/EstimatorPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [selectedTier, setSelectedTier] = useState<TierLevel>('mid_luxury');
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Render active page based on current route
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/portfolio':
        return <PortfolioPage onOpenConsultation={() => setConsultationOpen(true)} />;
      case '/collections':
        return (
          <CollectionsPage
            onSelectTier={setSelectedTier}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
      case '/process':
        return <ProcessPage onOpenConsultation={() => setConsultationOpen(true)} />;
      case '/contact':
        return <ContactPage onOpenConsultation={() => setConsultationOpen(true)} />;
      case '/services':
        return <ServicesPage onOpenConsultation={() => setConsultationOpen(true)} />;
      case '/estimator':
        return (
          <EstimatorPage
            selectedTier={selectedTier}
            onTierChange={setSelectedTier}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
      case '/':
      default:
        return (
          <HomePage
            selectedTier={selectedTier}
            onSelectTier={setSelectedTier}
            onOpenConsultation={() => setConsultationOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] selection:bg-[#c5a880]/30 selection:text-black flex flex-col justify-between">
      {/* Brand Opening Loading Animation */}
      {isLoading && <BrandLoader onComplete={() => setIsLoading(false)} />}

      {/* Global Sticky Frosted Glass Header with 5 Links */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Multi-Page Routed View */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Luxury Footer with Navigation Sitemap */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Persistent Floating Quick Action Button */}
      <FloatingWhatsApp />

      {/* Persistent 3D Design Session Booking Modal */}
      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTier={selectedTier}
      />
    </div>
  );
}

export function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
