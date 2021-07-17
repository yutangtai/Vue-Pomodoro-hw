module.exports = {
  publicPath: './',
  pwa: {
    manifestOptions: {
      name: 'Pomodoro',
      short_name: 'Pomodoro',
      theme_color: '#333',
      background_color: '#000',
      scope: './',
      start_url: './',
      display: 'standalone',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          size: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          size: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          size: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          size: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/apple-touch-icon-60x60.png',
          size: '60x60',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          size: '76x76',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          size: '120x120',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          size: '152x152',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          size: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/apple-touch-icon.png',
          size: '180x180',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-16x16.png',
          size: '16x16',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-32x32.png',
          size: '32x32',
          type: 'image/png'
        },
        {
          src: './img/icons/msapplication-icon-144x144.png',
          size: '144x144',
          type: 'image/png'
        },
        {
          src: './img/icons/mstile-150x150.png',
          size: '150x150',
          type: 'image/png'
        }
      ]
    }
  }
}
