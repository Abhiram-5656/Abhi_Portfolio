import { Eye, Download, FileText } from "lucide-react";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <Reveal>
          <p className="font-mono text-accent text-sm tracking-[0.25em] uppercase">
            Resume
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-10">
            A quick look at my resume
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="
              relative
              w-full
              max-w-[700px]
              mx-auto
              rounded-3xl
              border
              border-white/10
              bg-[#101826]/80
              backdrop-blur-xl
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-cyan-400/40
              hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]
              group
            "
          >
            {/* Top Gradient Line */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>

            <div className="py-8 px-6">

              {/* Resume Icon */}
              <div
                className="
                  w-16 h-16
                  mx-auto
                  rounded-full
                  bg-cyan-500/10
                  border border-cyan-400/20
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                <FileText
                  size={28}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-5">
                N. Abhiram — Resume
              </h3>

              {/* Subtitle */}
              <p className="text-muted text-sm mt-2">
                Java Backend Developer • MERN Stack Developer • Devops Engineer
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-8 flex-wrap">

                <a
                  href="/Abhiram_Nalla.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    px-6 py-3
                    rounded-full
                    border border-white/10
                    bg-white/5
                    hover:bg-white/10
                    hover:border-cyan-400
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Eye size={18} />
                  View Resume
                </a>

                <a
                  href="/Abhiram_Nalla.pdf"
                  download
                  className="
                    flex items-center gap-2
                    px-6 py-3
                    rounded-full
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-400
                    hover:from-cyan-400
                    hover:to-blue-500
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
                    transition-all
                    duration-300
                  "
                >
                  <Download size={18} />
                  Download Resume
                </a>

              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}