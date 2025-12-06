import { fifthButtonNo, fifthButtonYes, fifthHeading } from "@/data"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, PartyPopper } from "lucide-react"
import confetti from "canvas-confetti"
import { useState } from "react"

export default function FifthScreen() {
    const [accepted, setAccepted] = useState(null) // 'love' | 'mad'

    const handleLove = () => {
        setAccepted('love')
        // Big Heart Confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);

            // Hearts
            confetti({
                ...defaults,
                particleCount,
                shapes: ['star'], // 'heart' is not a default shape in basic canvas-confetti without shape plugin, usually uses circles/squares. Let's use scalar for big red blobs or default
                colors: ['#ff0000', '#ff69b4'],
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                colors: ['#ff0000', '#ff69b4'],
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    }

    const handleMad = () => {
        setAccepted('mad')
        // Different Confetti (maybe slower, blue/cool colors)
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#5DADE2', '#F4D03F'], // Blue and Gold
            gravity: 1.2
        });
    }

    // Final content based on selection
    if (accepted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow min-w-48 w-full max-w-md relative flex flex-col items-center gap-6 border border-white/50"
            >
                <div className="relative h-40 w-full card-inner-gradient rounded-3xl flex items-center justify-center gif-box-shadow overflow-hidden">
                    <img
                        src={accepted === 'love' ? "/gifs/flyingkiss.gif" : "/gifs/first.gif"} // Reuse existing gifs
                        className="h-28 md:h-32 drop-shadow-xl"
                        alt="reaction"
                    />
                </div>

                <h2 className="text-4xl md:text-5xl text-[hsl(200,70%,45%)] font-dancing-script font-bold text-center drop-shadow-sm leading-tight">
                    {accepted === 'love' ? "I Love You Moree ❤️" : "I'll Make It Up To You! 🥺"}
                </h2>

                <p className="text-center text-[hsl(210,30%,45%)] font-medium leading-relaxed">
                    {accepted === 'love'
                        ? "Sankss. I'll be better personn pakkaa 🥺"
                        : "I promise I'll do better. Love you<3"}
                </p>

                <button disabled className="mt-2 bg-white/50 text-[hsl(200,70%,45%)] font-semibold px-6 py-2 rounded-full text-sm opacity-70">
                    The End
                </button>
            </motion.div>
        )
    }

    return (
        <motion.div
            className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow min-w-48 w-full max-w-md relative flex flex-col items-center gap-6 border border-white/50"
        >
            <h2 className="text-5xl md:text-6xl text-[hsl(200,70%,45%)] font-dancing-script font-semibold text-center drop-shadow-sm leading-tight">
                {fifthHeading}
            </h2>

            <div className="relative h-40 w-full card-inner-gradient rounded-3xl flex items-center justify-center gif-box-shadow overflow-hidden">
                <img
                    src="/gifs/holding-heart.gif"
                    className="h-28 md:h-32 drop-shadow-xl"
                    alt="please"
                />
            </div>

            <div className="flex flex-col gap-3 w-full mt-2">
                <button
                    onClick={handleLove}
                    className="bg-gradient-to-r from-[hsl(200,70%,50%)] to-[hsl(200,65%,45%)] text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md btn-shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 w-full group"
                >
                    <Heart size={20} className="fill-white group-hover:animate-ping" /> {fifthButtonYes}
                </button>

                <button
                    onClick={handleMad}
                    className="bg-white/50 text-[hsl(200,70%,45%)] text-lg font-semibold px-8 py-4 rounded-xl shadow-sm hover:bg-white/80 hover:scale-[1.03] active:scale-95 transition-all duration-200 border border-white/60 w-full"
                >
                    {fifthButtonNo}
                </button>
            </div>

            <p className="text-[hsl(210,30%,55%)] text-xs font-medium opacity-70">
                (There is no 'No' option hehe)
            </p>

        </motion.div>
    )
}
