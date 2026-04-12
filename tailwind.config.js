/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        heading: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        background: "#151730",
        surface: "#1d2145",
        "surface-light": "#2a3163",
        foreground: "#E7edf5",
        brand: {
          navy: "#151730",
          mist: "#E7edf5",
          royal: "#005ff0",
        },
        primary: {
          50: "#eff5ff",
          100: "#dbe8ff",
          200: "#b8d1ff",
          300: "#85b0ff",
          400: "#4f89ff",
          500: "#1f6bff",
          600: "#005ff0",
          700: "#004bcc",
          800: "#003ca3",
          900: "#15326f",
          950: "#151730",
        },
        accent: {
          50: "#ffffff",
          100: "#f8fbff",
          200: "#eef3f9",
          300: "#E7edf5",
          400: "#c7d6e8",
          500: "#a7bcd4",
          600: "#8196ad",
          700: "#627286",
          800: "#465262",
          900: "#2c3442",
          950: "#1a1f29",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glow': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
