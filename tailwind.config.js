/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg:      '#0C0C0C',
        surface: '#161616',
        line:    '#262626',
        fore:    '#F5F5F5',
        dim:     '#737373',
        accent:  '#3B82F6',
        live:    '#22C55E',
        warn:    '#F59E0B',
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
        '13': '13px',
        '15': '15px',
        '17': '17px',
      },
    },
  },
  plugins: [],
}
