# monee

> **"Experience money before you risk it."**  
> *Alternative supporting line: "Learn it. Play it. Understand it."*

Built for the **SANGYAN Investor Resilience Hackathon by IIT (BHU)**, in collaboration with **SEBI** and **NSDL**.  
**TRACK C — INVESTOR EDUCATION FOR BHARAT**

---

## 💡 The Problem & Philosophy

Financial concepts such as NAV, risk, diversification, volatility, compounding, fees, and nomination are often explained in jargon-heavy language. This pushes first-time investors toward oversimplified tips or potentially misleading advice.

**monee** is an interactive financial learning experience that lets users **EXPERIENCE** concepts before risking hard-earned capital.

### The Core Learning Loop
```
EXPERIENCE  →  MAKE A DECISION  →  SEE THE CONSEQUENCE  →  UNDERSTAND WHY  →  HEAR IT IN YOUR LANGUAGE  →  REMEMBER IT  →  BUILD THE HABIT
```

> *"People remember experiences better than definitions."*

---

## 🛡️ Public-Good Educational Tool Compliance

monee is strictly an educational sandbox. It adheres to SEBI and NSDL guidelines:
- ❌ **No stock tips or trading calls**
- ❌ **No buy/sell/hold recommendations**
- ❌ **No price predictions or brokerage functionality**
- ❌ **No real-money transactions or product promotions**
- ✅ **100% focused on financial literacy, resilience, and conceptual understanding**

---

## ✨ Key Features

### 1. Core Volatility Simulator (Market Crash in 5 Rounds)
- **Starting Capital**: ₹50,000 in fictional sandbox money.
- **Round 1 (+10%)**: Value reaches ₹55,000 (*"Things are looking good"*).
- **Round 2 (+15%)**: Value hits ₹63,250 (*"Feeling pretty confident"*).
- **Round 3 (-8%)**: Quick pullback to ₹58,190.
- **Round 4 (-20%)**: Sharp drop to ₹46,552 with interactive decision poll (*"Pause & understand"*, *"Sell everything"*, *"Put more in"*, *"I'm not sure"*).
- **Round 5 (-35%)**: Tasteful crash animation showing balance drop to ₹41,112 (₹22,138 below peak!).
- **Reflection Poll**: Emotional check-in (*😌 Calm*, *🤔 Curious*, *😬 Uncomfortable*, *😨 Scary*, *🔥 Wanted to act immediately*).
- **Speed Breaker Analogy**: *"The destination may stay the same, but the ride isn't perfectly smooth. That's volatility."*

### 2. Full Concept Simulator Suite (8 Interactive Sandboxes)
1. **Volatility**: 5-round crash, live sparkline chart, emotional reflection, road analogy.
2. **Compounding**: ₹10,000 interactive slider (1, 5, 10, 20 yrs) showing how growth earns future growth (Snowball effect).
3. **Diversification**: 10 fictional coins into 3 baskets. Simulates a shock to Basket A to show remaining coins stay safe.
4. **Fees**: ₹1,00,000 comparison showing how a 1.8% annual fee quietly takes ₹1.45+ Lakhs over 20 years.
5. **NAV (Net Asset Value)**: Fruit basket unit calculator showing total basket price ÷ units = slice price (busting the "cheap NAV" myth).
6. **Nomination**: Tale of Ramesh & Priya comparing 48-hour family handover vs 18 months of court battles; highlights ₹1.5 Lakh Crore unclaimed funds in India.
7. **Inflation**: The "Samosa Index" showing ₹100 buying power melting from 12 samosas (2014) down to 4 (2024).
8. **Risk & Predictability**: Metro road vs roller coaster, reinforcing SEBI's rule: *"Zero-risk high-returns do not exist."*

### 3. "Make this simple" (Financial Jargon Buster)
- Paste any complex financial clause or tap presets (Expense Ratio, NAV, Exit Load, Beta/Volatility, SEBI Nomination Mandate, CAGR, Lock-in period).
- Instant breakdown into:
  - **Explain like I'm 15**
  - **हिंदी में** (Conversational Hindi)
  - **मराठीत** (Conversational Marathi)
  - **Everyday Analogy**
  - **🔊 Voice Readout**

### 4. Voice-First for Bharat
- Integrated **Web Speech Synthesis API** with natural, slow, conversational pacing.
- Available for explanations in **English**, **Hindi (हिंदी)**, and **Marathi (मराठी)**.
- **🎙️ Ask monee**: Conversational educational Q&A companion with smart offline fallbacks.

### 5. Duolingo-Style Money Map
- Visual journey through 8 financial milestones with an animated winding path.
- Completed nodes show glowing checkmarks and earned XP.
- Unlocking nodes triggers rewarding XP counter animations and sound cues.

### 6. Habits & Gamified Learning
- 🔥 **4-Day Streak**: Weekly M-T-W-T-F-S-S calendar habit tracker.
- **Knowledge XP Engine**:
  - Interactive Lesson: `+20 XP`
  - Simulation Test: `+40 XP`
  - Emotional Reflection: `+15 XP`
  - Voice Lesson: `+10 XP`
  - Memory Boost: `+15 XP`
  - Jargon Simplifier: `+15 XP`
- **Badges**: *First Step*, *Crash Survivor*, *Think Before You Act*, *Basket Builder*, *Jargon Buster*, *7-Day Learner*.
- **Memory Boost 🧠**: Spaced repetition quiz to test retention without feeling like an exam.

---

## 🛠️ Tech Stack

- **Framework**: React 18+ with Vite & TypeScript
- **Styling**: Tailwind CSS (Warm cream, deep charcoal, warm coral, soft lavender palette)
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Voice Engine**: Web Speech API (`SpeechSynthesis`)
- **Persistence**: `localStorage` (XP, streaks, badges, language, completed modules)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/manasipatil-git/monee.git
cd monee

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🎯 2-Minute Judge Demo Tour

Click the **"Judge Demo"** button on the top bar or bottom navigation to quickly step through the complete judging sequence:
1. Welcome & Philosophy
2. 5-Round Volatility Crash Simulator
3. Regional Voice & Everyday Analogies (Hindi/Marathi)
4. Illustrated Money Map
5. "Make this simple" Jargon Buster
6. Habit Streaks, Knowledge XP & Badges

---

## 📜 License & Acknowledgements

Created for the **SANGYAN Investor Resilience Hackathon by IIT (BHU)**, supported by **SEBI** and **NSDL**.  
Public-good educational project for Bharat.
