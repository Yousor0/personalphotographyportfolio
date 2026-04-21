import Footer from "../components/Footer";
import Header from "../components/Header";
import AnimatedLetters from "../animations/AnimatedLetters";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const VITE_S3_BASE_URL = import.meta.env.VITE_S3_BASE_URL;

  const [result, setResult] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "0e68cbf8-b52d-49c1-82b6-8b574702e55c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
    } else {
      setResult("Error");
    }
  }

  return (
    <div>
      <Header />
      {/* Images */}
      <div className="grid gap-5 p-5 grid-cols-1 sm:grid-cols-2 md:px-20 xl:px-40 mt-5 items-center -mb-4">
        <div>
          <img
            src={`${VITE_S3_BASE_URL}/travel/DSC02288.jpg`}
            alt="andrew"
            className="block w-full max-w-full object-contain sm:max-h-120 "
          />
        </div>
        <div>
          {/* Form Contact*/}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl">
              <AnimatedLetters
                text="GET IN CONTACT WITH ME!"
                hoverY={-6}
                className="ease-in-out "
              />
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              {/* Honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="flex flex-col ">
                <span className="text-lg font-medium -mb-1">NAME</span>
                <div className="flex gap-4 justify-between">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="firstName" className="text-xs font-light">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="border bg-white/40 border-neutral-400 px-2 py-1 text-sm focus:outline-1 w-full"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label htmlFor="lastName" className="text-xs font-light">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="border bg-white/40 border-neutral-400 px-2 py-1 text-sm focus:outline-1 w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="border bg-white/40 border-neutral-400 px-2 py-1 text-sm focus:outline-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border bg-white/40 border-neutral-400 px-2 py-1 text-sm focus:outline-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="border bg-white/40 border-neutral-400 px-2 py-1 text-sm focus:outline-1"
                  rows="6"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -3 }}
                type="submit"
                disabled={result === "Sending...."}
                className="lowercase text-white bg-neutral-700 hover:bg-neutral-900 w-full block py-1.5 ease-in-out disabled:opacity-50"
              >
                {result === "Sending...." ? "sending..." : "submit"}
              </motion.button>

              {result === "Form Submitted Successfully" && (
                <p className="text-sm text-green-700">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {result === "Error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
