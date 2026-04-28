import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: 'var(--color-bg-base)',
        sidebar: 'var(--color-bg-sidebar)',
        card: 'var(--color-bg-card)',
        input: 'var(--color-bg-input)',

        border: {
          subtle: 'var(--color-border-subtle)',
          sidebar: 'var(--color-border-sidebar)',
        },

        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },

        accent: {
          purple: 'var(--color-accent-purple)',
          green: 'var(--color-accent-green)',
          orange: 'var(--color-accent-orange)',
          pink: 'var(--color-accent-pink)',
        },
      },
    },
  },
});
