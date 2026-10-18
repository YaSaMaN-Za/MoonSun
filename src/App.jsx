
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 transition-colors dark:bg-slate-950">

        <Navbar
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
        />

        <main className="mx-auto max-w-6xl px-4 py-16">
          <section id="features" className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Design Your Experience
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Build Beautiful Interfaces. Create Amazing Experiences.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Welcome to YaSaMaN UI — where modern design meets simplicity.
              Explore elegant components and beautiful interfaces to bring
              your creative ideas to life.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Explore Your Design
              </h2>

              <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                Discover modern design, smooth interactions, and responsive layouts.
                Everything you need to create a clean and professional web experience.
              </p>

            </div>
          </section>
        </main>

      </div>
    </div>
  );
}
