import React, { useState } from 'react';
import { Currency, TourPackage, Destination } from './types/travel';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { PopularToursSection } from './components/PopularToursSection';
import { TripPlannerSection } from './components/TripPlannerSection';
import { PhotographySection } from './components/PhotographySection';
import { WhyTravelSection } from './components/WhyTravelSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { TourDetailModal } from './components/TourDetailModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { UnknownTravelAndToursPage } from './views/UnknownTravelAndToursPage';
import { DestinationsPage } from './views/DestinationsPage';
import { PhotographyPage } from './views/PhotographyPage';
import { AboutUsPage } from './views/AboutUsPage';
import { ContactPage } from './views/ContactPage';
import { TOURS, ASSETS } from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals state
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingTourId, setBookingTourId] = useState<string | undefined>(undefined);
  const [plannerSelectedTourTitle, setPlannerSelectedTourTitle] = useState<string | undefined>(undefined);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    location: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    location: '',
  });

  const handleOpenBooking = (tourId?: string) => {
    setBookingTourId(tourId);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (imageUrl: string, title: string, location: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      location,
    });
  };

  const handlePlanTripToDest = (destName: string) => {
    setActiveTab('home');
    setPlannerSelectedTourTitle(`Exploring ${destName}`);
    setTimeout(() => {
      document.getElementById('trip-planner')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToSection = (id: string) => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101419] text-[#e0e2ea] flex flex-col font-sans selection:bg-[#d4af37] selection:text-[#554300]">
      {/* Top Fixed Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Area */}
      <main className="w-full pt-28 bg-[#101419] flex-1">
        {activeTab === 'home' && (
          <div className="flex flex-col w-full animate-in fade-in duration-300">
            {/* Hero Section */}
            <Hero
              onPlanTripClick={() => scrollToSection('trip-planner')}
              onExploreToursClick={() => scrollToSection('popular-tours')}
              onScrollToDestinations={() => scrollToSection('destinations')}
            />

            {/* Section 1: Destinations */}
            <DestinationsSection
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              onViewAllDestinations={() => {
                setActiveTab('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 2: Popular Tours */}
            <PopularToursSection
              currency={currency}
              onSelectTour={(tour) => setSelectedTour(tour)}
              onBookTour={(tour) => handleOpenBooking(tour.id)}
              onViewAllTours={() => {
                setActiveTab('tours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Section 3: Bespoke Trip Planner */}
            <TripPlannerSection
              currency={currency}
              initialTourTitle={plannerSelectedTourTitle}
            />

            {/* Section 4: Photography & Cinematic Tours */}
            <PhotographySection
              currency={currency}
              onAddPhotographyPackage={(pkg) => {
                setPlannerSelectedTourTitle(`With ${pkg.name}`);
                scrollToSection('trip-planner');
              }}
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Section 5: Why Travel With Us */}
            <WhyTravelSection />

            {/* Section 6: How It Works */}
            <TimelineSection />

            {/* Section 7: Cinematic Photo Gallery */}
            <GallerySection onOpenLightbox={handleOpenLightbox} />

            {/* Section 8: Testimonials */}
            <TestimonialsSection />

            {/* Section 9: Final Call to Action */}
            <section className="w-full py-20 relative overflow-hidden bg-[#181c21]">
              <div className="absolute inset-0 z-0">
                <img
                  alt="Ceylon Coastline Sunset"
                  className="w-full h-full object-cover opacity-20"
                  src={ASSETS.galle}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101419] via-[#101419]/90 to-[#101419]" />
              </div>

              <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center">
                <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] mb-2">
                  Begin Your Journey
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e0e2ea] max-w-3xl leading-tight">
                  Ready To Discover Sri Lanka Your Way?
                </h2>
                <p className="text-base sm:text-lg text-[#d0c5af] max-w-2xl mt-2 mb-8 font-light">
                  Tell us what kind of experience you want. We'll help you build your perfect Sri Lankan journey with zero obligation.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => scrollToSection('trip-planner')}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-widest uppercase shadow-[0_12px_32px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    Plan My Trip
                  </button>

                  <a
                    href="https://wa.me/94778084913?text=Ayubowan%20Unknown%20Traveler!%20I%20would%20like%20to%20plan%20a%20private%20tour."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#262a30] border border-[#d4af37]/40 text-[#e0e2ea] hover:text-[#f2ca50] text-xs font-semibold tracking-widest uppercase transition-all"
                  >
                    <span>WhatsApp Us (+94 77 808 4913)</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Section 10: Contact & Expedition Inquiry */}
            <ContactSection />
          </div>
        )}

        {/* Dedicated Unknown Travel & Tours Page */}
        {activeTab === 'tours' && (
          <UnknownTravelAndToursPage
            currency={currency}
            onSelectTour={(tour) => setSelectedTour(tour)}
            onBookTour={(tour) => handleOpenBooking(tour.id)}
            onPlanCustomTrip={() => {
              setActiveTab('home');
              setTimeout(() => {
                document.getElementById('trip-planner')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        )}

        {/* Dedicated Destinations Page */}
        {activeTab === 'destinations' && (
          <DestinationsPage
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onPlanTripToDest={handlePlanTripToDest}
          />
        )}

        {/* Dedicated Photography Page */}
        {activeTab === 'photography' && (
          <PhotographyPage
            currency={currency}
            onOpenBooking={() => handleOpenBooking()}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {/* Dedicated About Us Page */}
        {activeTab === 'about-us' && (
          <AboutUsPage
            onPlanTrip={() => {
              setActiveTab('home');
              setTimeout(() => {
                document.getElementById('trip-planner')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        )}

        {/* Dedicated Contact Page */}
        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Floating Bottom WhatsApp Widget */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

      {/* Modals & Overlays */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        currency={currency}
        onBookNow={(tour) => handleOpenBooking(tour.id)}
      />

      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTrip={handlePlanTripToDest}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setBookingTourId(undefined);
        }}
        currency={currency}
        initialTourId={bookingTourId}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        location={lightbox.location}
      />
    </div>
  );
}
