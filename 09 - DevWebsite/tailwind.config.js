/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-color)',
        text: 'var(--text-color)',
        muted: 'var(--text-muted-color)',
        accent: 'var(--accent-color)',
        'accent-hover': 'var(--accent-hover)',
        'accent-foreground': 'var(--accent-foreground)',
        card: 'var(--card-bg)',
        border: 'var(--border-color)',
        input: 'var(--input-bg)',
        link: 'var(--link-color)',
        'link-hover': 'var(--link-hover)',
      },
    },
  },
  plugins: [],
};
