import { BadgeItem } from '../types';

export const badgesData: BadgeItem[] = [
  {
    id: 'first-step',
    title: {
      en: 'First Step',
      hi: 'पहला कदम',
      mr: 'पहिले पाऊल'
    },
    icon: '🌱',
    description: {
      en: 'Completed your first financial experience on monee.',
      hi: 'monee पर अपना पहला वित्तीय अनुभव पूरा किया।',
      mr: 'monee वर पहिला आर्थिक सराव पूर्ण केला.'
    },
    category: 'knowledge',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'crash-survivor',
    title: {
      en: 'Crash Survivor',
      hi: 'क्रैश सर्वाइवर',
      mr: 'क्रॅश सर्वाइव्हर'
    },
    icon: '🎢',
    description: {
      en: 'Experienced the -35% crash simulation without panicking.',
      hi: 'बिना घबराए 35% की गिरावट का अनुभव किया।',
      mr: '३५% ची घसरण न घाबरता शांतपणे अनुभवली.'
    },
    category: 'resilience',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'think-before-act',
    title: {
      en: 'Think Before You Act',
      hi: 'सोचकर कदम उठाएं',
      mr: 'विचारपूर्वक निर्णय'
    },
    icon: '🧠',
    description: {
      en: 'Paused to understand before reacting to market swings.',
      hi: 'गिरावट देखकर घबराने के बजाय रुककर स्थिति को समझा।',
      mr: 'घसरण पाहून घाई न करता शांतपणे विचार केला.'
    },
    category: 'resilience',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'basket-builder',
    title: {
      en: 'Basket Builder',
      hi: 'समझदार टोकरी',
      mr: 'योग्य विभागणी'
    },
    icon: '🧺',
    description: {
      en: 'Learned diversification by spreading practice coins across 3 baskets.',
      hi: 'सिक्के अलग-अलग टोकरियों में रखकर विविधीकरण की ताकत जानी।',
      mr: 'नाणी वेगवेगळ्या टोपल्यांमध्ये ठेवून विविधीकरणाची ताकद ओळखली.'
    },
    category: 'simulator',
    unlocked: false
  },
  {
    id: 'jargon-buster',
    title: {
      en: 'Jargon Buster',
      hi: 'शब्दों की पहेली हल',
      mr: 'सोपी भाषा'
    },
    icon: '💡',
    description: {
      en: 'Transformed complex financial terms into simple, relatable words.',
      hi: 'मुश्किल शब्दों को आम बोलचाल की भाषा में बदला।',
      mr: 'कठीण आर्थिक शब्द साध्या घरगुती भाषेत समजून घेतले.'
    },
    category: 'knowledge',
    unlocked: false
  },
  {
    id: '7-day-learner',
    title: {
      en: '7-Day Habit',
      hi: '7 दिन की आदत',
      mr: '७ दिवसांची सवय'
    },
    icon: '🔥',
    description: {
      en: 'Maintained a 7-day habit of understanding financial sense.',
      hi: 'लगातार 7 दिन तक सीखने की निरंतरता बनाए रखी।',
      mr: 'सलग ७ दिवस शिकण्याची सवय टिकवून ठेवली.'
    },
    category: 'habit',
    unlocked: false
  }
];
