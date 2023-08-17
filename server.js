const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/public`))
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f43eb033a5ee4de793ab28fe2c79e271',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }

app.listen(4000, () => console.log("Server running on 4000"))