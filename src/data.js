const axios = require("axios");

const yaml = require("yaml");

const query = (request, response) => {
  try {
    if (request) {
      console.log(request);
      // return { data };
    }
  } catch (error) {
    return { error };
  }
};
const status = async (config) => {
  let { url, headers } = config;
};

module.exports = { status, axios };
