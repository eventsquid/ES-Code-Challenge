// Main routing file that gathers all the controller files
const
	express = require('express'),
	router = express.Router(),
	cors = require('cors')

// Allow all requests by default. CORS is applied to individual requests later on.
router.all('*', cors())

// Sets up routing definitions
router.use('/events', require( './event-controllers' ))

// 404 Handler
router.all("*", ( req, res, next ) => {
	res.status(404).json({
		message: 'The requested resource could not be found.',
		path: req.path
	})
})

module.exports = router;
