/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#9fff0b",
        "black-overlay": "rgba(0, 0, 0, 0.600)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "banner-bg-image": "url('/src/assets/images/intro-bg.jpg')",
        "card-one": "url(/src/assets/images/project-1.jpg)",
        "card-two": "url(/src/assets/images/project-2.jpg)",
        "card-three": "url(/src/assets/images/project-3.jpg)",
        "card-four": "url(/src/assets/images/project-4.jpg)",
        "card-five": "url(/src/assets/images/project-5.jpg)",
        "card-six": "url(/src/assets/images/project-6.jpg)",
        "interested-bg-image": "url(/src/assets/images/intro-bg-2.jpg)",
      },
    },
  },
  plugins: [],
};
