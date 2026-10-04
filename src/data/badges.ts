import { BadgeItem } from '../types';

export const badgesData: BadgeItem[] = [
  {
    id: 'first-step',
    title: 'First Step',
    icon: '🌱',
    description: 'Completed your very first financial experience on monee.',
    category: 'knowledge',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'crash-survivor',
    title: 'Crash Survivor',
    icon: '🎢',
    description: 'Lived through the -35% volatility crash simulation without panicking.',
    category: 'resilience',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'think-before-act',
    title: 'Think Before You Act',
    icon: '🧠',
    description: 'Paused and reflected before making an emotional decision during market swings.',
    category: 'resilience',
    unlocked: true,
    unlockedAt: 'Today'
  },
  {
    id: 'basket-builder',
    title: 'Basket Builder',
    icon: '🧺',
    description: 'Discovered the power of diversification by spreading fictional coins across 3 baskets.',
    category: 'simulator',
    unlocked: false
  },
  {
    id: 'jargon-buster',
    title: 'Jargon Buster',
    icon: '💡',
    description: 'Transformed complex financial terms into simple, relatable everyday words.',
    category: 'knowledge',
    unlocked: false
  },
  {
    id: '7-day-learner',
    title: '7-Day Learner',
    icon: '🔥',
    description: 'Built a 7-day streak of learning financial principles for Bharat.',
    category: 'habit',
    unlocked: false
  }
];
