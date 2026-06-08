import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const THEME_STORAGE_KEY = 'elearning-theme-v2';
const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const initialTheme =
  storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : 'light';

document.documentElement.classList.remove('light', 'dark');
document.documentElement.classList.add(initialTheme);
document.documentElement.style.colorScheme = initialTheme;
localStorage.removeItem('theme');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
