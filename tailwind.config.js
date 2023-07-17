module.exports = {
  content: ["src/**/*.{ts,html,css,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E356F',
          2: '#294A7A',
          dark2: '#26476C',
          focus: '#348CB0'
        },
        mygreen: {
          DEFAULT: '#70BC98',
          light: '#82D6AE'
        },
        mygrey: {
          DEFAULT: '#6A95C5'
        }
      }
    },
  },
  plugins: [],
};
