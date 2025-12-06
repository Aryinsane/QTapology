import { secondParagraph } from "@/data"
import { motion } from "framer-motion"
import { Heart, MoveRight } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <motion.div
            className="bg-white/40 backdrop-blur-md px-6 py-10 md:px-8 md:py-12 rounded-4xl md:rounded-4xl card-shadow min-w-48 w-full max-w-md relative flex flex-col items-center gap-5 border border-white/50"
        >
            <div className="relative h-44 md:h-52 card-inner-gradient w-full rounded-2xl md:rounded-3xl flex items-end justify-center gif-box-shadow overflow-hidden">
                <Heart className="absolute top-[18%] left-[26%] w-9 h-9 -rotate-16 text-purple-300/60 fill-purple-300/60 heart-glow float-heart-1" />
                <Heart className="absolute top-[18%] right-[26%] w-9 h-9 rotate-16 text-purple-300/60 fill-purple-300/60 heart-glow float-heart-2" />
                <img
                    src="/gifs/second.gif"
                    className="h-26 md:h-30 drop-shadow-xl"
                    alt="sad panda"
                />
            </div>

            <p className="text-center text-[hsl(210,30%,45%)] md:text-lg max-h-24 md:max-h-28 overflow-y-auto font-medium">
                {secondParagraph}
            </p>

            <button
                onClick={onNext}
                className="bg-gradient-to-r from-[hsl(200,70%,50%)] to-[hsl(200,65%,45%)] md:text-lg text-white font-semibold px-8 py-3 rounded-xl shadow-md btn-shadow hover:shadow-lg hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
            >
                Next <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>
    )
}