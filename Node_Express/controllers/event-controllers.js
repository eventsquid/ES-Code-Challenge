const
	express = require("express"),
	router = express.Router(),
    { asyncHandler } = require('../middlewares'),
	EventService = require( "../services/EventService" ),
    _eventsService = new EventService()

// Async is used so we can more easily handle errors thrown within the route
router.get('/', asyncHandler( async ( req, res ) => {
    const events = await _eventsService.getEvents()
    res.json(events)
}))



// This just throws an error to check our error handler
router.get('/throwError', ( req, res, next ) => {
    const events = _eventsService.getEventsUndefinedFunction()
    res.json(events)
})

module.exports = router;