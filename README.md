# Medical centre waiting room screen

An unattended display screen for a medical centre that displays the patient information that is added or deleted from a settings page run on another device.

## Functionality

The application reads and writes data to and from a JSON file names 'patients.json'. This is done through the add patients functionality. The application also deletes data from the JSON file through the delete patients functionality.

This functionality can be found on the settings.html page. 
This page provides the user with two options; add a patient to the display or delete an existing patient from the display. For the addition, the user enters data into input boxes and submits this by clicking the 'Add patients' button directly below. This will add the patient information to the display and to the JSON file. For the deletion, the already existing patient names are displayed in a drop down menu. If no patients exist then the drop-down menu will be empty. By selecting the name of the patient the user wishes to delete and clicking the 'Delete patient' button, the patient (and it's other information) will be deleted from the display and from the JSON file.

## How to install and run the application.

Extract the Zip.

Open a command line application.

Using 'cd', locate the directory;

```
cd Waiting-room-notice-board-master
```

Then the user should be in the directory.
If so then type;

```
npm install
```
This will install the node modules required for the application to run correctly.

Now the server can be started by using the following code;

```
npm start
```

The command line gives the user the url to follow.
The user can enter this url in either Google Chrome, Safari or Firefox.

The first page that opens is the settings page where the user can add or delete patients on the display. By clicking the 'See the display' button the application opens the unattended display in another tab.
