const express = require('express');
const app = express();
const host = process.env.IP  || '0.0.0.0';
const port = process.env.PORT || 8080;

app.get('/trial', function (req, res, next) {
	var ordersList="The first order is confirmed"
	res.send({success: true, result: ordersList});

});


app.listen(port,host);
