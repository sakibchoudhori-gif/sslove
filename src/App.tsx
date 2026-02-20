import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars, Camera, Calendar, Sparkles, Music, Music2, Gift } from 'lucide-react';

// --- Components ---

const LoveRain = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; size: number; duration: number; delay: number; color: string; opacity: number; xOffset: number }[]>([]);

  useEffect(() => {
    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#ec4899', '#ffe4e6', '#ff1493'];
    const newHearts = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 18 + 6,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 10 - 5, // Some start immediately or even "before"
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.3,
      xOffset: Math.random() * 100 - 50,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="heart-bg">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="love-rain-heart"
          style={{
            left: heart.left,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            '--x-offset': `${heart.xOffset}px`,
          } as any}
        >
          <Heart 
            size={heart.size} 
            fill={heart.color} 
            stroke="none" 
            style={{ 
              color: heart.color, 
              opacity: heart.opacity,
              filter: `drop-shadow(0 0 ${heart.size / 4}px ${heart.color})`
            }} 
          />
        </div>
      ))}
    </div>
  );
};

const RelationshipDuration = () => {
  const calculateDuration = () => {
    const startDate = new Date('March 2, 2025 00:00:00');
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [duration, setDuration] = useState(calculateDuration());

  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(calculateDuration());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {[
        { label: 'Days', value: duration.days },
        { label: 'Hours', value: duration.hours },
        { label: 'Mins', value: duration.minutes },
        { label: 'Secs', value: duration.seconds },
      ].map((item) => (
        <div key={item.label} className="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-pink-200 shadow-sm">
          <div className="text-3xl font-bold text-rose-500 font-serif">{item.value}</div>
          <div className="text-xs uppercase tracking-widest text-rose-400 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [giftMessage, setGiftMessage] = useState({ title: '', body: '' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      <LoveRain />
      <div className="bg-blur-vibe" />
      
      {/* Music Toggle (Simulated) */}
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed top-6 right-6 z-50 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-pink-100 text-rose-500 hover:scale-110 transition-transform"
      >
        {isPlaying ? <Music className="w-6 h-6" /> : <Music2 className="w-6 h-6 opacity-50" />}
      </button>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-4xl"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mx-auto" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-rose-600 leading-tight">
            💖 My Love Salma 💖
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-cursive text-rose-400 italic">
              আমার প্রিয় সালমা,
            </p>
            <p className="text-xl md:text-2xl font-serif text-slate-600 max-w-2xl mx-auto leading-relaxed">
              তুমি আমার জীবনের সবচেয়ে সুন্দর অনুভূতি। তোমার হাসিতেই আমার পৃথিবী পূর্ণতা পায়। <br />
              <span className="text-rose-400">Every moment with you feels like a dream I never want to wake up from. 🌸</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-10"
          >
            <a href="#message" className="animate-bounce inline-block text-rose-300">
              <div className="w-6 h-10 border-2 border-rose-200 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-rose-300 rounded-full"></div>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Love Message Section */}
      <section id="message" className="py-24 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 md:p-12 bg-white rounded-[2rem] shadow-xl shadow-rose-100 border border-rose-50 relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-500 p-3 rounded-full shadow-lg">
              <Stars className="w-6 h-6 text-white" />
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-rose-600 mb-6">প্রিয় সালমা,</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-serif italic">
              "তোমার চোখের মায়ায় আমি নিজেকে হারিয়ে ফেলি। তুমি শুধু আমার ভালোবাসা নও, তুমি আমার বেঁচে থাকার কারণ। <br />
              আমি কথা দিচ্ছি, জীবনের শেষ নিঃশ্বাস পর্যন্ত তোমার হাতটি ধরে রাখবো। <br />
              I promise to love you today, tomorrow, and forever. ♾️"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why I Love You Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-rose-600">🌷 Why I Love You</h2>
            <div className="h-1 w-24 bg-rose-200 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { text: "তোমার ওই মায়াবী হাসি", icon: "💗", sub: "Your magical smile" },
              { text: "তোমার পবিত্র ও সরল মন", icon: "🌸", sub: "Your pure and simple heart" },
              { text: "আমার প্রতি তোমার নিঃস্বার্থ যত্ন", icon: "💞", sub: "Your selfless care for me" },
              { text: "তোমার চোখের গভীরে খুঁজে পাওয়া প্রশান্তি", icon: "✨", sub: "Peace found deep in your eyes" },
              { text: "তুমি আমার জীবনের শ্রেষ্ঠ বন্ধু ও আত্মার সাথী", icon: "❤️", sub: "My best friend & soulmate" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white/60 hover:bg-white rounded-2xl border border-rose-100 transition-colors shadow-sm group"
              >
                <span className="text-3xl group-hover:scale-125 transition-transform">{item.icon}</span>
                <div>
                  <p className="text-lg font-bold text-rose-700">{item.text}</p>
                  <p className="text-sm text-slate-500 italic">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-24 px-6 bg-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex justify-center gap-2 text-rose-400">
              <Camera className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-rose-600">📸 স্মৃতিগুলো (Memories)</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto italic">
              আমাদের প্রতিটি মুহূর্ত আমার হৃদয়ের মণিকোঠায় যত্ন করে রাখা আছে। <br />
              তোমার সাথে কাটানো প্রতিটি সেকেন্ড আমার জীবনের শ্রেষ্ঠ উপহার।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-xl shadow-lg border border-rose-50 transform rotate-1 hover:rotate-0 transition-all"
              >
                <div className="aspect-[4/5] bg-rose-100 rounded-lg overflow-hidden relative group">
                  <img 
                    src={`https://picsum.photos/seed/love-${id}/800/1000`} 
                    alt="Memory" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white/50 group-hover:scale-150 transition-transform" />
                  </div>
                </div>
                <p className="mt-4 text-center font-cursive text-xl text-rose-500">
                  {id === 1 ? "First Date ✨" : id === 2 ? "Beautiful Moments 🌸" : "Forever Together ❤️"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship Duration Section */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <div className="space-y-2">
            <Calendar className="w-8 h-8 text-rose-400 mx-auto" />
            <h2 className="text-3xl font-serif font-bold text-rose-600">আমাদের ভালোবাসার পথচলা</h2>
            <p className="text-rose-400 italic">Our Journey of Love</p>
          </div>
          <RelationshipDuration />
        </div>
      </section>

      {/* Heartfelt Promises Section */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-rose-600">💌 হৃদয়ের কিছু কথা</h2>
            <p className="text-rose-400 italic mt-2">Heartfelt Words for You</p>
          </div>
          
          <div className="space-y-8">
            {[
              "তুমি আমার সেই স্বপ্ন, যা আমি প্রতি রাতে দেখি এবং প্রতি সকালে সত্যি হিসেবে পেতে চাই।",
              "হাজারো মানুষের ভিড়ে আমার চোখ শুধু তোমাকেই খুঁজে বেড়ায়, কারণ তুমিই আমার প্রশান্তি।",
              "ভালোবাসা মানে শুধু হাত ধরা নয়, ভালোবাসা মানে সারাজীবন ছায়ার মতো পাশে থাকা।",
              "তোমার হাসিতেই আমার বসন্ত আসে, আর তোমার অভিমানে আমার আকাশ মেঘলা হয়।",
              "পৃথিবীর সব সুখ একদিকে, আর তোমার পাশে এক মুহূর্ত কাটানো অন্য দিকে।"
            ].map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-rose-400 italic text-lg text-slate-700 font-serif"
              >
                " {quote} "
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-500/5 -z-10"></div>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="space-y-6"
          >
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-rose-600 leading-tight">
              সালমা, <br />
              সারাজীবন কি আমার পাশে এভাবেই থাকবে?
            </h2>
            <p className="text-2xl md:text-3xl font-cursive text-rose-500 italic">
              আমি আমার প্রতিটি সকাল তোমার মুখ দেখে শুরু করতে চাই। <br />
              তুমি কি সারাজীবন আমার হয়ে থাকবে? 💖
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setGiftMessage({
                  title: "প্রিয় সালমা,",
                  body: "তুমিই আমার জীবনের শ্রেষ্ঠ উপহার। আমার পৃথিবীটা তোমার ভালোবাসায় পূর্ণ। আই লাভ ইউ সো মাচ! ❤️"
                });
                setShowGift(true);
                setIsGiftOpened(false);
              }}
              className="px-12 py-4 bg-rose-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-rose-200 hover:bg-rose-600 transition-all flex flex-col items-center"
            >
              <span className="text-sm font-normal opacity-90 mb-1">হ্যাঁ, সারাজীবন তোমার হয়েই থাকবো</span>
              Yes, Forever! 💍
            </motion.button>
            <motion.button
              whileHover={{ x: [0, 10, -10, 10, 0] }}
              onClick={() => {
                setGiftMessage({
                  title: "আমার প্রিয়তমা সালমা,",
                  body: "তোমার হাসিতেই আমার পৃথিবী আলোকিত হয়। সারাজীবন এভাবেই আমার পাশে থেকো। তোমাকে অনেক ভালোবাসি! 🌸"
                });
                setShowGift(true);
                setIsGiftOpened(false);
              }}
              className="px-12 py-4 bg-white text-rose-400 border-2 border-rose-100 rounded-2xl font-bold text-xl flex flex-col items-center"
            >
              <span className="text-sm font-normal opacity-80 mb-1">অবশ্যই, তুমিই তো আমার সব</span>
              Of course! ❤️
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-rose-100 bg-white/50 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center gap-2 text-rose-500">
            <Heart className="w-5 h-5 fill-current" />
            <Heart className="w-5 h-5 fill-current" />
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <p className="text-rose-600 font-medium tracking-wide">
            সুজনের হৃদয়ের সবটুকু ভালোবাসা দিয়ে শুধু তোমার জন্য ❤️
          </p>
          <p className="text-rose-400 text-sm font-serif italic">
            For My Queen <span className="font-bold not-italic">Salma</span> 👑
          </p>
          <div className="pt-4 text-slate-400 text-xs tracking-widest uppercase">
            &copy; 2026 • Forever Yours
          </div>
        </div>
      </footer>
      {/* Gift Modal */}
      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-rose-900/40 backdrop-blur-sm"
            onClick={() => setShowGift(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 100 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowGift(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-rose-500"
              >
                ✕
              </button>

              {!isGiftOpened ? (
                <div className="space-y-6">
                  <motion.div
                    animate={{ 
                      rotate: [0, -5, 5, -5, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="cursor-pointer"
                    onClick={() => setIsGiftOpened(true)}
                  >
                    <Gift className="w-32 h-32 text-rose-500 mx-auto" strokeWidth={1.5} />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-rose-600">তোমার জন্য একটি উপহার!</h3>
                    <p className="text-slate-500">বক্সটিতে ক্লিক করে খুলে দেখো...</p>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="relative inline-block">
                    <Heart className="w-24 h-24 text-rose-500 fill-rose-500 mx-auto animate-pulse" />
                    <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-amber-400" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-rose-600 italic">"{giftMessage.title}"</h3>
                    <p className="text-xl text-slate-700 leading-relaxed font-serif">
                      {giftMessage.body.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowGift(false)}
                    className="mt-4 px-8 py-2 bg-rose-100 text-rose-600 rounded-full font-medium hover:bg-rose-200 transition-colors"
                  >
                    বন্ধ করো
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
