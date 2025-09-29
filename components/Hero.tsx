import { Spotlight } from "@/components/ui/spotlight-new";
import { TextAnimate } from "./ui/text-animate";

export function Hero() {
  return (
    <div
      className="min-h-screen w-full rounded-md flex items-center justify-center antialiased relative overflow-hidden px-12"
      id="home"
    >
      <Spotlight />
      <div className="max-w-7xl w-full items-center flex flex-col gap-8">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="w-full text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center"
        >
          Protect. Monetise. Resolve Disputes in Days, Not Months.
        </TextAnimate>

        <TextAnimate className="text-blue-200 font-semibold text-center max-w-2xl md:text-2xl mt-4 px-16 md:px-2">
          Stop waiting 30+ days for your deposit return. Get fair, secure access to your funds, faster.
        </TextAnimate>
        <button className="mt-8 px-10 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 cursor-pointer animate-fade-in-up">
          Start Protecting & Earning Now
        </button>
      </div>
    </div>
  );
}
