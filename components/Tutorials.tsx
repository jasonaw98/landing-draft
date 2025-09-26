import { cn } from "@/lib/utils";
import { GlareCard } from "./ui/glare-card";

const video = [
  {
    title: "UltraRentz Overview",
    description:
      " Take a look at the introduction of UltraRentz. This will give you a better understanding of how the platform works.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "How to Use the Platform",
    description:
      " Take a look at the introduction of UltraRentz. This will give you a better understanding of how the platform works.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "DAO Dispute Demo",
    description:
      " Take a look at the introduction of UltraRentz. This will give you a better understanding of how the platform works.",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Tutorials() {
  return (
    <section id="turorials" className="py-20 bg-zinc-900/30 px-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-300">
          Tutorials
        </h2>
        {video.map((video, idx) => (
          <div
            key={idx}
            className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-white"
          >
            <div
              className={cn(
                "flex flex-col justify-center items-center",
                idx % 2 !== 0 ? "sm:order-2" : "sm:order-1"
              )}
            >
              <p className="text-2xl font-semibold mb-4">{video.title}</p>
              <p className="text-gray-300 text-center md:px-20">
                Take a look at the introduction of UltraRentz. This will give
                you a better understanding of how the platform works.
              </p>
            </div>
            <div
              className={cn(
                "flex justify-center",
                idx % 2 !== 0 ? "sm:order-1" : "sm:order-2"
              )}
            >
              <div>
                <iframe
                  width="100%"
                  height="200"
                  src={video.embed}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
