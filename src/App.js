import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PageTransition from './components/PageTransition';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    if (activePage === 'home') return <HeroSection />;
    if (activePage === 'about') return <AboutSection />;
    if (activePage === 'projects') return <ProjectsSection />;
    return null;
  };

  return (
    <div className="app-shell">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <div className="page-container">
        <PageTransition activeKey={activePage}>
          {renderPage()}
        </PageTransition>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
