const dotenv = require('dotenv').config();

const staging= {
    DATABASE_URL: process.env.STG_DATABASE_URL
};

const production= {
    DATABASE_URL: process.env.PROD_DATABASE_URL
};

const config ={
    staging,
    production
}

module.exports = config;