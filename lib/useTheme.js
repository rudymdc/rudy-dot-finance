'use client';
import { useState, useEffect } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState('light'); // ← default to light
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const storedTheme = localStorage.getItem('theme');

    // Default to 'light' even if prefers-color-scheme is dark
    const initialTheme = storedTheme || 'light';

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return hasMounted ? { theme, toggleTheme } : { theme: null, toggleTheme: () => {} };
}