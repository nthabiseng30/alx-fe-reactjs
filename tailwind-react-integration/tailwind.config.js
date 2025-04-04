module.exports = {
  @layer theme, base, components, utilities;
  @layer theme {
    @theme default {
      --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      --color-red-50: oklch(0.971 0.013 17.38);
      --color-red-100: oklch(0.936 0.032 17.717);
      --color-red-200: oklch(0.885 0.062 18.334);
      --color-red-300: oklch(0.808 0.114 19.571);
      --color-red-400: oklch(0.704 0.191 22.216);
      --color-red-500: oklch(0.637 0.237 25.331);
      --color-red-600: oklch(0.577 0.245 27.325);
      --color-red-700: oklch(0.505 0.213 27.518);
      --color-red-800: oklch(0.444 0.177 26.899);
      --color-red-900: oklch(0.396 0.141 25.723);
      --color-red-950: oklch(0.258 0.092 26.042);
    }
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  variants: {},
  plugins: [],
}

