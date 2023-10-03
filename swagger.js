const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./requests/personRequest.js']

swaggerAutogen(outputFile, endpointsFiles)