import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Loader2, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const subject = String(data.get("subject"));
    const message = String(data.get("message"));

    try {
      setStatus("sending");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("sent");
      form.reset();

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">07 — Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-14">
            Let's Work Together
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10">
          {/* LEFT SIDE */}

          <Reveal className="space-y-5">
            <div className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-xs text-muted">Email</p>

                <a
                  href="mailto:nallaabhiram20@gmail.com"
                  className="font-medium hover:text-cyan-400 transition"
                >
                  nallaabhiram20@gmail.com
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-xs text-muted">Phone</p>

                <a
                  href="tel:+919036265598"
                  className="font-medium hover:text-cyan-400 transition"
                >
                  +91 90362 65598
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs text-muted">Location</p>

                <p className="font-medium">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </Reveal>

          {/* FORM */}

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-8 space-y-6"
            >
              <div>
                <label className="text-xs text-muted mb-2 block">Name</label>

                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label className="text-xs text-muted mb-2 block">Email</label>

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="text-xs text-muted mb-2 block">Subject</label>

                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label className="text-xs text-muted mb-2 block">Message</label>

                <textarea
                  required
                  rows={5}
                  name="message"
                  placeholder="Type your message..."
                  className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] disabled:opacity-60 flex justify-center items-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "sent" && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-400">
                  ✅ Your message has been sent successfully.
                  <br />
                  I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
                  ❌ Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
