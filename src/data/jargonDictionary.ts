import { JargonEntry } from '../types';

export const jargonDictionary: JargonEntry[] = [
  {
    id: 'expense-ratio',
    term: 'Expense Ratio',
    originalClause: 'Expense ratio represents the annualized percentage of fund assets dedicated towards operational, custodial, registrar, and asset management overheads.',
    simplified: 'Think of it as a small recurring maintenance charge for managing and protecting the money.',
    eli15: "It's like paying a small annual subscription fee to a gardener who looks after your plant so you don't have to water it yourself.",
    hindi: "यह आपके पैसों की देखभाल और हिसाब-किताब रखने के लिए काटा जाने वाला एक छोटा सा सालाना रखरखाव खर्च है।",
    marathi: "तुमच्या पैशांची योग्य काळजी घेणे आणि हिशोब ठेवणे यासाठी कापले जाणारे हे वार्षिक देखभाल शुल्क आहे.",
    analogy: "Like a building maintenance fee: everyone chips in a tiny bit each month to keep the lift running and guards paid."
  },
  {
    id: 'nav',
    term: 'Net Asset Value (NAV)',
    originalClause: 'Net Asset Value represents the per-share valuation of the pooled investment portfolio calculated after deducting all accrued liabilities from the gross market value of constituent assets.',
    simplified: 'The price tag of one single slice of the shared basket on any given day.',
    eli15: "Imagine a fruit basket worth ₹500 cut into 10 equal bowls. Each bowl's price tag of ₹50 is the NAV.",
    hindi: "एक साझी टोकरी के एक टुकड़े या एक कूपन की आज की असली कीमत।",
    marathi: "सामायिक टोपलीतील एका छोट्या वाट्याची आजच्या दिवसाची किंमत म्हणजे NAV.",
    analogy: "Like dividing a big birthday cake into equal slices: NAV is just the price of one slice, not whether the cake is cheap or expensive."
  },
  {
    id: 'exit-load',
    term: 'Exit Load',
    originalClause: 'Exit load is a deterrent fee percentage levied by the Asset Management Company on redemption proceeds if units are liquidated prior to the pre-agreed lock-in horizon.',
    simplified: 'A small fee charged only if you withdraw your money too early before the promised time.',
    eli15: "Like breaking a 1-year gym contract after only two weeks—the gym keeps a small deposit for early exit.",
    hindi: "तय समय से पहले अचानक पैसा निकालने पर लगने वाला एक छोटा सा शुल्क, ताकि लोग जल्दबाज़ी में न निकालें।",
    marathi: "ठरलेल्या वेळेआधी अचानक पैसे काढून घेतल्यास लागणारा एक छोटा दंड.",
    analogy: "Like paying a small penalty for returning a rented bicycle 5 days earlier than your booked slot."
  },
  {
    id: 'volatility-beta',
    term: 'Volatility / Beta',
    originalClause: 'Beta is a statistical measure quantifying the systemic volatility of a fund relative to a benchmark index, reflecting non-diversifiable risk exposure.',
    simplified: 'A score showing how wildly a price dances up and down compared to the rest of the market.',
    eli15: "If the market walks calmly, high beta means this asset runs and jumps like an excited puppy.",
    hindi: "यह दिखाता है कि किसी चीज़ की कीमत कितनी तेज़ी से ऊपर और नीचे झूलती है।",
    marathi: "बाजाराच्या तुलनेत एखाद्या गुंतवणुकीची किंमत किती वेगाने खाली-वर होते हे मोजण्याचे माप.",
    analogy: "Like the suspension on two vehicles: a big heavy bus stays steady over bumps, while a light bicycle shakes violently."
  },
  {
    id: 'nomination-mandate',
    term: 'Nomination Mandate',
    originalClause: 'Pursuant to regulatory circulars, all individual folio holders must register a valid nominee or execute a formal opt-out declaration to ensure smooth transmission of holdings.',
    simplified: 'Writing down who gets your money smoothly so your loved ones never have to fight courts or paperwork.',
    eli15: "Leaving a spare house key with your family so nobody has to break the door lock if you're not home.",
    hindi: "एक फॉर्म में अपने किसी भरोसेमंद व्यक्ति का नाम लिखना, ताकि आपके बाद आपके परिवार को दफ्तरों के चक्कर न काटने पड़ें।",
    marathi: "आपल्या पश्चात कुटुंबाला कोर्टाच्या फेऱ्या माराव्या लागू नयेत म्हणून विश्वासातील व्यक्तीचे नाव नोंदवून ठेवणे.",
    analogy: "Like giving your trusted friend the locker key in advance with clear permission."
  },
  {
    id: 'cagr',
    term: 'CAGR (Compounded Annual Growth Rate)',
    originalClause: 'Compounded Annual Growth Rate smooths out intermittent variance to determine the hypothetical constant geometric growth rate between initial and terminal valuations.',
    simplified: 'The average steady yearly speed your money grew at, ignoring all the bumps in between.',
    eli15: "Even if your car sped up to 100 km/h and slowed down to 20 km/h in traffic, your trip average was 50 km/h.",
    hindi: "रास्ते के सारे उतार-चढ़ाव भूलकर, औसतन हर साल आपका पैसा किस रफ्तार से बढ़ा, यह वो रफ्तार है।",
    marathi: "प्रवासातील सर्व खड्डे विसरून, तुमचे पैसे सरासरी दरवर्षी किती टक्के गतीने वाढले ती गती म्हणजेच CAGR.",
    analogy: "Like the average speed on Google Maps: it ignores the 3 traffic lights and gives you one smooth number."
  },
  {
    id: 'lock-in',
    term: 'Lock-in Period',
    originalClause: 'A statutory or contractual moratorium during which an investor is legally restrained from exercising redemption or premature disinvestments.',
    simplified: 'A cooling period where your money stays parked to give it time to work without interruptions.',
    eli15: "Putting cookies in the oven for 20 minutes: opening the door every minute ruins the baking!",
    hindi: "एक तय समय जिसमें पैसे निकालने पर रोक होती है, ताकि पैसे को बिना रुकावट बढ़ने का समय मिल सके।",
    marathi: "काही ठराविक काळ ज्यामध्ये पैसे काढता येत नाहीत, जेणेकरून पैशाला वाढण्यासाठी पुरेसा वेळ मिळतो.",
    analogy: "Like planting seeds in soil: you must let them sit undisturbed underground for a few weeks to sprout."
  }
];
