module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      color: {
        '#616161': '#616161'
      },
      spacing: {
        '3275px': '3275px',  
        '1420px': '1420px',
        '3100px': '3100px',    
      },
      lineHeight: {
        '68': '68px'
      },
      dropShadow: {
        '5xl': '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      productSansReg: ['Product Sans Regular'],
      productSansBold: ['Product Sans Bold'],
      poppins: ['Poppins', 'sans-serif'],
      hind: ['Hind', 'sans-serif'],
    },
    borderRadius: {
      '5-xl': '45px',
      '1.5-xl': '17.09px'
    },
  },
  plugins: [],
}
