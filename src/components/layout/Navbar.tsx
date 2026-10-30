"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Container from "@/components/common/Container";
import ThemeToggle from "@/components/common/ThemeToggle";

const navItems = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const GITHUB_URL = "https://github.com/sanjana-moon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is currently intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when section crosses the middle-ish of viewport
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group text-2xl font-bold font-heading">
            <span className="text-heading transition-colors group-hover:text-primary">
              Sanjana
            </span>
            <span className="text-primary"> /&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                      isActive
                        ? "text-primary after:w-full"
                        : "text-text hover:text-primary after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* GitHub Button */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2 text-heading transition hover:bg-surface hover:text-primary"
            >
              <FaGithub size={22} />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-heading transition hover:bg-surface lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="border-t border-border py-4 lg:hidden"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-4 py-3 font-medium transition ${
                          isActive
                            ? "bg-surface text-primary"
                            : "text-text hover:bg-surface hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}