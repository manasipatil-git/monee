import { VolatilityRound } from '../types';

export const volatilityRounds: VolatilityRound[] = [
  {
    round: 1,
    percentageChange: 0.10,
    amount: 55000,
    headline: "Nice. Things are looking good.",
    subtext: "The market moved up 10%. Your ₹50,000 is now ₹55,000. You're feeling satisfied."
  },
  {
    round: 2,
    percentageChange: 0.15,
    amount: 63250,
    headline: "You're feeling pretty confident.",
    subtext: "Another +15% bump! Your portfolio reaches ₹63,250. You wonder if this always goes up."
  },
  {
    round: 3,
    percentageChange: -0.08,
    amount: 58190,
    headline: "Okay... things changed.",
    subtext: "A quick -8% pullback down to ₹58,190. A mild pause in momentum."
  },
  {
    round: 4,
    percentageChange: -0.20,
    amount: 46552,
    headline: "The number is falling.",
    subtext: "A sharp -20% dip brings you below your starting capital to ₹46,552.",
    question: "What would you do right now?",
    options: [
      "Pause & understand",
      "Sell everything immediately",
      "Put more fictional money in",
      "I'm not sure / Feeling anxious"
    ]
  },
  {
    round: 5,
    percentageChange: -0.35,
    amount: 41112,
    headline: "A full market crash has occurred.",
    subtext: "The market just cratered. Your money sits at ₹41,112—that's ₹22,138 below your highest peak."
  }
];

export const compoundingMilestones = [
  { year: 1, principal: 10000, interest: 800, total: 10800, multiplier: "1.08x" },
  { year: 5, principal: 10000, interest: 4693, total: 14693, multiplier: "1.47x" },
  { year: 10, principal: 10000, interest: 11589, total: 21589, multiplier: "2.16x" },
  { year: 20, principal: 10000, interest: 36609, total: 46609, multiplier: "4.66x" }
];

export const feesScenarios = [
  { year: 1, noFee: 108000, lowFee: 107500, highFee: 106000, feeLost: 2000 },
  { year: 5, noFee: 146933, lowFee: 143560, highFee: 133822, feeLost: 13111 },
  { year: 10, noFee: 215892, lowFee: 206103, highFee: 179084, feeLost: 36808 },
  { year: 20, noFee: 466095, lowFee: 424785, highFee: 320713, feeLost: 145382 }
];

export const fruitBasketItems = [
  { id: 'apple', name: 'Apples 🍎', count: 4, unitPrice: 30 },
  { id: 'banana', name: 'Bananas 🍌', count: 6, unitPrice: 15 },
  { id: 'orange', name: 'Oranges 🍊', count: 5, unitPrice: 20 },
  { id: 'mango', name: 'Mangoes 🥭', count: 2, unitPrice: 50 }
];

export const inflationTimeline = [
  { year: '2014', samosaPrice: 8, platesFor100: 12, fuelPrice: 65, movieTicket: 120 },
  { year: '2019', samosaPrice: 12, platesFor100: 8, fuelPrice: 75, movieTicket: 180 },
  { year: '2024', samosaPrice: 20, platesFor100: 5, fuelPrice: 104, movieTicket: 260 },
  { year: '2029 (Projected)', samosaPrice: 32, platesFor100: 3, fuelPrice: 135, movieTicket: 380 }
];
