'use client'
import {cn} from "@/lib/utils";
import {useEffect} from "react";
import {setSplashCookie} from "@/lib/setSplashCookie";

const SplashScreen = () => {
    useEffect(()=> {
        setTimeout(async  ()=> {
            await  setSplashCookie()
        }, 24000)
    }, [])

    return (
        <div className={cn("bg-slate-950 text-slate-50 fixed left-0 top-0 w-full h-full p-8 lg:text-center","animate-out slide-out-to-top duration-1000 fill-mode-forwards")} style={{animationDelay: "24000ms"}}>
            <div className="text-4xl mb-4 opacity-0 animate-[fade-in-full_1s_ease-in_2s_forwards]" >What&apos;s the most resilient parasite?</div>
            <div className="text-2xl mb-2 opacity-0 animate-[fade-in-three-fourth_1s_ease-in_4s_forwards]">Bacteria?</div>
            <div className="text-2xl mb-2 opacity-0 animate-[fade-in-three-fourth_1s_ease-in_6s_forwards]">A virus?</div>
            <div className="text-2xl flex gap-2 mb-4 lg:justify-center">
                <span className="opacity-0 animate-[fade-in-three-fourth_1s_ease-in_8s_forwards]">An intestinal worm?</span>
                <span className="opacity-0 animate-[fade-in-three-fourth_1s_ease-in_10s_forwards]">No.</span>
            </div>
            <div className="text-3xl mb-4 font-semibold opacity-0 animate-[fade-in-full_1s_ease-in_12s_forwards] ">An Idea.</div>
            <div className="flex gap-2 mb-2 text-xl lg:justify-center">
                <span className="opacity-0 animate-[fade-in-three-fourth_1s_ease-in_14s_forwards]">Resilient...</span>
                <span className="opacity-0 animate-[fade-in-three-fourth_1s_ease-in_16s_forwards]">highly contagious.</span>
            </div>
            <div className="text-xl mb-2 opacity-0 animate-[fade-in-three-fourth_1s_ease-in_18s_forwards]">
            An idea that is fully formed - fully understood - that sticks; right in there somewhere.
            </div>
        </div>
    )
};

export default SplashScreen;