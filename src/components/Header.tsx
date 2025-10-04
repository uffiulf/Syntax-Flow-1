import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../lib/AppContext';
import { translations } from '../lib/translations';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  const { language, setLanguage, theme, setTheme } = useApp();
  const location = useLocation();
  const t = translations[language];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t.nav.home, path: '/' },
    { key: 'team', label: t.nav.team, path: '/team' },
    { key: 'projects', label: t.nav.projects, path: '/projects' },
    { key: 'contact', label: t.nav.contact, path: '/contact' },
  ];

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        {t.nav.skipToContent}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`relative transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Language Toggle */}
              <div className="hidden sm:flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded transition-colors ${
                    language === 'en'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('no')}
                  className={`px-3 py-1 rounded transition-colors ${
                    language === 'no'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  NO
                </button>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-muted-foreground">Language:</span>
                <div className="flex items-center bg-muted rounded-lg p-1">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded transition-colors ${
                      language === 'en'
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('no')}
                    className={`px-3 py-1 rounded transition-colors ${
                      language === 'no'
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground'
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
