const config= {
  server: {
    port: process.env.PORT || 3000,
    isDev: process.env.NODE_ENV !== 'production'
  }
}

module.exports = { 
  config
} 
