<!--- Set defaults on the URL param --->
<cfparam name="url.eventID" default="0"/>

<cfoutput>
    <html>
        <head><!--- head stuff.... ---></head>

        <body>

            <h2>Available Venues:</h2>

            <!--- List of all venues --->
            <div id="venueList">
                <cfinclude template="venue-list.cfm"/>
            </div>

            <!--- Simple form to add new venues --->
            <div id="venueForm">
                <input id="venueName" type="text" placeholder="New Venue Name"/>
                <button onclick="addVenue()">Add</button>
            </div>

            <script>
                /* HOW WOULD YOU REWRITE THIS FUNCTION?*/
                function addVenue() {
                    var venueName = $("##venueName").val()
                    var eventID = #val(url.eventID)#;

                    // Add the new venue to the DB
                    $.post('submit-newVenue.cfm',{ event_id: eventID, name: venueName });

                    // Wait a bit to make sure the DB update finishes before updating the venue list
                    setTimeout(function(){
                        $('##venueForm').load('venue-list.cfm?event_id=' + eventID);
                        $("##venueName").val(null)
                    }, 300);
                }
            </script>

            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        </body>
    </html>
</cfoutput>