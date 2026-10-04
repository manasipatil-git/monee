import { ConceptItem } from '../types';

export const conceptsData: ConceptItem[] = [
  {
    id: 'volatility',
    title: {
      en: 'Volatility',
      hi: 'उतार-चढ़ाव (Volatility)',
      mr: 'चढ-उतार (Volatility)'
    },
    oneLiner: {
      en: "Why money doesn't move in a straight line.",
      hi: "पैसा कभी सीधी लकीर में ऊपर या नीचे नहीं जाता।",
      mr: "पैशाचा प्रवास कधीही सरळ रेषेत होत नसतो."
    },
    icon: '🎢',
    themeColor: 'coral',
    badgeColor: 'bg-coral-50 text-coral-600 border-coral-200',
    timeEstimate: '3 min',
    progress: 75,
    simpleExplanation: {
      en: "Volatility simply means that the value of something can move up and down over short periods of time. It is not permanent loss unless you panic and sell at the bottom.",
      hi: "उतार-चढ़ाव का सीधा मतलब है कि किसी चीज़ की कीमत कुछ समय में तेज़ी से ऊपर या नीचे हो सकती है। जब तक आप घबराकर नुकसान में नहीं बेचते, यह कोई पक्का नुकसान नहीं होता।",
      mr: "चढ-उतार म्हणजे अल्पकाळात एखाद्या गोष्टीची किंमत वर-खाली होणे. घाबरून कमी किमतीत विकल्याशिवाय हे कायमस्वरूपी नुकसान नसते."
    },
    everydayAnalogy: {
      en: "Think of a road trip with twists, turns, and speed breakers. The destination stays the same, but the ride won't be perfectly smooth.",
      hi: "जैसे पहाड़ी रास्ते पर मोड़ और गड्ढे आते हैं। मंज़िल वही रहती है, पर रास्ता बिल्कुल सपाट नहीं होता।",
      mr: "घाटातील वळणावळणाचा रस्ता आठवा. जायचे तेथेच असते, पण प्रवास सरळ नसतो, थोडे हेलकावे खावेच लागतात."
    },
    whyItMatters: {
      en: "First-time investors often confuse temporary price swings with losing their money forever. Understanding volatility prevents panic decisions.",
      hi: "नए लोग अक्सर अस्थायी गिरावट को हमेशा का नुकसान समझ लेते हैं। उतार-चढ़ाव को समझने से घबराहट में गलत फैसले लेने से बचा जा सकता है।",
      mr: "नवीन गुंतवणूकदार तात्पुरत्या घसरणीला कायमचे नुकसान समजतात. ही संकल्पना समजल्यास भीतीपोटी निर्णय घेणे टळते."
    },
    audioNarration: {
      en: "Volatility simply means that value moves up and down like a roller coaster. Think of a journey on a bumpy road: the bumps are uncomfortable, but they don't mean you won't reach your destination.",
      hi: "उतार-चढ़ाव का मतलब है कि कीमत झूले की तरह ऊपर-नीचे होती है। जैसे सड़क के गड्ढे यात्रा रोकते नहीं, वैसे ही बाज़ार का उतार-चढ़ाव आपके सफर का ही हिस्सा है।",
      mr: "चढ-उतार म्हणजे पाळण्यासारखा खेळ, कधी वर तर कधी खाली. रस्त्यावरील खड्डे म्हणजे प्रवास थांबला असे नाही, हा प्रवासाचाच एक भाग आहे."
    },
    memoryCheck: {
      question: {
        en: "Which situation shows higher volatility?",
        hi: "इनमें से किस स्थिति में अधिक उतार-चढ़ाव (volatility) है?",
        mr: "यापैकी कोणत्या परिस्थितीत जास्त चढ-उतार (volatility) आहे?"
      },
      options: {
        en: ["A value fluctuating between ₹40 and ₹120 in a month", "A value growing steadily by ₹2 every single month", "A bank balance remaining strictly unchanged"],
        hi: ["एक महीने में कीमत ₹40 से ₹120 के बीच झूलना", "हर महीने नियमित रूप से ₹2 की धीमी बढ़त होना", "खाते में राशि का बिल्कुल स्थिर रहना"],
        mr: ["एका महिन्यात किंमत ₹४० ते ₹१२० दरम्यान वर-खाली होणे", "दरमहा ₹२ ने शांतपणे हळूहळू वाढणे", "बँकेतील रक्कम तशीच स्थिर राहणे"]
      },
      correctIndex: 0,
      explanation: {
        en: "Correct! Wide swings up and down represent high volatility.",
        hi: "बिल्कुल सही! बड़े उतार-चढ़ाव ही वोलैटिलिटी कहलाते हैं।",
        mr: "अगदी बरोबर! मोठ्या प्रमाणावर होणारी चढ-उतार म्हणजेच वोलॅटिलिटी."
      }
    },
    microVideo: {
      title: {
        en: "Volatility in 60s",
        hi: "60 सेकंड में उतार-चढ़ाव",
        mr: "६० सेकंदात चढ-उतार"
      },
      duration: "45s",
      scenes: [
        {
          heading: { en: "The Calm Start", hi: "शांत शुरुआत", mr: "शांत सुरुवात" },
          caption: { en: "You start with ₹50,000 on day one.", hi: "पहले दिन आप ₹50,000 से शुरुआत करते हैं।", mr: "पहिल्या दिवशी तुम्ही ₹५०,००० ने सुरुवात करता." },
          visualState: "calm",
          valueDisplay: "₹50,000"
        },
        {
          heading: { en: "The Sugar Rush", hi: "खुशी का दौर", mr: "आनंदाचा काळ" },
          caption: { en: "It rises to ₹63,250! You feel like a genius.", hi: "यह बढ़कर ₹63,250 हो गया! आपको लगता है सब आसान है।", mr: "रक्कम ₹६३,२५० वर गेली! आपल्याला वाटते सर्व छान आहे." },
          visualState: "rising",
          valueDisplay: "₹63,250 (+26%)"
        },
        {
          heading: { en: "The Sudden Dip", hi: "अचानक झटका", mr: "अचानक घसरण" },
          caption: { en: "Suddenly, bad news hits. It drops to ₹41,112.", hi: "अचानक बुरी खबर आई। यह गिरकर ₹41,112 पर आ गया।", mr: "अचानक वाईट बातमी आली आणि किंमत ₹४१,११२ वर आली." },
          visualState: "crash",
          valueDisplay: "₹41,112 (-35%)"
        },
        {
          heading: { en: "The Secret Truth", hi: "असली सच्चाई", mr: "खरे रहस्य" },
          caption: { en: "This is volatility. It is normal. Panic selling turns a paper dip into permanent loss.", hi: "यही उतार-चढ़ाव है। घबराकर बेचना ही असली नुकसान बनता है।", mr: "हाच तो चढ-उतार. घाबरून विकल्यासच कायमचे नुकसान होते." },
          visualState: "wisdom",
          valueDisplay: "Don't Panic"
        }
      ]
    }
  },
  {
    id: 'compounding',
    title: {
      en: 'Compounding',
      hi: 'चक्रवृद्धि (Compounding)',
      mr: 'चक्रवाढ (Compounding)'
    },
    oneLiner: {
      en: "Growth making its own growth over time.",
      hi: "जब आपकी कमाई खुद कमाई करने लगे।",
      mr: "पैशाने पैशाला जन्म देण्याची जादू."
    },
    icon: '🌱',
    themeColor: 'mint',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    timeEstimate: '2 min',
    progress: 90,
    simpleExplanation: {
      en: "Compounding means you don't just earn on what you put in. You also earn on whatever growth accumulated earlier.",
      hi: "कंपाउंडिंग का मतलब है कि आपको सिर्फ अपनी लगाई हुई रकम पर ही नहीं, बल्कि उस पर मिले मुनाफे पर भी आगे चलकर मुनाफा मिलता है।",
      mr: "कंपाउंडिंग म्हणजे फक्त मूळ रकमेवरच नव्हे, तर आधी मिळालेल्या नफ्यावरही पुढे नफा मिळणे."
    },
    everydayAnalogy: {
      en: "Like rolling a tiny snowball down a snowy hill. At first it barely grows, but as it rolls further, it collects more snow faster and faster.",
      hi: "जैसे बर्फ के पहाड़ से छोटा सा गोला लुढ़काएं। पहले वह धीमे बढ़ता है, पर आगे जाकर बहुत तेजी से बड़ा बन जाता है।",
      mr: "बर्फाच्या डोंगरावरून छोटासा गोळा खाली ढकलण्यासारखे. सुरुवातीला तो लहान वाटतो, पण पुढे वेगाने मोठा होतो."
    },
    whyItMatters: {
      en: "Starting early matters more than starting with large sums because time is the magic multiplier in compounding.",
      hi: "बड़ी रकम से शुरुआत करने से ज्यादा जरूरी है जल्दी शुरुआत करना, क्योंकि समय ही असली ताकत है।",
      mr: "मोठ्या रकमेपेक्षा वेळेवर सुरुवात करणे महत्त्वाचे, कारण काळ हाच याचा खरा जादूगार आहे."
    },
    audioNarration: {
      en: "Compounding means your earnings start earning for you. Think of a fruit tree: first year you get seeds, you plant those seeds, and soon you have a whole orchard.",
      hi: "कंपाउंडिंग का मतलब है आपकी बचत खुद काम पर लग जाती है। जैसे एक आम की गुठली से पेड़ बनता है, फिर उससे कई पेड़ तैयार होते हैं।",
      mr: "कंपाउंडिंग म्हणजे तुमच्या पैशाने कामाला लागणे. एका आंब्याच्या कोयीतून झाड, आणि मग त्यातून संपूर्ण आमराई तयार होण्यासारखे."
    },
    memoryCheck: {
      question: {
        en: "What makes compounding most powerful?",
        hi: "कंपाउंडिंग को सबसे ज्यादा ताकतवर क्या बनाता है?",
        mr: "कंपाउंडिंगला सर्वात जास्त ताकद कशामुळे मिळते?"
      },
      options: {
        en: ["Giving it plenty of time", "Checking prices every 5 minutes", "Borrowing heavy money to invest"],
        hi: ["उसे लंबा समय देना", "हर 5 मिनट में भाव देखना", "कर्ज लेकर पैसा लगाना"],
        mr: ["त्याला भरपूर वेळ देणे", "दर पाच मिनिटांनी भाव तपासणे", "कर्ज काढून पैसे लावणे"]
      },
      correctIndex: 0,
      explanation: {
        en: "Time allows the exponential curve of compounding to flourish!",
        hi: "समय ही कंपाउंडिंग का सबसे बड़ा दोस्त है!",
        mr: "वेळेमुळेच चक्रवाढीचा खरा चमत्कार अनुभवायला मिळतो!"
      }
    },
    microVideo: {
      title: {
        en: "Compounding in 60s",
        hi: "60 सेकंड में चक्रवृद्धि",
        mr: "६० सेकंदात चक्रवाढ"
      },
      duration: "40s",
      scenes: [
        {
          heading: { en: "The Seed", hi: "छोटा सा बीज", mr: "पहिले बी" },
          caption: { en: "You start with ₹10,000.", hi: "आप ₹10,000 से शुरुआत करते हैं।", mr: "तुम्ही ₹१०,००० ने सुरुवात करता." },
          visualState: "seed",
          valueDisplay: "₹10,000"
        },
        {
          heading: { en: "First Sprout", hi: "पहला अंकुर", mr: "पहिली पालवी" },
          caption: { en: "Year 1 gives you a small return. It reaches ₹10,800.", hi: "पहले साल मामूली बढ़त हुई: ₹10,800।", mr: "पहिल्या वर्षी छोटी वाढ: ₹१०,८००." },
          visualState: "sprout",
          valueDisplay: "₹10,800"
        },
        {
          heading: { en: "Growth on Growth", hi: "कमाई पर कमाई", mr: "नफ्यावर नफा" },
          caption: { en: "Now the ₹800 extra also starts working. Year 5: ₹14,693.", hi: "अब वह अतिरिक्त ₹800 भी कमाई करने लगा।", mr: "आता तो वरचा नफाही पैसे कमवू लागला: ₹१४,६९३." },
          visualState: "sapling",
          valueDisplay: "₹14,693"
        },
        {
          heading: { en: "The Giant Tree", hi: "बड़ा वृक्ष", mr: "मोठा वृक्ष" },
          caption: { en: "By Year 20, time turns small discipline into ₹46,609!", hi: "20वें साल में समय ने इसे ₹46,609 बना दिया!", mr: "२० व्या वर्षी वेळेने या रकमेला ₹४६,६०९ बनवले!" },
          visualState: "tree",
          valueDisplay: "₹46,609 (4.6x)"
        }
      ]
    }
  },
  {
    id: 'diversification',
    title: {
      en: 'Diversification',
      hi: 'विविधीकरण (Diversification)',
      mr: 'विविधीकरण (Diversification)'
    },
    oneLiner: {
      en: "Don't put all your eggs in one single basket.",
      hi: "सारे अंडे एक ही टोकरी में मत रखिए।",
      mr: "सगळी अंडी एकाच टोपलीत ठेवू नका."
    },
    icon: '🧺',
    themeColor: 'butter',
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-200',
    timeEstimate: '3 min',
    progress: 50,
    simpleExplanation: {
      en: "Diversification means spreading your money across different areas so that if one thing suffers, the others protect you.",
      hi: "विविधीकरण का मतलब है अपनी बचत को अलग-अलग जगहों पर बांटना, ताकि अगर एक जगह नुकसान हो तो बाकी आपकी रक्षा कर सकें।",
      mr: "विविधीकरण म्हणजे आपले पैसे वेगवेगळ्या ठिकाणी विभागणे, जेणेकरून एका ठिकाणी फटका बसला तरी बाकीचे पैसे सुरक्षित राहतात."
    },
    everydayAnalogy: {
      en: "If a fruit vendor only sells mangoes, a bad monsoon ruins the business. But if they also sell bananas and apples, they survive easily.",
      hi: "अगर फलवाला सिर्फ आम बेचे और बारिश खराब हो जाए तो दुकान बंद हो सकती है। लेकिन केले और सेब भी हों तो उसका काम चलता रहता है।",
      mr: "फळविक्रेत्याने फक्त आंबे विकले आणि पाऊस लांबला तर नुकसान होते. पण सफरचंद आणि केळीही असली तर धंदा चालू राहतो."
    },
    whyItMatters: {
      en: "No single company or sector is invincible. Diversification softens unexpected shocks without guessing the future.",
      hi: "कोई भी एक कंपनी कभी हमेशा नहीं जीत सकती। अलग-अलग जगह पैसा रखने से बड़े झटके से बचा जा सकता है।",
      mr: "कोणतीही एक कंपनी अमर नसते. विभागणी केल्याने अनपेक्षित संकटांपासून संरक्षण मिळते."
    },
    audioNarration: {
      en: "Diversification is like carrying your eggs in three baskets instead of one. If one basket drops, you still have breakfast tomorrow.",
      hi: "विविधीकरण का मतलब है अपनी बचत को एक ही जगह न बांधना। जैसे तीन थैलियों में सामान हो, एक फटने पर भी सारा सामान नहीं बिखरता।",
      mr: "सगळी अंडी एकाच टोपलीत ठेवली आणि ती पडली तर सगळे फुटेल. दोन-तीन टोपल्यांमध्ये वाटून ठेवले तर निदान उपाशी राहण्याची वेळ येत नाही."
    },
    memoryCheck: {
      question: {
        en: "Which person is properly diversified?",
        hi: "इनमें से कौन विविधीकरण (diversification) का सही इस्तेमाल कर रहा है?",
        mr: "यापैकी कोण योग्य विविधीकरणाचा वापर करत आहे?"
      },
      options: {
        en: ["Rohan, who spread ₹10,000 across 3 different unrelated sectors", "Amit, who put ₹10,000 into one friend's new shop", "Suresh, who bought 5 different stocks all in the same airline industry"],
        hi: ["रोहन, जिसने ₹10,000 को 3 अलग-अलग क्षेत्रों में बांटा", "अमित, जिसने सारा ₹10,000 एक ही दोस्त की दुकान में लगा दिया", "सुरेश, जिसने सिर्फ एयरलाइन कंपनियों में ही सारा पैसा लगा दिया"],
        mr: ["रोहन, ज्याने ₹१०,००० तीन वेगवेगळ्या क्षेत्रांत विभागले", "अमित, ज्याने सगळे ₹१०,००० एका मित्राच्या दुकानात लावले", "सुरेश, ज्याने सर्व पैसे एकाच प्रकारच्या विमान कंपन्यांत टाकले"]
      },
      correctIndex: 0,
      explanation: {
        en: "Right! Spreading across unrelated sectors shields you from single-point failure.",
        hi: "सही! अलग-अलग क्षेत्रों में बांटने से एक जगह का झटका पूरे पैसे को नहीं डूबाता।",
        mr: "बरोबर! असंबंधित क्षेत्रांत विभागल्याने एका धक्क्यात सर्व संपत नाही."
      }
    },
    microVideo: {
      title: {
        en: "Diversification in 60s",
        hi: "60 सेकंड में विविधीकरण",
        mr: "६० सेकंदात विविधीकरण"
      },
      duration: "40s",
      scenes: [
        {
          heading: { en: "10 Golden Coins", hi: "10 सोने के सिक्के", mr: "१० सोन्याची नाणी" },
          caption: { en: "You have 10 coins. Two players place their bets.", hi: "आपके पास 10 सिक्के हैं। दो लोग अलग तरीका चुनते हैं।", mr: "तुमच्याकडे १० नाणी आहेत. दोघांनी वेगळा मार्ग निवडला." },
          visualState: "coins",
          valueDisplay: "10 Coins"
        },
        {
          heading: { en: "All in One", hi: "एक ही टोकरी", mr: "एकाच टोपलीत" },
          caption: { en: "Player A puts all 10 coins into Basket 1.", hi: "खिलाड़ी A ने सारे 10 सिक्के टोकरी 1 में रख दिए।", mr: "खेळाडू A ने सर्व १० नाणी टोपली १ मध्ये ठेवली." },
          visualState: "one_basket",
          valueDisplay: "Basket 1: [10]"
        },
        {
          heading: { en: "The Sudden Shock", hi: "अचानक झटका", mr: "अचानक धक्का" },
          caption: { en: "A rock falls on Basket 1! Player A loses everything.", hi: "टोकरी 1 पर पत्थर गिरा! खिलाड़ी A के सारे सिक्के गिर गए।", mr: "टोपली १ वर दगड पडला! A ची सर्व नाणी पडली." },
          visualState: "shock",
          valueDisplay: "Basket 1: 0"
        },
        {
          heading: { en: "The Smart Divider", hi: "समझदार बंटवारा", mr: "हुशार विभागणी" },
          caption: { en: "Player B had 4 in A, 3 in B, 3 in C. They still have 6 coins safe!", hi: "खिलाड़ी B के पास दूसरी टोकरियों में 6 सिक्के सुरक्षित रहे!", mr: "B चे इतर टोपल्यांमधील ६ नाणी सुखरूप राहिली!" },
          visualState: "balanced",
          valueDisplay: "6 Coins Safe"
        }
      ]
    }
  },
  {
    id: 'fees',
    title: {
      en: 'Fees',
      hi: 'लागत और शुल्क (Fees)',
      mr: 'खर्च आणि शुल्क (Fees)'
    },
    oneLiner: {
      en: "Small leaks can quietly sink a big boat.",
      hi: "एक छोटा सा रिसाव भी बड़े जहाज को डुबो सकता है।",
      mr: "छोट्या छिद्रातूनही अख्खी बोट बुडू शकते."
    },
    icon: '💸',
    themeColor: 'sky',
    badgeColor: 'bg-sky-50 text-sky-600 border-sky-200',
    timeEstimate: '2 min',
    progress: 40,
    simpleExplanation: {
      en: "Fees are the recurring charges deducted for managing your money. A tiny 1.5% fee sounds small, but compounded over 20 years, it can eat up a big chunk of your final earnings.",
      hi: "फीस वह छोटा खर्च है जो आपके पैसे के प्रबंधन के लिए काटा जाता है। 1.5% सुनने में बहुत छोटा लगता है, लेकिन 20 साल में यह आपकी कुल कमाई का बड़ा हिस्सा ले सकता है।",
      mr: "फीस म्हणजे व्यवस्थापनासाठी दरवर्षी कापली जाणारी छोटी रक्कम. १.५% ही संख्या लहान वाटते, पण २० वर्षांत ती नफ्याचा मोठा हिस्सा खाऊन टाकते."
    },
    everydayAnalogy: {
      en: "A leaky faucet that drips one drop every minute doesn't seem harmful, but at the end of the month, your water tank is half empty.",
      hi: "जैसे नल से टपकती एक-एक बूंद तुच्छ लगती है, पर महीने के अंत में पानी की टंकी खाली हो जाती है।",
      mr: "नळाचे थेंब थेंब गळणे क्षुल्लक वाटते, पण महिनाअखेर पाण्याची टाकी निम्मी रिकामी होते."
    },
    whyItMatters: {
      en: "Always look at the expense ratio and transaction costs. Lower recurring costs mean more of your money keeps compounding for you.",
      hi: "हमेशा खर्चे (एक्सपेंस रेशियो) पर ध्यान दें। कम शुल्क का मतलब है आपका ज्यादा पैसा आपके लिए बढ़ेगा।",
      mr: "खर्च (एक्सपेंस रेशो) नेहमी तपासा. कमी खर्चाचा अर्थ असा की तुमचा जास्त पैसा तुमच्यासाठी वाढेल."
    },
    audioNarration: {
      en: "Fees are like a small toll gate on your financial road. If you pay the toll once, it's fine. If you pay it every kilometer for twenty years, it adds up.",
      hi: "फीस सड़क पर लगे छोटे टोल टैक्स जैसी है। एक बार देना आसान है, लेकिन अगर हर किलोमीटर पर कटे तो लंबा सफर महंगा पड़ जाता है।",
      mr: "फीस म्हणजे प्रवासातील टोलसारखी असते. एकदा देणे ठीक आहे, पण दर वळणावर कापली गेली तर प्रवास खूप महाग पडतो."
    },
    memoryCheck: {
      question: {
        en: "Why does a 1.5% annual fee matter over 20 years?",
        hi: "20 सालों में 1.5% का वार्षिक शुल्क इतना असरदार क्यों होता है?",
        mr: "२० वर्षांच्या कालावधीत दरवर्षी १.५% फी इतकी का जाणवते?"
      },
      options: {
        en: ["Because it compounds each year, eating into both principal and gains", "It doesn't matter, 1.5% is too small to notice", "Because fees are illegally taken without permission"],
        hi: ["क्योंकि यह हर साल कटता है और चक्रवृद्धिशील मुनाफे को कम करता है", "इससे कोई फर्क नहीं पड़ता, 1.5% बहुत छोटी संख्या है", "क्योंकि यह गैरकानूनी होता है"],
        mr: ["कारण ते दरवर्षी कापले जाऊन चक्रवाढ होणाऱ्या नफ्याला कमी करते", "काही फरक पडत नाही, १.५% खूपच कमी आहे", "कारण हे बेकायदेशीर असते"]
      },
      correctIndex: 0,
      explanation: {
        en: "Exactly. The compounding of fees quietly drags down long-term wealth.",
        hi: "सही! हर साल कटने वाला छोटा शुल्क समय के साथ बहुत बड़ा बन जाता है।",
        mr: "बरोबर! दरवर्षीचा छोटा खर्च वेळेच्या ओघात नफ्याचा मोठा भाग कापून घेतो."
      }
    },
    microVideo: {
      title: {
        en: "Fees in 60s",
        hi: "60 सेकंड में शुल्क",
        mr: "६० सेकंदात शुल्क"
      },
      duration: "45s",
      scenes: [
        {
          heading: { en: "₹1,00,000 Start", hi: "₹1,00,000 की शुरुआत", mr: "₹१,००,००० ची सुरुवात" },
          caption: { en: "Two identical sums of ₹1,00,000 start compounding.", hi: "दो बराबर रकमें एक साथ बढ़ना शुरू करती हैं।", mr: "दोन सारख्या रकमा वाढायला लागतात." },
          visualState: "balance",
          valueDisplay: "₹1,00,000 each"
        },
        {
          heading: { en: "The 1.5% Cut", hi: "1.5% की धीमी कटौती", mr: "१.५% ची हळूवार कपात" },
          caption: { en: "Account A pays 0.2% fee. Account B pays 1.8% fee.", hi: "खाता A पर 0.2% शुल्क है, जबकि खाता B पर 1.8%।", mr: "खाते A वर ०.२% शुल्क, तर खाते B वर १.८% शुल्क." },
          visualState: "scissors",
          valueDisplay: "0.2% vs 1.8%"
        },
        {
          heading: { en: "20 Years Later", hi: "20 साल बाद का सच", mr: "२० वर्षांनंतरचे सत्य" },
          caption: { en: "Account A reached ₹4.5 Lakhs. Account B only reached ₹3.3 Lakhs!", hi: "खाता A ₹4.5 लाख पहुंचा, जबकि B सिर्फ ₹3.3 लाख तक! ₹1.2 लाख सिर्फ फीस में चले गए।", mr: "खाते A ₹४.५ लाखांवर गेले, तर B फक्त ₹३.३ लाख! १.२ लाख फक्त फीमध्ये गेले." },
          visualState: "gap",
          valueDisplay: "₹1.2 Lakh Gap!"
        }
      ]
    }
  },
  {
    id: 'risk',
    title: {
      en: 'Risk & Predictability',
      hi: 'जोखिम और निश्चितता (Risk)',
      mr: 'जोखीम आणि अंदाज (Risk)'
    },
    oneLiner: {
      en: "Risk is not just danger—it's how unpredictable things are.",
      hi: "जोखिम का मतलब सिर्फ खतरा नहीं, बल्कि परिणाम का अनिश्चित होना है।",
      mr: "जोखीम म्हणजे फक्त धोका नव्हे, तर अनिश्चितता."
    },
    icon: '🛡️',
    themeColor: 'lavender',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200',
    timeEstimate: '3 min',
    progress: 30,
    simpleExplanation: {
      en: "Risk is the chance that the outcome will be different from what you expected. High risk doesn't guarantee high return—it guarantees wider swings in both directions.",
      hi: "जोखिम का मतलब है कि नतीजा आपकी उम्मीद से कितना अलग हो सकता है। ज्यादा जोखिम का मतलब पक्का ज्यादा मुनाफा नहीं, बल्कि दोनों तरफ बड़े झटके लगना है।",
      mr: "जोखीम म्हणजे निकालाची अनिश्चितता. जास्त जोखीम म्हणजे हमखास जास्त नफा नव्हे, तर दोन्ही बाजूंनी मोठे धक्के बसण्याची शक्यता."
    },
    everydayAnalogy: {
      en: "Taking the metro to work is low-risk: predictable arrival time. Walking on a stormy day is high-risk: you might arrive early or get soaked wet.",
      hi: "मेट्रो ट्रेन से जाना कम जोखिम है: समय पक्का पता है। आंधी में छाता लेकर निकलना ज्यादा जोखिम है: आप जल्दी भी पहुंच सकते हैं या भीग भी सकते हैं।",
      mr: "लोकल किंवा मेट्रोने जाणे कमी जोखमीचे: वेळेची खात्री. वादळात निघणे जास्त जोखमीचे: लवकर पोहचाल किंवा पूर्ण भिजून जाल."
    },
    whyItMatters: {
      en: "Anyone promising 'High returns with Zero risk' is either hiding the truth or engaging in fraud. Risk and return are tied together.",
      hi: "अगर कोई कहे 'बिना किसी जोखिम के भारी मुनाफा', तो वह धोखा दे रहा है। कोई भी प्रतिफल बिना अनिश्चितता के नहीं आता।",
      mr: "'झिरो जोखीम आणि भरपूर नफा' सांगणारा फसवणूक करत असतो. नफा आणि जोखीम नेहमी हातात हात घालून चालतात."
    },
    audioNarration: {
      en: "Risk is like weather. A calm sunny day is predictable. A windy monsoon day can be exciting or messy. Know your own umbrella before you step out.",
      hi: "जोखिम मौसम की तरह है। साफ धूप में सब आसान है, आंधी-तूफान में छाता जरूरी है। बाहर निकलने से पहले अपनी क्षमता पहचानें।",
      mr: "जोखीम म्हणजे हवामान. निरभ्र आकाश सुरक्षित, पण वादळात छत्री हवीच. बाहेर पडण्यापूर्वी आपली तयारी पाहा."
    },
    memoryCheck: {
      question: {
        en: "What should you do if an ad promises 'Guaranteed 25% returns with Zero risk'?",
        hi: "अगर कोई विज्ञापन कहे 'बिना किसी जोखिम के पक्का 25% मुनाफा', तो क्या समझना चाहिए?",
        mr: "जर कोणी जाहिरातीत 'कोणतीही जोखीम नसताना खात्रीशीर २५% नफा' असा दावा केला, तर काय समजावे?"
      },
      options: {
        en: ["Be extremely suspicious—zero-risk high-returns do not exist", "Invest all family savings immediately", "Call friends and borrow money to put in"],
        hi: ["तुरंत सावधान हो जाएं—बिना जोखिम ज्यादा मुनाफे का कोई जादुई तरीका नहीं होता", "परिवार की सारी बचत तुरंत लगा दें", "दोस्तों से कर्ज लेकर भी लगा दें"],
        mr: ["तात्काळ सावध व्हा—विनाजोखीम हमखास मोठा परतावा देणे अशक्य आहे", "कुटुंबाची सर्व पुंजी लगेच लावावी", "मित्रांकडून उसने घेऊन पैसे टाकावे"]
      },
      correctIndex: 0,
      explanation: {
        en: "Spot on! SEBI and investor protection rules explicitly remind us that extreme guaranteed returns are hallmarks of scams.",
        hi: "बिल्कुल! सेबी (SEBI) भी यही सिखाती है कि गारंटीड भारी मुनाफे के दावे झूठे होते हैं।",
        mr: "अगदी बरोबर! सेबी (SEBI) चा हाच मुख्य नियम आहे की विनाजोखीम परतावा ही फसवणूक असते."
      }
    },
    microVideo: {
      title: {
        en: "Risk in 60s",
        hi: "60 सेकंड में जोखिम",
        mr: "६० सेकंदात जोखीम"
      },
      duration: "40s",
      scenes: [
        {
          heading: { en: "Two Roads", hi: "दो रास्ते", mr: "दोन रस्ते" },
          caption: { en: "Road 1 is paved and flat. Road 2 has cliffs and shortcuts.", hi: "सड़क 1 सीधी और समतल है। सड़क 2 पर खाई और शॉर्टकट हैं।", mr: "रस्ता १ सपाट आहे. रस्ता २ वर खोल दरी आणि शॉर्टकट आहेत." },
          visualState: "roads",
          valueDisplay: "Predictable vs Volatile"
        },
        {
          heading: { en: "The Trade-off", hi: "सच्चाई की समझ", mr: "सत्य काय आहे?" },
          caption: { en: "Road 2 might get you there faster, or you might pop a tire.", hi: "सड़क 2 से जल्दी पहुंच सकते हैं, या टायर फट सकता है।", mr: "रस्ता २ वरून लवकर पोहचू शकता किंवा टायर फुटू शकतो." },
          visualState: "flat_tire",
          valueDisplay: "Uncertainty"
        },
        {
          heading: { en: "The Golden Rule", hi: "सुनहरा नियम", mr: "सुवर्ण नियम" },
          caption: { en: "Risk means outcomes can differ. Always choose the road that fits your timeline.", hi: "जोखिम का अर्थ है परिणाम बदलना। हमेशा अपनी समयसीमा के अनुसार चुनें।", mr: "आपल्या वेळेनुसार योग्य रस्त्याची निवड करा." },
          visualState: "compass",
          valueDisplay: "Know Your Road"
        }
      ]
    }
  },
  {
    id: 'nav',
    title: {
      en: 'NAV (Net Asset Value)',
      hi: 'एन.ए.वी (NAV)',
      mr: 'एन.ए.व्ही (NAV)'
    },
    oneLiner: {
      en: "The price tag per piece of a shared basket.",
      hi: "एक साझी टोकरी के प्रति टुकड़े की कीमत।",
      mr: "एका सामायिक टोपलीच्या एका तुकड्याची किंमत."
    },
    icon: '🧾',
    themeColor: 'mint',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    timeEstimate: '2 min',
    progress: 20,
    simpleExplanation: {
      en: "NAV is simply the total market value of all assets inside a pooled basket, divided by the number of units issued. A low NAV does not mean cheap, and a high NAV does not mean expensive!",
      hi: "NAV का मतलब है टोकरी में रखी सारी चीज़ों की कुल कीमत को कुल यूनिट्स की संख्या से भाग देना। कम NAV का मतलब 'सस्ता' और ज्यादा NAV का मतलब 'महंगा' नहीं होता!",
      mr: "टोपलीतील सर्व वस्तूंच्या एकूण किमतीला एकूण भागांनी (युनिट्सनी) भागणे म्हणजे NAV. कमी NAV म्हणजे स्वस्त आणि जास्त NAV म्हणजे महाग असे अजिबात नसते!"
    },
    everydayAnalogy: {
      en: "Imagine a 1 kg cake worth ₹600. If cut into 6 big slices, each slice is ₹100. If cut into 12 small slices, each slice is ₹50. The cake's total value is identical!",
      hi: "मान लीजिए ₹600 का 1 किलो का केक है। अगर उसके 6 बड़े टुकड़े करें तो हर टुकड़ा ₹100 का है। 12 छोटे टुकड़े करें तो ₹50 का। केक का कुल वजन और स्वाद वही है!",
      mr: "₹६०० चा १ किलो केक समजा. ६ तुकडे केले तर एक तुकडा ₹१०० चा. १२ तुकडे केले तर ₹५० चा. केक तेवढाच आहे, फक्त तुकड्यांचा आकार बदलला!"
    },
    whyItMatters: {
      en: "Many beginners mistakenly buy a fund just because its NAV is ₹10 instead of ₹100, thinking it's on sale. Understanding NAV stops this blunder.",
      hi: "कई नए निवेशक सोचते हैं कि ₹10 का NAV 'सस्ता' है और ₹100 का 'महंगा'। यह सिर्फ केक के टुकड़े का आकार है, कोई सेल नहीं!",
      mr: "अनेक जण ₹१० ची NAV 'स्वस्त' म्हणून घेतात. हे केकच्या आकारासारखे आहे, कोणताही डिस्काउंट नाही हे समजणे गरजेचे आहे."
    },
    audioNarration: {
      en: "Don't judge a fund by its NAV. A ₹10 unit and a ₹100 unit holding the same underlying basket grow at the exact same percentage rate.",
      hi: "NAV देखकर मत सोचिए कि क्या सस्ता है और क्या महंगा। अगर 10% की बढ़त होगी तो ₹10 वाला भी 10% बढ़ेगा और ₹100 वाला भी।",
      mr: "NAV लहान आहे म्हणून ते स्वस्त नसते. १०% वाढ झाली तर दोघांनाही सारखाच १०% नफा मिळतो."
    },
    memoryCheck: {
      question: {
        en: "Is a fund with an NAV of ₹10 cheaper than one with an NAV of ₹100?",
        hi: "क्या ₹10 NAV वाला फंड ₹100 NAV वाले फंड से सस्ता होता है?",
        mr: "₹१० NAV असलेला फंड ₹१०० NAV असलेल्या फंडापेक्षा स्वस्त असतो का?"
      },
      options: {
        en: ["No, NAV is just unit size; growth depends on the underlying basket", "Yes, ₹10 is much cheaper to buy", "Yes, ₹10 always gives 10 times more profit"],
        hi: ["नहीं, NAV केवल प्रति यूनिट की कीमत है; लाभ अंतर्निहित चीज़ों की बढ़त पर निर्भर करता है", "हाँ, ₹10 बहुत सस्ता होता है", "हाँ, ₹10 में 10 गुना ज्यादा फायदा होता है"],
        mr: ["नाही, NAV म्हणजे फक्त एका भागाचे मूल्य; नफा मूळ गुंतवणुकीच्या वाढीवर अवलंबून असतो", "होय, ₹१० खूप स्वस्त आहे", "होय, ₹१० मध्ये १० पट जास्त नफा होतो"]
      },
      correctIndex: 0,
      explanation: {
        en: "Bravo! NAV is merely the slice size, not a discount sticker.",
        hi: "शाबाश! NAV सिर्फ टुकड़े का माप है, कोई छूट नहीं।",
        mr: "छान! NAV म्हणजे केवळ तुकड्याचे माप, कोणतीही सवलत नाही."
      }
    },
    microVideo: {
      title: {
        en: "NAV in 60s",
        hi: "60 सेकंड में NAV",
        mr: "६० सेकंदात NAV"
      },
      duration: "40s",
      scenes: [
        {
          heading: { en: "The Fruit Basket", hi: "फलों की टोकरी", mr: "फळांची टोपली" },
          caption: { en: "A basket contains apples and oranges worth ₹1,000 total.", hi: "एक टोकरी में सेब और संतरे हैं जिनकी कुल कीमत ₹1,000 है।", mr: "एका टोपलीत सफरचंद आणि संत्री आहेत, एकूण किंमत ₹१,०००." },
          visualState: "basket",
          valueDisplay: "Basket Value = ₹1,000"
        },
        {
          heading: { en: "Dividing into Units", hi: "यूनिट्स में बंटवारा", mr: "भागांची विभागणी" },
          caption: { en: "Divide the basket into 100 equal coupons. Each coupon is worth ₹10.", hi: "टोकरी को 100 कूपनों में बांटें। प्रत्येक कूपन ₹10 का हुआ।", mr: "१०० कूपन केले. प्रत्येक कूपन ₹१० चे झाले." },
          visualState: "divide",
          valueDisplay: "NAV = ₹10"
        },
        {
          heading: { en: "The Big Lesson", hi: "बड़ा सबक", mr: "मोठा धडा" },
          caption: { en: "If the fruit value rises 20%, each coupon becomes ₹12. NAV is just your coupon's value!", hi: "फलों के दाम 20% बढ़े तो कूपन ₹12 का हुआ। यही NAV है!", mr: "फळे २०% महागली तर कूपन ₹१२ चे झाले. हाच तुमचा NAV!" },
          visualState: "lightbulb",
          valueDisplay: "NAV is your slice value"
        }
      ]
    }
  },
  {
    id: 'nomination',
    title: {
      en: 'Nomination',
      hi: 'नामांकन (Nomination)',
      mr: 'वारसदार नोंदणी (Nomination)'
    },
    oneLiner: {
      en: "Handing the keys to someone you trust.",
      hi: "अपने भरोसेमंद व्यक्ति को चाबी सौंपना।",
      mr: "आपल्या विश्वासातील व्यक्तीकडे चावी सोपवणे."
    },
    icon: '👨‍👩‍👧',
    themeColor: 'coral',
    badgeColor: 'bg-orange-50 text-orange-600 border-orange-200',
    timeEstimate: '3 min',
    progress: 10,
    simpleExplanation: {
      en: "Nomination designates a trusted custodian who can smoothly claim and safeguard your investments if something unexpected happens to you, saving your family years of court hurdles.",
      hi: "नामांकन का मतलब है किसी भरोसेमंद व्यक्ति का नाम दर्ज करना जो आपके बाद बिना किसी कानूनी परेशानी के आपके पैसे की देखभाल या दावा कर सके।",
      mr: "वारसदार नोंदणी म्हणजे आपल्यानंतर आपल्या पैशांची काळजी घेण्यासाठी किंवा ते सहज मिळवण्यासाठी विश्वासातील व्यक्तीचे नाव नोंदवणे."
    },
    everydayAnalogy: {
      en: "Leaving a spare house key with your spouse or parent vs locking the door with no spare key anywhere in the city.",
      hi: "जैसे घर की एक अतिरिक्त चाबी अपने परिवार को सौंप कर जाना, ताकि ताला तोड़ने की नौबत न आए।",
      mr: "घराची जादा चावी विश्वासातील व्यक्तीकडे ठेवण्यासारखे, जेणेकरून कुलूप तोडण्याची वेळ येत नाही."
    },
    whyItMatters: {
      en: "Over ₹1.5 Lakh Crore sits unclaimed in Indian banks and mutual funds simply because people forgot to add a nominee. It takes 2 minutes and protects your family.",
      hi: "भारत में ₹1.5 लाख करोड़ से ज्यादा लावारिस पड़ा है सिर्फ इसलिए क्योंकि लोगों ने नॉमिनी नहीं जोड़ा था। इसमें 2 मिनट लगते हैं और परिवार सुरक्षित रहता है।",
      mr: "भारतात १.५ लाख कोटींपेक्षा जास्त रक्कम केवळ वारसदार न नोंदवल्यामुळे अडकून पडली आहे. फक्त २ मिनिटे लागतात आणि कुटुंब सुरक्षित राहते."
    },
    audioNarration: {
      en: "Nomination is not paperwork; it is an act of care. A simple nominee name ensures your hard-earned money reaches your family when they need it most without running between offices.",
      hi: "नामांकन सिर्फ फॉर्म भरना नहीं, अपनों की फिक्र है। एक नाम जोड़कर आप अपने परिवार को दफ्तरों के चक्कर काटने से बचाते हैं।",
      mr: "वारस नोंदणी म्हणजे केवळ कागदपत्र नाही, ती आपुलकी आहे. एक नाव नोंदवून तुम्ही तुमच्या कुटुंबाला कचेऱ्यांच्या फेऱ्या मारण्यापासून वाचवता."
    },
    memoryCheck: {
      question: {
        en: "What happens if an investment has a valid registered nominee?",
        hi: "यदि किसी निवेश में सही नॉमिनी दर्ज हो तो क्या फायदा होता है?",
        mr: "गुंतवणुकीत योग्य वारसदाराची नोंद असल्यास काय फायदा होतो?"
      },
      options: {
        en: ["The funds can be smoothly transferred to the family without long court battles", "The investment automatically doubles in value", "The government takes away 50% as fee"],
        hi: ["मुसीबत के समय परिवार को बिना अदालती उलझन के आसानी से पैसा मिल जाता है", "पैसा अपने आप दोगुना हो जाता है", "सरकार 50% फीस काट लेती है"],
        mr: ["संकटकाळी कुटुंबाला कोर्टाच्या फेऱ्यांशिवाय पैसे सहज हस्तांतरित होतात", "गुंतवणूक आपोआप दुप्पट होते", "सरकार ५०% फी कापून घेते"]
      },
      correctIndex: 0,
      explanation: {
        en: "Correct! Nomination creates a clear bridge for your family.",
        hi: "सही! नॉमिनेशन आपके परिवार के लिए एक आसान रास्ता बनाता है।",
        mr: "अगदी बरोबर! वारस नोंदणी कुटुंबासाठी सोपा मार्ग तयार करते."
      }
    },
    microVideo: {
      title: {
        en: "Nomination in 60s",
        hi: "60 सेकंड में नामांकन",
        mr: "६० सेकंदात वारस नोंदणी"
      },
      duration: "45s",
      scenes: [
        {
          heading: { en: "Hard-Earned Savings", hi: "मेहनत की कमाई", mr: "कष्टाची कमाई" },
          caption: { en: "Ramesh worked 25 years and saved ₹15,00,000 for his family.", hi: "रमेश ने 25 साल मेहनत कर परिवार के लिए ₹15,00,000 बचाए।", mr: "रमेशने २५ वर्षे मेहनत करून कुटुंबासाठी ₹१५,००,००० साठवले." },
          visualState: "savings",
          valueDisplay: "₹15,00,000"
        },
        {
          heading: { en: "The Missing 2 Minutes", hi: "2 मिनट की चूक", mr: "२ मिनिटांची चूक" },
          caption: { en: "He postponed adding a nominee, thinking 'I will do it later.'", hi: "उसने सोचा 'नॉमिनी बाद में जोड़ दूंगा' और टाल दिया।", mr: "त्याने 'नंतर करू' म्हणून वारसाचे नाव नोंदवणे पुढे ढकलले." },
          visualState: "clock",
          valueDisplay: "Nominee: [Empty]"
        },
        {
          heading: { en: "The Hurdle", hi: "मुसीबत का दौर", mr: "अडचणींचा काळ" },
          caption: { en: "Without a nominee, his family had to run to courts and offices for 18 months.", hi: "अचानक कुछ होने पर परिवार को 18 महीने तक अदालतों के चक्कर काटने पड़े।", mr: "वारस नसल्याने कुटुंबाला १८ महिने कार्यालयांचे खेटे घालावे लागले." },
          visualState: "court",
          valueDisplay: "18 Months Delay"
        },
        {
          heading: { en: "The 2-Minute Habit", hi: "2 मिनट का समाधान", mr: "२ मिनिटांचे समाधान" },
          caption: { en: "Adding a nominee takes 2 minutes on your phone. Do it today.", hi: "फोन से 2 मिनट में नॉमिनी जोड़ें। आज ही पूरा करें।", mr: "मोबाईलवरून २ मिनिटांत वारस जोडा. आजच पूर्ण करा." },
          visualState: "shield",
          valueDisplay: "Protect Loved Ones"
        }
      ]
    }
  },
  {
    id: 'inflation',
    title: {
      en: 'Inflation',
      hi: 'महंगाई (Inflation)',
      mr: 'महागाई (Inflation)'
    },
    oneLiner: {
      en: "The invisible rupee-shrinker that never sleeps.",
      hi: "चुपचाप आपके पैसे की ताकत को कम करने वाला असर।",
      mr: "शांतपणे पैशाचे मोल कमी करणारा न दिसणारा राक्षस."
    },
    icon: '🎈',
    themeColor: 'coral',
    badgeColor: 'bg-red-50 text-red-600 border-red-200',
    timeEstimate: '2 min',
    progress: 15,
    simpleExplanation: {
      en: "Inflation is the gradual rise in prices over time, which means ₹100 buys fewer goods tomorrow than it does today. Keeping cash under a mattress actually loses purchasing power!",
      hi: "महंगाई का मतलब है चीजों के दाम धीरे-धीरे बढ़ना। इसका मतलब है कि आज का ₹100 कल कम सामान खरीदेगा। गद्दे के नीचे रखा नकद पैसा असल में घट रहा होता है!",
      mr: "महागाई म्हणजे वस्तूंचे भाव हळूहळू वाढणे. म्हणजेच आजच्या ₹१०० मध्ये उद्या कमी वस्तू मिळतील. कपाटात रोख ठेवलेले पैसे प्रत्यक्षात कमी होत असतात!"
    },
    everydayAnalogy: {
      en: "Remember when a hot samosa or cup of chai was ₹5? Today the same chai is ₹15. The cup didn't get bigger; your rupee's buying power got smaller.",
      hi: "याद है जब समोसा या चाय ₹5 की मिलती थी? आज वही चाय ₹15 की है। कप बड़ा नहीं हुआ, पैसे की ताकत कम हो गई।",
      mr: "पूर्वी चहाचा कप ₹५ ला मिळायचा, आज तोच चहा ₹१५ ला मिळतो. कपाचा आकार वाढला नाही, रुपयाचे मोल कमी झाले."
    },
    whyItMatters: {
      en: "To beat inflation, your savings must grow faster than the inflation rate, otherwise you are quietly becoming poorer even if your bank balance looks the same.",
      hi: "महंगाई को हराने के लिए आपकी बचत को महंगाई दर से ज्यादा तेजी से बढ़ना चाहिए, वरना आपका पैसा अंदर ही अंदर कमजोर होता रहेगा।",
      mr: "महागाईला हरवण्यासाठी पैशांची वाढ महागाईच्या दरापेक्षा वेगाने झाली पाहिजे, नाहीतर शिल्लक तेवढीच दिसेल पण खरेदी ताकद कमी होईल."
    },
    audioNarration: {
      en: "Inflation is like an ice cube in your pocket. If you don't use it or protect it, it melts a little bit every single day.",
      hi: "महंगाई जेब में रखे बर्फ के टुकड़े जैसी है। अगर आप इसे सुरक्षित नहीं करेंगे तो यह हर दिन थोड़ा-थोड़ा पिघलता रहेगा।",
      mr: "महागाई म्हणजे खिशातील बर्फाच्या खड्यासारखी आहे. योग्य वापर केला नाही तर ती दररोज थोडी थोडी वितळत राहते."
    },
    memoryCheck: {
      question: {
        en: "If inflation is 6% per year and your cash earns 0% under the bed, what happens to your money?",
        hi: "अगर महंगाई 6% है और आपका नकद पैसा अलमारी में 0% पर रखा है, तो क्या होगा?",
        mr: "जर महागाई ६% असेल आणि तुमचे पैसे कपाटात ०% वर पडून असतील, तर काय होईल?"
      },
      options: {
        en: ["The number of notes stays the same, but they buy 6% less goods", "The notes magically multiply", "Nothing happens, cash is 100% immune"],
        hi: ["नोटों की गिनती वही रहेगी, लेकिन वो 6% कम सामान खरीद पाएंगे", "नोट अपने आप बढ़ जाएंगे", "कुछ नहीं होगा, नकद हमेशा सुरक्षित रहता है"],
        mr: ["नोट्यांची संख्या तीच राहील, पण त्यातून ६% कमी वस्तू खरेदी करता येतील", "नोट्या आपोआप वाढतील", "काहीच होणार नाही, रोख रक्कम सुरक्षित राहते"]
      },
      correctIndex: 0,
      explanation: {
        en: "Spot on! That is the silent erosion of purchasing power.",
        hi: "बिल्कुल सही! इसी को क्रय शक्ति का कम होना कहते हैं।",
        mr: "अगदी बरोबर! यालाच खरेदी शक्ती घटणे म्हणतात."
      }
    },
    microVideo: {
      title: {
        en: "Inflation in 60s",
        hi: "60 सेकंड में महंगाई",
        mr: "६० सेकंदात महागाई"
      },
      duration: "40s",
      scenes: [
        {
          heading: { en: "The ₹100 Note", hi: "₹100 का नोट", mr: "₹१०० ची नोट" },
          caption: { en: "In 2014, ₹100 bought 10 plates of snacks.", hi: "2014 में ₹100 से 10 प्लेट नाश्ता आता था।", mr: "२०१४ मध्ये ₹१०० मध्ये १० प्लेट नाश्ता यायचा." },
          visualState: "full_basket",
          valueDisplay: "2014: 10 Plates"
        },
        {
          heading: { en: "10 Years Pass", hi: "10 साल बीत गए", mr: "१० वर्षे उलटली" },
          caption: { en: "In 2024, the exact same ₹100 note only buys 4 plates!", hi: "2024 में उसी ₹100 के नोट से केवल 4 प्लेट नाश्ता आता है!", mr: "२०२४ मध्ये त्याच ₹१०० च्या नोटेत फक्त ४ प्लेट नाश्ता येतो!" },
          visualState: "half_basket",
          valueDisplay: "2024: 4 Plates"
        },
        {
          heading: { en: "Beat the Melting Ice", hi: "बर्फ को पिघलने से बचाएं", mr: "बर्फ वितळण्यापासून वाचवा" },
          caption: { en: "Your money needs to grow to preserve what it can buy.", hi: "खरीदने की ताकत बनाए रखने के लिए पैसों का बढ़ना जरूरी है।", mr: "खरेदी क्षमता टिकवण्यासाठी पैशांची वाढ होणे गरजेचे आहे." },
          visualState: "shield",
          valueDisplay: "Grow Your Money"
        }
      ]
    }
  }
];
