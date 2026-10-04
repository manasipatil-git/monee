import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { VoicePlayer } from '../common/VoicePlayer';
import { translations } from '../../data/translations';

export const AskMoneeModal: React.FC = () => {
  const { isAskMoneeOpen, setIsAskMoneeOpen, language, addXp } = useApp();
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'monee'; text: string }>>([
    {
      sender: 'monee',
      text: language === 'mr'
        ? "नमस्कार अदिती! मी monee आहे. पैशांविषयीची कोणतीही शंका साध्या, सोप्या मराठीत विचारा."
        : language === 'hi'
        ? "नमस्ते अदिति! मैं monee हूँ। पैसों की दुनिया से जुड़ा कोई भी सवाल आसान भाषा में पूछिए।"
        : "Hey Aditi! I am monee. Ask me anything about financial concepts in plain everyday words."
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const t = translations[language];

  if (!isAskMoneeOpen) return null;

  const quickQuestions = language === 'mr'
    ? [
        "Volatility म्हणजे काय?",
        "Nominee (वारसदार) का महत्त्वाचा आहे?",
        "NAV म्हणजे काय?",
        "कंपाउंडिंग लहान बचतीवर काम करते का?",
        "महागाईमुळे रोख पैशांचे नुकसान कसे होते?"
      ]
    : language === 'hi'
    ? [
        "उतार-चढ़ाव (Volatility) क्या होता है?",
        "नॉमिनी जोड़ना क्यों ज़रूरी है?",
        "म्यूचुअल फंड में NAV क्या होता है?",
        "क्या कंपाउंडिंग छोटी बचत पर काम करता है?",
        "महंगाई से नकद पैसा कैसे घटता है?"
      ]
    : [
        "What is market volatility?",
        "Why do I need a nominee?",
        "What does NAV mean in simple terms?",
        "Does compounding work for small savings?",
        "How does inflation hurt cash savings?"
      ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || query;
    if (!q.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: q }]);
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = q.toLowerCase();

      if (lower.includes('volat') || lower.includes('उतार') || lower.includes('चढ') || lower.includes('घसरण')) {
        reply = language === 'mr'
          ? "चढ-उतार (Volatility) म्हणजे पाळण्यासारखा खेळ, कधी वर तर कधी खाली. रस्त्यावरील खड्डे जसे प्रवास थांबवत नाहीत, तसाच बाजाराचा चढ-उतार असतो. जोपर्यंत आपण घाबरून कमी भावात विकत नाही, तोपर्यंत कायमचे नुकसान होत नाही."
          : language === 'hi'
          ? "उतार-चढ़ाव का मतलब है कि कीमत झूले की तरह ऊपर-नीचे होती है। जैसे सड़क के गड्ढे यात्रा रोकते नहीं, वैसे ही बाज़ार का उतार-चढ़ाव आपके सफर का ही हिस्सा है। जब तक आप घबराकर नहीं बेचते, यह पक्का नुकसान नहीं होता।"
          : "Volatility simply means prices fluctuate up and down like waves. The ride might feel bumpy, but the bumps do not mean you won't reach your long-term goal unless you panic-sell.";
      } else if (lower.includes('nominee') || lower.includes('नॉमिनी') || lower.includes('वारस')) {
        reply = language === 'mr'
          ? "वारसदार नोंदणी म्हणजे आपल्या विश्वासातील व्यक्तीकडे घराची जादा चावी सोपवण्यासारखे. भारतात १.५ लाख कोटींपेक्षा जास्त रक्कम केवळ वारसदार न नोंदवल्यामुळे अडकून पडली आहे! फक्त २ मिनिटांचे काम आहे."
          : language === 'hi'
          ? "नॉमिनी वह भरोसेमंद इंसान है जिसे आप अपने पैसे की देखरेख की चाबी सौंपते हैं। भारत में ₹1.5 लाख करोड़ लावारिस पड़ा है सिर्फ इसलिए क्योंकि लोगों ने नॉमिनी नहीं जोड़ा था! इसमें सिर्फ 2 मिनट लगते हैं।"
          : "Nomination means registering a trusted person to claim your investments smoothly without court hassles. Over ₹1.5 Lakh Crore lies unclaimed in India simply because investors forgot this 2-minute step.";
      } else if (lower.includes('nav') || lower.includes('यूनिट')) {
        reply = language === 'mr'
          ? "NAV म्हणजे सामायिक टोपलीतील एका छोट्या वाट्याचे मूल्य. जसे केकचे ६ तुकडे करा किंवा १२, केक तेवढाच राहतो. कमी NAV म्हणजे स्वस्त असा गैरसमज अजिबात करून घेऊ नका."
          : language === 'hi'
          ? "NAV केवल एक साझी टोकरी के एक टुकड़े या एक कूपन की कीमत है। कम NAV का मतलब 'सस्ता' नहीं और ज्यादा का मतलब 'महंगा' नहीं। जैसे केक को 6 टुकड़ों में काटो या 12 में, केक वही रहता है!"
          : "NAV is merely the per-slice value of a pooled basket. A ₹10 NAV is not cheaper than a ₹100 NAV—just like cutting a cake into 10 slices doesn't make the cake bigger or smaller than cutting it into 5 slices.";
      } else if (lower.includes('compound') || lower.includes('चक्र')) {
        reply = language === 'mr'
          ? "कंपाउंडिंग म्हणजे पैशाने पैशाला जन्म देण्याची जादू! छोटी बचतही १०-२० वर्षे चालू राहिली, तर वेळेच्या जादूने तिचा महावृक्ष होतो."
          : language === 'hi'
          ? "कंपाउंडिंग का मतलब है: जब आपकी कमाई खुद कमाई करने लगे! छोटी सी बचत भी अगर 10-20 साल तक चलती रहे, तो समय की ताकत से वह बहुत बड़ा वटवृक्ष बन जाती है।"
          : "Compounding means growth itself starts growing. Think of rolling a tiny snowball down a hill: with patience and time, it gets bigger faster and faster on its own.";
      } else {
        reply = language === 'mr'
          ? "छान प्रश्न! लक्षात ठेवा: पैशांच्या जगात घाई करू नका. आधी 'monee' वर सुरक्षित सराव करा, मग निर्णय घ्या."
          : language === 'hi'
          ? "अच्छा सवाल! हमेशा याद रखें: पैसों की दुनिया में बिना समझे कदम न उठाएं। पहले 'monee' पर सिम्युलेशन से अनुभव करें, फिर समझें।"
          : "Great question! The core rule is: Experience money in a sandbox before risking real hard-earned cash.";
      }

      setMessages((prev) => [...prev, { sender: 'monee', text: reply }]);
      setIsTyping(false);
      addXp(15, 'Asked monee a financial question');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-cream-50 text-charcoal-900 rounded-3xl w-full max-w-sm h-[560px] flex flex-col border border-cream-300 shadow-soft-lg overflow-hidden">
        {/* Header */}
        <div className="p-3.5 bg-white border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
              🎙️
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-charcoal-900 leading-tight">
                {t.askMonee}
              </h3>
              <p className="text-[10px] text-charcoal-500">
                {language === 'mr' ? 'सोप्या भाषेत शिका • कोणताही आर्थिक सल्ला नाही' : language === 'hi' ? 'सीखने का साथी • कोई वित्तीय सलाह नहीं' : 'Learning companion • No financial advice'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAskMoneeOpen(false)}
            className="p-1 rounded-full text-charcoal-400 hover:text-charcoal-700 hover:bg-cream-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick query chips */}
        <div className="px-3 pt-2.5 pb-1 bg-cream-100/50 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-cream-300 hover:border-coral-400 text-[11px] font-medium text-charcoal-700 transition-all active:scale-95"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat message stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                m.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-charcoal-900 text-white rounded-tr-xs'
                    : 'bg-white text-charcoal-900 border border-cream-200 shadow-soft rounded-tl-xs'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'monee' && (
                <div className="mt-1">
                  <VoicePlayer
                    textToSpeak={m.text}
                    hindiFallbackText={m.text}
                    size="sm"
                    variant="ghost"
                    label={language === 'mr' ? 'ऐका' : language === 'hi' ? 'सुनें' : 'Listen'}
                  />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1 p-2 bg-white rounded-2xl border border-cream-200 w-16">
              <span className="w-1.5 h-1.5 bg-coral-500 rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-coral-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-coral-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="p-3 bg-white border-t border-cream-200 flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={
              language === 'mr'
                ? "काहीही विचारा (उदा. NAV म्हणजे काय?)..."
                : language === 'hi'
                ? "कुछ भी पूछें (उदा. उतार-चढ़ाव क्या है?)..."
                : "Ask any financial question in plain words..."
            }
            className="flex-1 bg-cream-100 rounded-full px-4 py-2 text-xs text-charcoal-900 placeholder:text-charcoal-400 outline-none border border-cream-200 focus:border-coral-400"
          />

          <button
            onClick={() => handleSend()}
            disabled={!query.trim()}
            className="w-8 h-8 rounded-full bg-coral-500 hover:bg-coral-600 disabled:opacity-40 text-white flex items-center justify-center shadow-coral-glow transition-transform active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
