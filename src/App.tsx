import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { MobileFrame } from './components/common/MobileFrame';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { HomeView } from './components/home/HomeView';
import { PlayView } from './components/play/PlayView';
import { MoneyMap } from './components/map/MoneyMap';
import { ProgressView } from './components/progress/ProgressView';
import { YouView } from './components/profile/YouView';
import { MakeItSimple } from './components/tools/MakeItSimple';
import { MicroVideoModal } from './components/tools/MicroVideoModal';
import { AskMoneeModal } from './components/tools/AskMoneeModal';
import { BadgeUnlockModal } from './components/common/BadgeUnlockModal';
import { DemoTourModal } from './components/common/DemoTourModal';

const AppContent: React.FC = () => {
  const { isOnboardingComplete, activeTab } = useApp();

  return (
    <MobileFrame>
      {!isOnboardingComplete ? (
        <OnboardingFlow />
      ) : (
        <>
          <Header />
          <main className="flex-1 p-4 sm:p-5 overflow-y-auto no-scrollbar">
            {activeTab === 'home' && (
              <>
                <HomeView />
                <div id="jargon-buster-section" className="mt-4 pt-2 border-t border-cream-200">
                  <MakeItSimple />
                </div>
              </>
            )}

            {activeTab === 'play' && <PlayView />}

            {activeTab === 'map' && <MoneyMap />}

            {activeTab === 'progress' && <ProgressView />}

            {activeTab === 'you' && <YouView />}
          </main>

          <BottomNav />
        </>
      )}

      {/* Global Overlays & Modals */}
      <MicroVideoModal />
      <AskMoneeModal />
      <BadgeUnlockModal />
      <DemoTourModal />
    </MobileFrame>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
