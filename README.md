# (Psycho) FriendFinder

## Purpose
This app demonstrates usage of server routing via express.js to create a dating-app-styled experience, allowing the user to answer some personality questions and be matched with another user based on the closest compatibility between answer scores. We've provided some stock users to be matched against. (You may recognize them.)

## Usage
Simply click into the survey page and answer some questions after providing a name and photo link. You will be returned with the individual most closely matching your... peculiarities. Your information and answers will then be added to the array for future matching. (The array may be refreshed to its default population by clinking the footer link.)

Validations include checking for a non-blank user name, completion of all questions, and a photo link that ends in .jpg, .jpeg, .gif, or .png.

## Files
- `server.js` Node file handling port listening and import of other routing modules.
- `apiRoutes.js` Handles POST and GET requests of data, as well as compatability matching.
- `htmlRoutes.js` Handles path routing.
- `home.html` Home page with link to survey.
- `survey.html` Accepts, validates, and sends user inputs to `apiRoutes.js`, then displays modal containing returned match data.

### Note
The questionnaire used in this app is cribbed from the Levenson Self-Reporting Psychopathy Scale.
