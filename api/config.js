const config= {
  server: {
    port: process.env.PORT || 3000,
    isDev: process.env.NODE_ENV !== 'production'
  },
  db: {
    dbUser: process.env.DB_USER,
    dbPasswd: process.env.DB_PASSWD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET,
    salt: process.env.SALT
  }
}

module.exports = { 
  config
} 
