const express = require('express'),
	  app = express(),
	  bodyParser = require('body-parser'),
	  router = require('./controllers');

// Tells the application to parse request bodies to JSON
app.use( bodyParser.json( { limit: '50mb' } ) )
app.use( bodyParser.urlencoded( { limit: '50mb', extended: true } ) )

// Sets up API routing
app.use( router )

// Handle any thrown errors
app.use((err, req, res, next) => {
	res.status(500).json({
		status: 500,
		message: err.message,
		stack: err.stack
	})
})

// Start up the application on the given port
app.listen( 1337, () => {
    console.log('App Listening on 1337')
})