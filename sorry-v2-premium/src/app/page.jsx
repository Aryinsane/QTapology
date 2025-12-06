"use client"

import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import FirstScreen from "@/components/FirstScreen";
import SecondScreen from "@/components/SecondScreen";
import ThirdScreen from "@/components/ThirdScreen";
import FourthScreen from "@/components/FourthScreen";
import FifthScreen from "@/components/FifthScreen";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)
  const [hearts, setHearts] = useState([])

  const heartColors = [
    "heart-color-1",
    "heart-color-2",
    "heart-color-3",
    "heart-color-4",
    "heart-color-5"
  ]

  const heartSizes = ["w-4 h-4", "w-5 h-5", "w-6 h-6", "w-7 h-7", "w-8 h-8"]

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        left: Math.random() * 100,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
        size: heartSizes[Math.floor(Math.random() * heartSizes.length)],
        delay: Math.random() * 0.5
      }
      setHearts(prev => [...prev, newHeart])
      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, 22000)
    }, 1800) // Generate a new heart every 1.8s (less hearts)

    return () => clearInterval(interval)
  }, [])

  const screens = [
    <FirstScreen key="first" onNext={() => {
      setMusicOn(true)
      setCurrentScreen(1)
    }} />,
    <SecondScreen key="second" onNext={() => setCurrentScreen(2)} />,
    <ThirdScreen key="third" onNext={() => setCurrentScreen(3)} />,
    <FourthScreen key="fourth" onNext={() => setCurrentScreen(4)} />,
    <FifthScreen key="fifth" onNext={() => setCurrentScreen(0)} />
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Softly animated, blurred, static hearts/stars for natural effect */}
      <motion.div
        className="absolute z-0 left-[10%] top-[20%]"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: 'blur(2.5px)', opacity: 0.25 }}
      >
        <Heart className="w-16 h-16 text-blue-400" strokeWidth={1.5} fill="none" />
      </motion.div>
      <motion.div
        className="absolute z-0 right-[12%] top-[32%]"
        animate={{ scale: [1, 1.12, 1], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: 'blur(3px)', opacity: 0.22 }}
      >
        <Heart className="w-20 h-20 text-pink-400" strokeWidth={1.5} fill="none" />
      </motion.div>
      <motion.div
        className="absolute z-0 left-[25%] bottom-[18%]"
        animate={{ scale: [1, 1.06, 1], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: 'blur(4px)', opacity: 0.18 }}
      >
        <Heart className="w-24 h-24 text-blue-300" strokeWidth={1.5} fill="none" />
      </motion.div>
      <motion.div
        className="absolute z-0 right-[20%] bottom-[10%]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 12, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: 'blur(5px)', opacity: 0.15 }}
      >
        <Heart className="w-28 h-28 text-pink-300" strokeWidth={1.5} fill="none" />
      </motion.div>
      {/* SOFTER BLOBS (romantic palette) */}
      <div
        className="absolute top-[-160px] right-[-230px] w-[520px] h-[520px] rounded-full blur-2xl opacity-75"
        style={{ background: 'radial-gradient(circle at center, rgba(255,230,233,0.95) 0%, rgba(255,215,225,0.7) 40%, transparent 70%)' }}
      />
      <div
        className="absolute top-[18%] left-[-260px] w-[520px] h-[520px] rounded-full blur-2xl opacity-70"
        style={{ background: 'radial-gradient(circle at center, rgba(237,225,250,0.95) 0%, rgba(233,210,243,0.7) 36%, transparent 72%)' }}
      />
      <div
        className="absolute -bottom-48 right-[-180px] w-[420px] h-[420px] rounded-full blur-sm opacity-80"
        style={{ background: 'radial-gradient(circle at center, rgba(246,236,226,0.95) 0%, rgba(246,236,226,0.6) 40%, transparent 70%)' }}
      />

      {/* HEARTS: smaller, floatier and less harsh */}
      <Heart className="absolute top-[6%] right-[14%] w-9 h-9 -rotate-10 romantic-heart float-slow" />
      <Heart className="absolute top-[34%] left-[14%] w-6 h-6 rotate-[8deg] romantic-heart float-tiny" />
      <Heart className="absolute bottom-[20%] right-[22%] w-8 h-8 rotate-[6deg] romantic-heart float-slow" />
      <Heart className="absolute top-[8%] left-6 w-14 h-14 rotate-18 romantic-heart opacity-30 float-tiny stroke-2" />

      {/* CONTINUOUS FLOWING HEARTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: window.innerHeight + 100, opacity: 0 }}
            animate={{ y: -100, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 20, ease: "easeInOut" }}
            className="fixed"
            style={{
              left: `${heart.left}%`,
              pointerEvents: "none"
            }}
          >
            <Heart
              className={`${heart.size} ${heart.color} fill-current`}
              strokeWidth={1.5}
              style={{ filter: "blur(2.5px) drop-shadow(0 2px 4px rgba(0,0,0,0.08))", opacity: 0.7 }}
            />
          </motion.div>
        ))}
      </div>

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[1.5px] bg-white/8" />

      <BackgroundMusic shouldPlay={musicOn} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.45 }}
          className="px-4 py-6"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
