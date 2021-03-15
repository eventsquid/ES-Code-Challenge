Vue.component('event-listing', {
	props: {
       event: {
           type: Object,
           required: true
       }
    },
	data: function() {
		return {

        }
    },
	template: `
        <div class="eventListing">
            <p>{{event.event_title}}</p>
        </div>
    `
})
