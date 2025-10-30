import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import ResumeEmbed from './components/ResumeEmbed.jsx';

export default function App() {
  const [branding] = useState('The Trust Aesthetic — by Latrisha Dodson');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight">{branding}</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <Projects />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <Certifications />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Résumé</h2>
          <ResumeEmbed />
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Latrisha Dodson. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

