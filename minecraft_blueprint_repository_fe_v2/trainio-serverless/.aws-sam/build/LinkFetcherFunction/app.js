"use strict";
const axios = require("axios");

let responseTemplate = {
    headers: {"Access-Control-Allow-Origin": "*"}
}

exports.lambdaHandler = async (event, context) => {
    if (event.queryStringParameters["url"]) {
        return { 
            ...responseTemplate, 
            ...(await axios.get(event.queryStringParameters["url"]))
        }
    } else {
        return {
            ...responseTemplate, 
            statusCode: 400,
            body: {}
        }
    }
    return response;
};
