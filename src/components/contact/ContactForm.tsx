import { useRef, useState } from "react";
import type { SubmitEvent } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { Sparkle } from "../ui/Decor";
import { email } from "../../data/resume";

type Status = "idle" | "sending" | "success" | "error";
type Errors = { name?: string; email?: string; message?: string };

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const input =
  "w-full rounded-2xl border-2 bg-white px-4 text-base text-navy outline-none transition-colors placeholder:text-ink/50 focus:border-cobalt";
const label = "mb-2 block font-body text-lg font-bold text-navy";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-navy">
      <Sparkle className="size-3.5 shrink-0 text-pink" />
      {msg}
    </p>
  );
}

export default function ContactForm() {
  const root = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  // little pop when the thank-you view appears
  useGSAP(
    () => {
      if (status !== "success") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(".contact-success > *", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.8)",
      });
    },
    { scope: root, dependencies: [status] }
  );

  const onSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // grab it now; it's gone after the await
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const mail = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "What should I call you?";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) next.email = "That email doesn't look quite right.";
    if (message.length < 10) next.message = "A few more words please (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    if (fd.get("botcheck")) return; // honeypot: only bots tick this hidden box

    if (!ACCESS_KEY) {
      console.warn("VITE_WEB3FORMS_KEY is missing. Add it to .env and restart the dev server.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New message from ${name} (portfolio)`,
          from_name: "Portfolio contact form",
          name,
          email: mail,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      ref={root}
      className="rounded-[32px] bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
    >
      {status === "success" ? (
        <div
          className="contact-success flex min-h-[380px] flex-col items-center justify-center text-center"
          role="status"
        >
          <Sparkle className="size-12 text-pink" />
          <h3 className="mt-4 font-display text-3xl font-bold text-navy">Message sent!</h3>
          <p className="mt-3 max-w-[320px] text-base text-ink">
            Thanks for reaching out. I'll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 inline-flex h-11 items-center rounded-full border-2 border-pink px-6 text-sm font-medium text-navy transition-colors hover:bg-pink-soft"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {/* honeypot: hidden from people, bots fill it in */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
            style={{ display: "none" }}
          />

          <div>
            <label htmlFor="c-name" className={label}>Name</label>
            <input
              id="c-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "c-name-err" : undefined}
              className={`${input} h-12 ${errors.name ? "border-pink" : "border-blue-soft"}`}
            />
            <FieldError id="c-name-err" msg={errors.name} />
          </div>

          <div className="mt-5">
            <label htmlFor="c-email" className={label}>Email</label>
            <input
              id="c-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "c-email-err" : undefined}
              className={`${input} h-12 ${errors.email ? "border-pink" : "border-blue-soft"}`}
            />
            <FieldError id="c-email-err" msg={errors.email} />
          </div>

          <div className="mt-5">
            <label htmlFor="c-message" className={label}>Message</label>
            <textarea
              id="c-message"
              name="message"
              rows={5}
              maxLength={2000}
              placeholder="What's on your mind?"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "c-message-err" : undefined}
              className={`${input} resize-none py-3 ${errors.message ? "border-pink" : "border-blue-soft"}`}
            />
            <FieldError id="c-message-err" msg={errors.message} />
          </div>

          {status === "error" && (
            <p role="alert" className="mt-5 rounded-2xl bg-pink-soft px-4 py-3 text-sm text-navy">
              That didn't go through. Try again, or email me directly at{" "}
              <a href={`mailto:${email}`} className="font-bold underline underline-offset-2">
                {email}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-pink px-6 font-display text-lg font-bold text-navy transition-colors duration-300 hover:bg-cobalt hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt disabled:cursor-wait disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Send message"}
            {status !== "sending" && (
              <svg
                viewBox="0 0 24 24"
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </button>
        </form>
      )}
    </div>
  );
}