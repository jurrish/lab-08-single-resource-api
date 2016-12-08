function parseBody(req, callback) {
  req.body = ''; //make a body property to req parameter and make it an empty string
  req.on('data', function(data) { //when data is received
    req.body += data.toString(); //take that data, add it as a value to req.bod and make it a string
  });
  req.on('end', function() { //when an end event is triggered
    try {
      req.body = JSON.parse(req.body);//turn the req.body value into JSON
      callback(null, req.body); //Pass the req.body JSON object out of the function
    } catch (err) {
      callback(err); //error handing
    }
  });
}

module.exports = parseBody;
