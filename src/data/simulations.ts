import { Language, VolatilityRound } from '../types';

export const volatilityRounds: VolatilityRound[] = [
  {
    round: 1,
    percentageChange: 0.10,
    amount: 55000,
    headline: {
      en: "Nice. Things are looking good.",
      hi: "बढ़िया! बाज़ार 10% ऊपर गया।",
      mr: "छान! बाजार १०% वर गेला आहे."
    },
    subtext: {
      en: "Your ₹50,000 grew to ₹55,000. You're feeling satisfied.",
      hi: "आपके ₹50,000 अब ₹55,000 हो गए हैं। आपको अच्छा लग रहा है।",
      mr: "तुमचे ₹५०,००० आता ₹५५,००० झाले आहेत. छान वाटत आहे."
    },
    trend: 'up'
  },
  {
    round: 2,
    percentageChange: 0.15,
    amount: 63250,
    headline: {
      en: "You're feeling pretty confident.",
      hi: "वाह! और 15% की बढ़त।",
      mr: "मस्त! अजून १५% ची वाढ झाली."
    },
    subtext: {
      en: "Your balance reached ₹63,250. You wonder if this always goes up.",
      hi: "आपकी रकम ₹63,250 पर पहुंच गई। लग रहा है जैसे पैसा हमेशा बढ़ता ही रहेगा।",
      mr: "रक्कम ₹६३,२५० वर गेली. आपल्याला वाटते बाजार नेहमी असाच वाढत राहील."
    },
    trend: 'up'
  },
  {
    round: 3,
    percentageChange: -0.08,
    amount: 58190,
    headline: {
      en: "Okay... things changed.",
      hi: "थोड़ा झटका: बाज़ार 8% गिरा।",
      mr: "जरा थांबा: बाजार ८% खाली आला."
    },
    subtext: {
      en: "A quick pullback down to ₹58,190. A mild pause in momentum.",
      hi: "रकम घटकर ₹58,190 पर आ गई। रफ्तार थोड़ी धीमी हुई।",
      mr: "रक्कम घसरून ₹५८,१९० वर आली. थोडी धाकधूक सुरू झाली."
    },
    trend: 'down'
  },
  {
    round: 4,
    percentageChange: -0.20,
    amount: 46552,
    headline: {
      en: "The number is falling fast.",
      hi: "तेज़ गिरावट: शुरू की रकम से भी नीचे!",
      mr: "मोठी घसरण: मूळ रकमेपेक्षाही कमी झाली!"
    },
    subtext: {
      en: "A -20% dip brings you below your starting capital to ₹46,552.",
      hi: "20% की गिरावट से आप ₹46,552 पर आ गए। यानी अपनी लागत से भी नीचे।",
      mr: "२०% घसरणीमुळे रक्कम ₹४६,५५२ वर आली. सुरुवातीच्या रकमेपेक्षाही कमी."
    },
    trend: 'down',
    question: {
      en: "What would you do right now?",
      hi: "इस वक्त आप क्या करेंगे?",
      mr: "अशा वेळी तुम्ही काय कराल?"
    },
    options: {
      en: [
        "Pause & understand",
        "Sell everything immediately",
        "Put more practice money in",
        "I'm feeling nervous"
      ],
      hi: [
        "थोड़ा रुककर समझने की कोशिश करेंगे",
        "घबराकर सब कुछ तुरंत बेच देंगे",
        "कम भाव देखकर थोड़ा और पैसा लगाएंगे",
        "घबराहट हो रही है, समझ नहीं आ रहा"
      ],
      mr: [
        "थोडा वेळ थांबू आणि समजून घेऊ",
        "घाबरून लगेच सगळे विकून टाकू",
        "कमी किमतीत अजून थोडे पैसे टाकू",
        "भीती वाटतेय, काय करावे सुचत नाही"
      ]
    }
  },
  {
    round: 5,
    percentageChange: -0.35,
    amount: 41112,
    headline: {
      en: "A steep market crash occurred.",
      hi: "बाज़ार में भारी क्रैश आया!",
      mr: "बाजारात मोठी पडझड झाली!"
    },
    subtext: {
      en: "The market cratered -35%. Your balance sits at ₹41,112.",
      hi: "बाज़ार 35% और गिरा। आपकी रकम ₹41,112 रह गई—शिखर से ₹22,138 कम!",
      mr: "बाजार ३५% कोसळला. तुमची रक्कम ₹४१,११२ वर आली—सर्वोच्च रकमेपेक्षा ₹२२,१३८ कमी!"
    },
    trend: 'crash'
  }
];

export const emotionOptions: Array<{
  id: string;
  emoji: string;
  label: Record<Language, string>;
  desc: Record<Language, string>;
}> = [
  {
    id: 'calm',
    emoji: '😌',
    label: { en: 'Calm', hi: 'शांत लगा', mr: 'शांत वाटले' },
    desc: {
      en: 'I knew it was practice and temporary',
      hi: 'मुझे पता था यह केवल अभ्यास है और अस्थायी है',
      mr: 'मला ठाऊक होते की हा सराव आहे आणि तात्पुरता आहे'
    }
  },
  {
    id: 'curious',
    emoji: '🤔',
    label: { en: 'Curious', hi: 'जिज्ञासा हुई', mr: 'कुतूहल वाटले' },
    desc: {
      en: 'Wondering why it dropped so rapidly',
      hi: 'यह जानने का मन हुआ कि इतनी जल्दी गिरावट क्यों हुई',
      mr: 'बाजार इतक्या वेगाने खाली का आला हे जाणून घ्यावेसे वाटले'
    }
  },
  {
    id: 'uncomfortable',
    emoji: '😬',
    label: { en: 'Uncomfortable', hi: 'बेचैनी हुई', mr: 'अस्वस्थ वाटले' },
    desc: {
      en: 'Disliked seeing my balance shrink',
      hi: 'अपनी रकम कम होते देखकर बुरा लगा',
      mr: 'आपली रक्कम कमी होताना पाहून वाईट वाटले'
    }
  },
  {
    id: 'scary',
    emoji: '😨',
    label: { en: 'Scary', hi: 'डर लगा', mr: 'घाबरल्यासारखे वाटले' },
    desc: {
      en: 'Felt an instinct to stop the loss',
      hi: 'लगा कि सब कुछ गंवाने से पहले रुक जाना चाहिए',
      mr: 'सर्व काही संपण्याआधी थांबले पाहिजे असे वाटले'
    }
  },
  {
    id: 'act',
    emoji: '🔥',
    label: { en: 'Urge to Act', hi: 'तुरंत कुछ करने की इच्छा', mr: 'लगेच काहीतरी करावेसे वाटले' },
    desc: {
      en: 'Wanted to sell or fix it right away',
      hi: 'तुरंत बेचने या बदलने का मन हुआ',
      mr: 'लगेच विकण्याचा किंवा निर्णय घेण्याचा मोह झाला'
    }
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
  { id: 'apple', name: { en: 'Apples 🍎', hi: 'सेब 🍎', mr: 'सफरचंद 🍎' }, count: 4, unitPrice: 30 },
  { id: 'banana', name: { en: 'Bananas 🍌', hi: 'केले 🍌', mr: 'केळी 🍌' }, count: 6, unitPrice: 15 },
  { id: 'orange', name: { en: 'Oranges 🍊', hi: 'संतरे 🍊', mr: 'संत्री 🍊' }, count: 5, unitPrice: 20 }
];

export const inflationTimeline = [
  { year: '2014', samosaPrice: 8, platesFor100: 12, fuelPrice: 65, movieTicket: 120 },
  { year: '2019', samosaPrice: 12, platesFor100: 8, fuelPrice: 75, movieTicket: 180 },
  { year: '2024', samosaPrice: 20, platesFor100: 5, fuelPrice: 104, movieTicket: 260 },
  { year: '2029', samosaPrice: 32, platesFor100: 3, fuelPrice: 135, movieTicket: 380 }
];
