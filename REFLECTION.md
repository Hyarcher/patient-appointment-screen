# Reflection

Reflecting on the technologies used, I feel like incorporating Ajax, JSON, etc was successful and provided efficiency to my application and allowed me to enhance my application further.

Using **Ajax** to allow data to be inputted and deleted without reloading was incredibly useful as the display is unattended and cannot be refreshed. This was achieved through Ajax POST requests.

**JSON** was an essential to the application as it allowed local storage of the patient information. This meant that in the unlikely event of a server crash or interruption, the patients that were displayed on the screen were safely stored in the 'patients.json' file. By using Node fs I was able to get and send data directly to/from the JSON file. I noticed after a while that fs writeFile was overriding the JSON file so this was quickly changed to fs append so that any patients added would be appended to the end of the JSON file.

The use of **Grid** in my CSS was crucial to the formatting of the display page. It allowed me to sort the patient data coming in, into 4 neat columns. However starting this proved difficult as I had limited prior experience with grid or flexbox. After a while of trial and error I managed to get the patient information to print in a row format as previously it would only print in the first column.

With **DOM** I used Ajax to create the space for the patients to go in using p tags. This was a simple document.createElement("p") but it allowed me to manipulate the HTML very easily. This is just one example of what I used DOM for. It was incredibly useful for allowing the application to read data from inputs and get id's or classes of elements for event listeners and such.

The **Express.js** framework gave a lot of useful tools in the server side of the application. Allowing reference to a static folder called public meaning that it the server fails the content is referenced locally. I set up the port on 8080 and also created routes for the app.get and app.posts which handled the requests from the client.

**Event listeners** were useful for the event driven input such as the 'See the display' button or the help icon displaying and hiding the help information. They allowed me to manipulate the DOM so that after clicking on the help icon, the help information would be displayed and the nwhen clicked again, the help information would be hidden.
