const express = require('express');
const router = express.Router();


/* GET users listing. */
router.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});


module.exports = router;