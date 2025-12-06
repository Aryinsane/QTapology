import { firstHeading, firstParagraph } from "@/data"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"


export default function FirstScreen({ onNext }) {
    return (
        <motion.div
            className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow min-w-48 w-full max-w-md relative flex flex-col items-center gap-5 border border-white/50"
        >
            <div className="relative h-44 md:h-52 card-inner-gradient w-full rounded-2xl md:rounded-3xl flex items-end justify-center gif-box-shadow overflow-hidden">
                <Heart className="absolute top-[18%] left-[26%] w-9 h-9 -rotate-16 text-red-300/60 fill-red-300/60 heart-glow float-heart-1" />
                <Heart className="absolute top-[18%] right-[26%] w-9 h-9 rotate-16 text-red-300/60 fill-red-300/60 heart-glow float-heart-2" />
                <img src="/gifs/flower.gif" alt="flower" className="absolute w-28 -left-8 bottom-2 opacity-60" />
                <img src="/gifs/flower.gif" alt="flower" className="absolute w-28 right-12 bottom-2 opacity-60" />
                <img
                    src="/gifs/first.gif"
                    className="h-28 md:h-32 drop-shadow-xl"
                    alt="sad panda"
                />
            </div>

            <div className="flex flex-col items-center gap-1 md:gap-2">
                <h2 className="text-5xl md:text-6xl text-center text-[hsl(200,70%,45%)] font-dancing-script font-semibold drop-shadow-sm">
                    {firstHeading}
                </h2>
                <p className="text-center text-[hsl(210,30%,45%)] md:text-lg leading-relaxed max-h-24 md:max-h-28 overflow-y-auto font-medium">
                    {firstParagraph}
                </p>
            </div>
            <button
                onClick={onNext}
                className="bg-gradient-to-r from-[hsl(200,70%,50%)] to-[hsl(200,65%,45%)] md:text-lg text-white font-semibold px-8 py-3 rounded-xl shadow-md btn-shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
            >
                Continue <Heart size={18} className="fill-white group-hover:scale-110 transition-transform" />
            </button>
        </motion.div>
    )
}