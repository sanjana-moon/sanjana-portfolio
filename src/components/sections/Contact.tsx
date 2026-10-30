"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import personal from "@/data/personal";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);

      alert("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>
            <h3 className="font-heading text-3xl font-bold text-heading">
              Get In Touch
            </h3>
            <p className="mt-5 leading-8 text-text">
              I'm always open to discussing new opportunities,
              freelance projects, collaborations, or simply
              connecting with fellow developers.
            </p>
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-sm text-text/70">
                    Email
                  </p>
                  <p className="break-all font-semibold text-heading">
                    {personal.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <FaLinkedin size={22} />
                </div>

                <div>
                  <p className="text-sm text-text/70">
                    LinkedIn
                  </p>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-heading transition hover:text-primary"
                  >
                    linkedin.com/in/sanjana-moon
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-sm text-text/70">
                    Location
                  </p>
                  <p className="font-semibold text-heading">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-border bg-surface p-5 sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-border bg-bg px-5 py-4 outline-none transition focus:border-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-border bg-bg px-5 py-4 outline-none transition focus:border-primary"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-border bg-bg px-5 py-4 outline-none transition focus:border-primary"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-xl border border-border bg-bg px-5 py-4 outline-none transition focus:border-primary"
              />
              <Button
                type="submit"
                className="w-full"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send
                      className="ml-2"
                      size={18}
                    />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}