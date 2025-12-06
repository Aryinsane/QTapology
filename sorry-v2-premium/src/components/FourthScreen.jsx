import { fourthHeading, message } from "@/data"
import { MoveDown, Mail } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export default function FourthScreen({ onNext }) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow min-w-48 md:min-w-96 w-full max-w-md relative flex flex-col items-center gap-5 border border-white/50"
        >
            <h2 className="text-5xl md:text-6xl text-[hsl(200,70%,45%)] font-dancing-script font-semibold text-center drop-shadow-sm">
                {fourthHeading}
            </h2>

            <div className="flex items-center justify-center gap-8">
                <div className="relative mt-4 h-32 w-32 md:h-40 md:w-40 card-inner-gradient rounded-2xl flex items-end justify-center gif-box-shadow overflow-hidden">
                    <img
                        src="/gifs/holding-heart.gif"
                        className="h-20 md:h-24 drop-shadow-xl"
                        alt="heart"
                    />
                </div>
                <div className="relative mt-4 h-32 w-32 md:h-40 md:w-40 card-inner-gradient rounded-2xl flex items-end justify-center gif-box-shadow overflow-hidden">
                    <img
                        src="/gifs/holding-heart.gif"
                        className="h-20 md:h-24 drop-shadow-xl scale-x-[-1]"
                        alt="heart"
                    />
                </div>
            </div>

            {/* Container for the clickable card - REMOVED overflow-hidden/relative wrapper constraint */}
            <div className="relative w-full mt-4">

                {/* The "Tap to see message" button area - styled nicely now */}
                <div
                    onClick={() => setOpen(true)}
                    className="h-44 md:h-48 card-inner-gradient w-full rounded-2xl flex flex-col items-center justify-center gif-box-shadow cursor-pointer relative z-0 group hover:scale-[1.02] transition-transform duration-300"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Mail
                            className="w-16 h-16 text-[hsl(200,70%,45%)] drop-shadow-sm opacity-80 group-hover:opacity-100 transition-opacity"
                            strokeWidth={1.5}
                        />
                    </motion.div>

                    <p className="mt-4 text-[hsl(210,30%,45%)] font-medium flex items-center gap-2 z-10 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                        <MoveDown size={14} className="mt-[2px] animate-bounce" />
                        Tap to read my message
                        <MoveDown size={14} className="mt-[2px] animate-bounce" />
                    </p>
                </div>

                {/* The Message Card - Pops OUT smoothly */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={() => setOpen(false)}
                            className="bg-gradient-to-b from-white/90 to-[hsl(340,75%,95%)] px-5 pt-8 pb-10 rounded-3xl text-center absolute bottom-0 left-0 right-0 w-full message-card-shadow cursor-pointer backdrop-blur-md z-50 border border-white/60"
                            style={{
                                height: "auto",
                                minHeight: "120%",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5)"
                            }}
                        >
                            <h2 className="text-5xl md:text-6xl font-dancing-script font-bold mb-4 text-[hsl(200,70%,45%)] mt-2 drop-shadow-sm">I'm Sorry</h2>
                            <p className="md:text-lg max-h-80 overflow-y-auto text-[hsl(210,30%,45%)] font-medium leading-relaxed px-2">
                                {message}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={onNext}
                className="mt-6 bg-gradient-to-r from-[hsl(200,70%,50%)] to-[hsl(200,65%,45%)] text-white font-semibold px-8 py-3 rounded-xl shadow-md btn-shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
            >
                One last thing... <MoveDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
        </div>
    )
}