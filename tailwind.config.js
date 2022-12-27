module.exports = {
  presets: [
    require('./tailwind.js')
  ],
  theme: {
    extend: {
      colors: {
        paydar: {
          color1: '#D35365',
          color2: '#25284E',
          color3: '#E4E8FE',
          color4: '#F6F6FE',
          color5: '#7d7d7d',
          color6: '#555',
        }
      }
    },
  },
  important: true
};
