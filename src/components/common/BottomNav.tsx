import React from 'react';
import { Home, PlayCircle, Map, Flame, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TabType } from '../../types';
import { translations } from '../../data/translations';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, language, setActiveSimulatorId } = useApp();
  const t = translations[language];

  const tabs: { id: TabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: t.navHome || 'Home', icon: Home },
    { id: 'play', label: t.navPlay || 'Play', icon: PlayCircle },
    { id: 'map', label: t.navMap || 'Map', icon: Map },
    { id: 'progress', label: t.navProgress || 'Progress', icon: Flame },
    { id: 'you', label: t.navYou || 'You', icon: User },
  ];

  const handleTabClick = (tabId: TabType) => {
    if (tabId !== 'play') {
      setActiveSimulatorId(null);
    }
    setActiveTab(tabId);
  };

  return (
    <nav className="sticky bottom-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#EAE4DC] px-2 py-1.5 transition-all">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all relative cursor-pointer ${
                isActive
                  ? 'text-[#246B4F] scale-105'
                  : 'text-[#68645E] hover:text-[#1A1918]'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'stroke-[2.5px]' : 'stroke-2'
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#246B4F] rounded-full" />
                )}
              </div>
              <span
                className={`text-[10px] mt-0.5 font-medium transition-colors ${
                  isActive ? 'font-black text-[#246B4F]' : 'text-[#68645E]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
