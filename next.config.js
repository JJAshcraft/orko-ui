/* eslint-env node */

const dotEnvResult = require('dotenv').config();

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY
  }
};
