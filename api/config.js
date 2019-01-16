const config = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.MONGODB_URI || 'mongodb://admin:Dumelu10@ds115131.mlab.com:15131/lab8',
    JwtSecret: process.env.JWT_SECRET || 'secret'
};

module.exports = config;

// export default config;