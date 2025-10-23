import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Education language={language} />
      <Contact language={language} />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60">
            © 2025 Nguyễn Thế Trọng. {language === 'en' ? 'All rights reserved.' : 'Bản quyền thuộc về.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
