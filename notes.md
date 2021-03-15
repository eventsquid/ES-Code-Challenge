## venue-add.cfm
Rewrite the javascript function in this file using what you would consider best practice in terms of both performance and readability

---

## updatePending.js
Rewrite the function using what you would consider best practice in terms of both performance and readability

---

## Node_Express
You can run this project by installing the npm packages and running `node index` in your terminal

Tasks:

- Add a route to the events controller that finds a single event by ID and returns it as an object
    
   A __GET__ request to `localhost:1337/events/2080` should yield:

   ```
        {
            "event_title": "A Night of Football",
            "event_begins": "2014-12-30",
            "event_id": "2080",
            "event_ends": "2015-12-31"
        }
   ```
- Add an express middleware that console logs the request parameters on whichever route you apply that middleware to. Here are some examples of what you might see in the console:
    - localhost:1337/events/2080 

        ``` 
        { id: 2080 }
        ```

    - localhost:1337/events *(nothing in the request params)*
        ```
        {}
        ```

---

## VueJS
You can view this project by opening index.html in your web browser

Tasks: 

- Build a second Vue component (the only current one is event-listing.js). This component should display all of an event's details
- Display this component on the page above the event listing. When the user clicks one of the event listings, it should update the new component to display the clicked event's data.
- When the Vue app first loads, it should set the default "selected event" to the first event in the list of event data.

*The result of this challenge should look something similar to what is displayed in `/VueJS/result.gif`*