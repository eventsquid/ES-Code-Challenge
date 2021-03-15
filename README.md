# Eventsquid Code Challenges

Included in this repo are a few coding challenges that touch on different technologies we use at Eventsquid. While going through these, please feel free to take your time and research as necessary. This is meant to not only assess where one is at in the tech we use, but also to get a feel for their problem-solving skills.

Once you have finished each of these challenges, please zip the results and email the results to: `atyrone@eventsquid.com`

---

## venue-add.cfm
This is a coldfusion page that allows a user to add a venue to use on an event. Please rewrite the JavaScript function in this file using what you would consider best practice in terms of both performance and readability.

---

## updatePending.js
This is a function that would be used on our backend NodeJS application that grabs a list of pending transactions and updates any of those that were processed by one of our payment processors, “Auth-Net”. Please rewrite this function using what you would consider best practice in terms of both performance and readability.


---

## SQL_Challenge.docx

This is a word doc that contains a set of questions related to SQL. Please fill this out to the best of your ability.

---

## Node_Express

Contained in this folder is a simple NodeJS application using the Express framework. The provided code includes the basic setup for an API with a single route, which grabs a list of events from a static JSON file included in the project.

You can run this project by navigating to the project in your terminal, installing the npm packages and running the command `node index`

__Tasks__:

- Add a route to the events controller that finds a single event by ID and returns it as an object. The URL scheme should look like `/events/:id`. Please wrap the response from the data service in a promise to simulate an asynchronous call to a database. (An example of this is shown in the existing API route `/events`)
    
   A __GET__ request to `localhost:1337/events/2080` should yield:

   ```json
    {
        "event_title": "A Night of Football",
        "event_begins": "2014-12-30",
        "event_id": "2080",
        "event_ends": "2015-12-31"
    }
   ```
- Add an express middleware that console.logs the URL parameters on each invocation. Here are some examples of what you might see in the console when hitting an endpoint the middleware is applied to:
    - localhost:1337/events/2080 
        ``` json
        { "id": 2080 }
        ```
    - localhost:1337/events/2041
        ```json
        { "id": 2041 }
        ```
    - localhost:1337/events *(nothing in the URL params)*
        ```json
        {}
        ```

---

## VueJS
You can view this project by opening index.html in your web browser.

__Tasks__: 

- Build a second Vue component (the only current one is event-listing.js). This component should display all of an event's details
- Display this component on the page above the event listing. When the user clicks one of the event listings, it should update the new component to display the clicked event's data.
- When the Vue app first loads, it should set the default "selected event" to the first event in the list of event data.

*The result of this challenge should look something similar to this*

![CompletedVueChallenge](/VueJS/result.gif)
