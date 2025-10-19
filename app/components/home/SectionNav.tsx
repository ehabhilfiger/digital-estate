"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const SECTION_IDS = [
  { id: "accomp", label: "Elite Builds" },
  { id: "regulated", label: "Regulated Estates" },
  { id: "darkdeck", label: "Dark Deck" },
  { id: "services", label: "What I Deliver" },
  { id: "about", label: "Engagement" },
  { id: "contact", label: "Contact" },
] as const;

const NAV_FACTS = [
  { label: "SLA", value: "<2h critical" },
  { label: "Deployments", value: "50+" },
  { label: "Base", value: "Chicago" },
  { label: "Stewardship", value: "Concierge" },
] as const;

const NAV_CONTACT = {
  title: "Concierge hotline",
  phone: {
    label: "(773) 920-0030",
    href: "tel:+17739200030",
  },
  email: {
    label: "defcon5ready@gmail.com",
    href: "mailto:defcon5ready@gmail.com",
  },
};

export function SectionNav() {
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0]?.id ?? "");
  const shouldReduceMotion = useReducedMotion();
  const activeIdRef = useRef(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      setActiveId(initialHash);
      activeIdRef.current = initialHash;
    }

    let animationFrame: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!inView || activeIdRef.current === inView.target.id) {
          return;
        }

        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {
          activeIdRef.current = inView.target.id;
          setActiveId(inView.target.id);
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      }
    );

    SECTION_IDS.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const handleNavigate = (id: string) => {
    const node = document.getElementById(id);
    if (!node) return;

    node.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" });
    activeIdRef.current = id;
    setActiveId(id);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      className="relative hidden w-[13.75rem] flex-col gap-4 text-sm text-white/70 transition lg:fixed lg:right-6 lg:top-24 lg:z-50 lg:flex"
      aria-label="Section navigation"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Navigate</span>
      <ul className="mt-2 space-y-1">
        {SECTION_IDS.map(({ id, label }) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavigate(id)}
                aria-current={isActive ? "true" : undefined}
                className={`group relative flex w-full items-center justify-between rounded-xl px-3 py-2 text-left font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                <span
                  className={`pointer-events-none absolute inset-0 rounded-xl border backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "border-blue-400/60 bg-white/12 shadow-[0_18px_36px_-24px_rgba(56,189,248,0.65)]"
                      : "border-white/10 bg-white/4 group-hover:border-white/20 group-hover:bg-white/8"
                  }`}
                  aria-hidden
                />
                <span className="relative z-10">{label}</span>
                <span
                  className={`relative z-10 h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                    isActive ? "bg-blue-400" : "bg-white/30 group-hover:bg-white/60"
                  }`}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="relative mt-auto overflow-hidden rounded-[28px] border border-white/12 bg-white/8 px-4 py-4 text-[11px] uppercase tracking-[0.2em] text-white/60 shadow-[0_32px_60px_-46px_rgba(56,189,248,0.7)] backdrop-blur-lg">
        <span className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/8 via-emerald-400/6 to-transparent" aria-hidden />
        <div className="relative z-10 space-y-4">
          <div className="grid grid-cols-2 gap-2 text-[10px] text-white/70">
            {NAV_FACTS.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-white/16 bg-white/8 px-3 py-1.5 text-[10px]">
                <span className="block text-white/55">{label}</span>
                <span className="text-white/80">{value}</span>
              </div>
            ))}
          </div>
          <div className="h-px bg-white/12" aria-hidden />
          <div>
            <span className="block text-white/75">{NAV_CONTACT.title}</span>
            <div className="mt-3 space-y-2 text-[10px]">
              <a
                href={NAV_CONTACT.phone.href}
                className="block rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-white/80 transition hover:border-emerald-300/60 hover:text-white"
              >
                {NAV_CONTACT.phone.label}
              </a>
              <a
                href={NAV_CONTACT.email.href}
                className="block rounded-xl border border-white/16 bg-white/8 px-3 py-2 text-white/80 transition hover:border-emerald-300/60 hover:text-white"
              >
                {NAV_CONTACT.email.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SectionNav;
