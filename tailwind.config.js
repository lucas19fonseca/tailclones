module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '500px': '500px',
        '980px': '980px',
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px'

      },
      fontFamily:{
        'arial': 'Arial'
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'main-gray': '#F0F2F5',
        'main-blue': '#1877F2',
        'main-blue-hover': '#166FE5',
        'main-green': '#42B72A',
        'main-green-hover': '#36A420',
        'darkblue-500': '#485769',
        'darkblue-600': '#37475A',
        'darkblue-700': '#232F3E',
        'darkblue-900': '#191E26',
        'darkblue-950': '#131A22',
        'gold-100': '#FEBD69',
        'gold-200': '#FAA63A',
        'orange-650': '#E47911',
        'yellow-350': '#F0C14B'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('../src/assets/Bursts.sv')",
        'spotify-theme-mobile': "url('../src/assets/BurstsMobile.sv')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem',
        'subtitle' : '1,7rem'
      }
    },
  },
  variants: {},
  plugins: [],
}