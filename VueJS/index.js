var app = new Vue({
	el: '#app',
	data: {
        events: [
            {
                "event_title" : "NEW EVENT BASED ON: Train the Trainer Forklift ",
                "event_begins" : "2016-10-13",
                "event_id" : "2394",
                "event_ends" : "2016-10-13"
            },
            {
                "event_title" : "A Night of Football",
                "event_begins" : "2014-12-30",
                "event_id" : "2080",
                "event_ends" : "2015-12-31"
            },
            {
                "event_title" : "A Super Complex Event - 2020",
                "event_begins" : "2020-12-17",
                "event_id" : "2233",
                "event_ends" : "2020-12-17"
            }
        ]
	},
	mounted: function () {
        // Action to perform when the vue app mounts
    },
    methods: {
        
    }
})
