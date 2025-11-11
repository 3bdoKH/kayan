import React, { useState, useEffect } from 'react';
import './ThemeNavigator.css';

const ThemeNavigator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('cyan');

  const themes = [
    {
      name: 'cyan',
      label: 'Cyan',
      colors: {
        accent: '#00b1b7',
        accentHover: '#008f94',
        border: '#22dfe6',
        text: '#007bff'
      }
    },
    {
      name: 'red',
      label: 'Red',
      colors: {
        accent: '#dc3545',
        accentHover: '#c82333',
        border: '#ff6b7a',
        text: '#d63384'
      }
    },
    {
      name: 'orange',
      label: 'Orange',
      colors: {
        accent: '#e67e22',
        accentHover: '#d35400',
        border: '#f39c12',
        text: '#e67e22'
      }
    },
    {
      name: 'purple',
      label: 'Purple',
      colors: {
        accent: '#6f42c1',
        accentHover: '#5a32a3',
        border: '#9d7bd8',
        text: '#8540f5'
      }
    }
  ];

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'cyan';
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      const root = document.documentElement;
      root.style.setProperty('--accent', theme.colors.accent);
      root.style.setProperty('--accent-hover', theme.colors.accentHover);
      root.style.setProperty('--border', theme.colors.border);
      root.style.setProperty('--text', theme.colors.text);

      setCurrentTheme(themeName);
      localStorage.setItem('theme', themeName);
    }
  };

  const handleThemeChange = (themeName) => {
    applyTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="theme-navigator">
      <button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme menu"
        title="Change Theme"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="theme-menu">
          <h3 className="theme-menu-title">Choose Theme</h3>
          <div className="theme-options">
            {themes.map((theme) => (
              <button
                key={theme.name}
                className={`theme-option ${currentTheme === theme.name ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme.name)}
                aria-label={`Switch to ${theme.label} theme`}
              >
                <div
                  className="theme-color-preview"
                  style={{ backgroundColor: theme.colors.accent }}
                ></div>
                <span className="theme-option-label">{theme.label}</span>
                {currentTheme === theme.name && (
                  <span className="theme-check">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="theme-overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ThemeNavigator;

