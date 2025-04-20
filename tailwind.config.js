// tailwind.config.js
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
      },
      colors: {
        primarybatchtext: '#732C9B',
        secondarybatchtext: '#08846D',
      },
    },
  },
  plugins: [],
};
