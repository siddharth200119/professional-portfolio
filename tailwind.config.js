/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./src/**/*.{js,jsx}","./public/index.html"],
  darkMode: false,
   theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        destructive: 'var(--color-destructive)',
        'destructive-foreground': 'var(--color-destructive-foreground)',
        popover: 'var(--color-popover)',
        'popover-foreground': 'var(--color-popover-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        link: 'var(--color-link)',
      },
    },
  },
  varients: {
    extend: {}
  },
  plugins: [nextui()],
}