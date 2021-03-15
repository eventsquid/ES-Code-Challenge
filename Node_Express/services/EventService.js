const data = require('../events-sample-data.json')

module.exports = class EventService {

    async getEvents() {
        // Returning a promise to simulate a db query
        return new Promise( resolve => resolve(data) )
    }

}