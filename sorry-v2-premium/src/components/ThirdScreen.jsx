import { thirdHeading, thirdMessages } from "@/data"
import { motion } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"
import { useState } from "react"


export default function ThirdScreen({ onNext }) {
    const [tap1, setTap1] = useState(false)
    const [tap2, setTap2] = useState(false)
    const [tap3, setTap3] = useState(false)

    const cardStates = [tap1, tap2, tap3]
    const setStates = [setTap1, setTap2, setTap3]

    const cardStyles = [
        {
            bg: "card-inner-gradient",
            cover: "bg-gradient-to-b from-[hsl(340,75%,85%)] to-[hsl(340,75%,75%)]",
            icon: "hsl(340, 75%, 60%)"
        },
        {
            bg: "bg-gradient-to-b from-[hsl(200,70%,92%)] to-[hsl(200,60%,85%)]",
            cover: "bg-gradient-to-b from-[hsl(200,75%,90%)] to-[hsl(200,65%,80%)]",
            icon: "hsl(200, 70%, 45%)"
        },
        {
            bg: "bg-gradient-to-b from-[hsl(270,70%,92%)] to-[hsl(270,60%,85%)]",
            cover: "bg-gradient-to-b from-[hsl(270,75%,90%)] to-[hsl(270,65%,80%)]",
            icon: "hsl(270, 70%, 50%)"
        }
    ]

    return (
        <motion.div
            className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow w-full max-w-md relative flex flex-col items-center gap-5 border border-white/50"
        >
            <h2 className="text-4xl md:text-5xl text-center text-[hsl(200,70%,45%)] font-dancing-script font-semibold drop-shadow-sm">
                {thirdHeading}
            </h2>

            <p className="text-[hsl(210,30%,45%)] text-sm font-medium -mt-2 mb-2">
                Tap each one
            </p>

            {/* Cards */}
            <div className="flex flex-col gap-5 w-full">
                {cardStyles.map((style, i) => (
                    <div
                        key={i}
                        onClick={() => setStates[i](!cardStates[i])}
                        className={`card ${cardStates[i] ? "tapped" : ""}
                        relative h-24 md:h-28 w-full rounded-3xl
                        flex items-center justify-center gif-box-shadow
                        overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.02]
                        ${style.bg}`}
                    >
                        <div className={`cover will-change-auto ${style.cover} group-hover:brightness-95 transition-all`}>
                            <Heart
                                className="w-12 h-12 md:w-14 md:h-14 heart-glow"
                                style={{ color: style.icon, fill: style.icon }}
                            />
                        </div>

                        {/* Text */}
                        <p className="px-4 text-center text-[hsl(210,30%,45%)] md:text-lg max-h-11 overflow-y-auto leading-snug font-medium">
                            {thirdMessages[i]}
                        </p>
                    </div>
                ))}
            </div>

            <button
                onClick={onNext}
                className="bg-gradient-to-r from-[hsl(200,70%,50%)] to-[hsl(200,65%,45%)] mt-3 md:text-lg text-white font-semibold px-8 py-3 rounded-xl shadow-md btn-shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
            >
                My message <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    )
}
