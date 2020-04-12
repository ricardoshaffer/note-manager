# note-manager
This program enables the user to create notes, save, and delete notes utilizing JSON to store the information.

## Architecture
-   index.html file contains the front-end user interface.
-   notes.html contain the note context the user has generated & passed to JSON file.
-   additional files route the information accordingly.
-   __backend__ 
    -   api file enables the system to process 'GET' and 'POST' responses from the system-generated JSON files.

## Launching:
-   Via Heroku: https://secure-waters-39573.herokuapp.com/
-   Locally: ```npm start ``` > localhost:8080.

## Credits
-   Heroku for app deployment: https://secure-waters-39573.herokuapp.com/
-   plugins: 'fs' for file writing, 'expressjs' for internal routing.
-   Bootstrap for website design (compiled by Trilogy)
