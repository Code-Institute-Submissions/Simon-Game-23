Hello all and welcome to my version of the Simon game

The goal of the game Simon is to remember and reproduce a sequence of panels/colours progressively increasing in difficulty after the correct sequence has been reproduce.    

Please see the Wikipedia page for more define rules of the Simon game.

I choose this project for the Interactive Frontend Development project. The project scope was to create the game using HTML, CSS and JavaScript and# due to the simple yet functional uses needed of JavaScript.

There were 2 options to pick from and even throw I did struggled throw the JavaScript lessons I wanted to pick the Simon game as I believe the fundamentals of JavaScript needed for it will help with grasp the basics of JavaScript and how they are used in a full project.

UX
User Stories
I want a random selection of colours/panels to be highlighted,
I want the same series of colours/panels to be highlighted again in the next round, but with an additional colour/panel added to the sequence,
If I press the wrong colour/panel in the sequence I want to be notified of this and the random sequence to be repeated and after this has been competed I will be allowed to try again,
I want a counter showing the number of colures/panels that will need to be selected in the round and this to be shown as the game level,
I want a ‘perfect-run’ option, which dose not allow any incorrect colours/panels to be selected or the game resets the sequence,
I want a ‘super-speed’ option which increases the speed of highlighting the colours/panels in the sequence,
I want a ‘unlimited-rounds’ option which allows that game sequence to go on,
I want to be notified when I have compiled all set round in the sequence,
I want a ‘reset mods’ which resets the page to with the latest check boxes

Research
To see the different styles and functionality I had a look at some of the existing types of the Simon games and also some of the tutorials on how to build a Simon game which give me some understanding and insight into what I could implement with my Simon game.

Looking at the most of the Simon game the controls and level counters seem to be in the centre of the colours/panels which seemed to slow down the pace at some pointes of the game and could affect the ‘super-speed’ option which is my (UI) design dose not match the original Simon game.

Style Rationale

I have chosen to keep the style of my webpage simple and to allow the options to be selected before the game to simplify it for the end users I want the page to be simple and clean reduces and confuse or errors when playing the game.

Features

Functionality
a randomly generated sequence of colours/panels will be show to the user.

The user is the required to repeat the random sequence of colours/panels in the same order as deployed to them be clicking on the relevant colours/panels (this can be done with a cursor on laptop/desktop devices, or a finger/thumb on touch devices. A valid user input initiates the next round where the same sequence is replayed, but with an additional step.)

When users click/press on any colours/panels, they will see a light colour fill the selected colours/panels that confirms the click/press. Users will only be able to click/press the colours/panels when the randomly generated sequence is finished. The colours/panels are disabled when the sequence is playing.
If a user inputs the wrong sequence, a notification by all the colours/panels lighting up with a text message will appear in the display area, after which the previous sequence replays and allows the user to try again. ‘perfect-run’ does not allow mistakes, if a mistake is made the user will be presented a notification with all the colours/panels lighting up with a text message will appear in the display area. The will then game restart. ‘super-speed’ reduces the time between colours/panels lighting up. ‘unlimited-rounds’ will unlimited the set number of rounds the user can play.

The round number is the indication of how long the sequence is.

If a game is “failed” then the game will autumnally reset its-self and will indicate with a flashing of all colours but if the user wants to update the game modifiers then a user can click the ‘reset mods’ button to do so.

A user can play with no modifications/add-ons, in which a new step in the random sequence will be added every 800 milliseconds. The user can also play in 'super-speed’, in which the time between each step in a sequence will be every 400 milliseconds. ' perfect-run’ & ‘unlimited-rounds’ are all compatible with each mode.

When the user successfully repeats the sequences correctly 20 times that means that the user has won the game (unless in ‘unlimited-rounds’ mode). When this happens, the colours/panels will continuously flash and a message will say 'YOU WIN!' in the display area. Then if nether the 'perfect-run’ or 'super-speed’ are on during this game the user will then receive another message 'do you want more of a challenge why not try the 'perfect-run’ and the 'super-speed’ game mode maybe together if you can?' the ‘reset mods’ button will be in the pop up box to let user rest the game.


Existing Features
Game Controls
Header Logo - Users are able to click the Simon logo in the header, which reloads the webpage/app.
"?" Icon - Users are able to click the "?" icon in the header, which loads a modal.
Modal - The modal is triggered by the "?" icon, and it allows users to read the instructions for how to operate the game.
Volume icon - Users are able to click the volume icon in the header, which toggles the sound on and off. The icon also changes depending on the toggle state.
On/Off Button - Users can toggle the On/Off button to switch the power on or off. When the power is on, css is used to highlight this button, the board activates and the text is displayed in the other buttons. When the power is off, this button returns to its default state, the board deactivates and the text in the other buttons is hidden. If 'Hard' and/or 'Strict' mode is on, these are toggled to off when the game is powered off. This gives the user a clear visual indication of when the game is on or off.
Hard Button - Users can toggle the Hard button to turn 'Hard mode' on or off. When 'Hard mode' is on, css is used to highlight this button. When 'Hard mode' is off, this button returns to its default state. If 'Hard mode' is on, this is automatically turned off when the game is powered off. This gives the user a clear visual indication of when 'Hard mode' is on or off.
Strict Button - Users can toggle the Strict button to turn 'Strict mode' on or off. When 'Strict mode' is on, css is used to highlight this button. When 'Strict mode' is off, this button returns to its default state. If 'Strict mode' is on, this is automatically turned off when the game is powered off. This gives the user a clear visual indication of when 'Strict mode' is on or off.
Start/Reset Button - Users can click the Start button to start the game. During gameplay, this button changes to a Reset button and the text in it changes to 'RESET' to alert users of this. When the gameplay is over, the text in the button changes back to 'START'.
Display Area - The area below the control buttons is a text display area. Before gameplay, the text in this area displays 'ROUND --' and 'PRESS START'. During gameplay, the text displays the round number and tells users whether to 'WATCH...' (CPU's turn) or 'GO...' (user's turn). If users enter the wrong sequence, the text changes to 'WRONG' and 'TRY AGAIN!'. If users lose the game, the text changes to 'WRONG' and 'YOU LOSE', and then 'YOU LOSE!' and 'PRESS START' after 1 second. If users win the game, the text changes to 'YOU WIN!' and 'PRESS START'. This improves UX and provides visual cues for users.
Game Buttons - There are four game buttons, all different colors. Users press these buttons on their turn to repeat the sequence that the CPU displayed. The lights flash when they are active, either during the CPU's turn, or when clicked by the user. These buttons are only enabled during the user's turn, and are disabled at all other times, which prevents users from clicking these buttons when they aren't supposed to. During the user's turn, when the user clicks a game button, all game buttons are disabled for the subsequent 300 millisecond period, which prevents users from clicking the buttons too quickly. After this time, the buttons are enabled again if it is still the user's turn.
Footer Link - Users can click the link, which is my name. Upon clicking the link, users are directed to my GitHub profile, which loads in a new browser tab.
Feedback modal - When users lose the game, a pop up modal is displayed, which shows users the last round that they reached before losing the game, and it instructs users to press 'START' to try again. Users will need to close the alert modal and manually press 'START' to start a new game. When users win the game, a pop up modal is displayed which congratulates users and tells them that they're awesome, and it instructs users to press 'START' to start a new game. Users will need to close the alert modal and manually press 'START' to start a new game.
Modes
Default Mode - The lights flash in a specific sequence, every 800 milliseconds. The sequence repeats and a new step is added to the sequence with each round, which makes the game progressively difficult. If users make one mistake, the previous pattern is repeated, giving them another chance to get it right. If users make a second mistake, they are presented with a pop up modal, which tells them that they lost the game, the last round that they reached, and instructs them to press 'START' to try again.
Hard Mode - This mode is the same as 'Default Mode', with the difference being the time between the light flashes on the CPU's turn. In rounds 1 to 4, the lights flash every 800 milliseconds. In rounds 5 to 9, the lights flash every 640 milliseconds. In rounds 10 to 14, the lights flash every 520 milliseconds. In rounds 15 to 20, the lights flash every 400 milliseconds. This makes the game even harder than the 'Default Mode' as the rounds progress.
Strict Mode - This mode allows no mistakes from users. Regardless of which round the game had progressed to, if users make a mistake, they are presented with a pop up modal, which tells them that they lost the game, the last round that they reached, and instructs them to press 'START' to try again.
Legendary Mode - This mode is activated when the user turns both 'Hard Mode' and 'Strict Mode' on, making the game faster and harder as the rounds progress, and doesn't allow users to make a mistake.
Incorrect Entry - In addition to the text change in the display area (explained in the previous section), all game buttons flash to provide users with an additional visual aid to let them know that they've made a mistake.
Lose Game - In addition to the text change in the display area and the pop up modal (explained in the previous section), all game buttons flash to provide the user with an additional visual aid to let them know that they've lost the game.
Win Game - In addition to the text change in the display area (explained in the previous section), all game buttons light up to provide the user with an additional visual aid to let them know that they've won the game. The lights stay lit until the user presses 'START' to start a new game.
Features Left to Implement
Leaderboard - Once I learn back-end development, I would like to implement a high score leaderboard for users who have played my game. This would require asking the user to enter their name before they are able to play the game, which is then stored in a back-end database, along with the highest round that they reached.
Online play - When I have the skillset, I would like to implement an online mode where users can compete against other users.
Pause - I would like to introduce a pause function, which allows users to pause the game.
Technologies Used
Balsamiq
I've used Balsamiq to create wireframes of my website/app before building it.
HTML
The project uses HTML to create the basic elements and content of my game.
SCSS
The project uses SCSS to add custom styles to the elements and content of my game. I used SCSS instead of CSS, as it is more powerful and I used the logic to write some variables and mixins, which I called for my fonts and button styles.
CSS
The project uses CSS to apply the custom styles created with SCSS to my game. The index.html file is linked directly to the main.css stylesheet.
Bootstrap
The project uses the Bootstrap framework to add a responsive grid system, prebuilt components, plugins built on jQuery, and Bootstrap styles to my game, before adding my custom styles.
JavaScript
The project uses JavaScript from my custom script.js file to add functionality and interactivity to my game. This is the core focus of this project. The project also uses JavaScript from Bootstrap which is required to add functionality to the Bootstrap modal.
jQuery
The project uses jQuery to simplify DOM manipulation. This is both the standard jQuery that is built with Bootstrap components, and my custom jQuery used in my script.js file.
Google Fonts
The project uses Google Fonts to style the text and suit my chosen theme.
Font Awesome
The project uses Font Awesome for the instructions and sound icons in the header of my game website/app.
Cloud9
I've used Cloud9 as the development environment to write the code for my website.
Jasmine
The project uses Test Driven Development (TDD) using the Jasmine framework to automate some testing of my JavaScript code.
Version Control
Git
I've used Git as a version control system to regularly add and commit changes made to project in Cloud9, before pushing them to GitHub.
GitHub
I've used GitHub as a remote repository to push and store the committed changes to my project from Git. I've also used GitHub pages to deploy my website/app in a live environment.
Testing
Testing User Stories
I used my user stories and documented each of the steps that each user would need to complete to accomplish what they have stated. Below is the link to the document that contains this information:

Testing User Stories
Automated Testing
I tested some of my functions with Jasmine after completing the majority of my JavaScript code. As I was completely new to JavaScript and Jasmine at the beginning of this project, I wasn't able to write TDD tests and my JavaScript code simultaneously. Therefore, I focussed on writing the code for my project first and then tackled the TDD afterwards. I also only tested some of my functions, and not all, as I didn't want to spend too much time on this by using it to test all my functions.

Now that I have a working knowledge of TDD using Jasmine and a more in depth knowledge of JavaScript, I will try to build my testing suite and write my JavaScript code simultaneously going forward.

I imported the Jasmine-jQuery CDN into the Jasmine testing boilerplate to ensure it was compatible with jQuery.

The links to my Jasmine testing suite files are below:

HTML test page to run tests from - indexTesting.html
Jasmine JavaScript testing suite - spec.js
JavaScript file to be tested - script.js
Run Jasmine Tests
Once you've cloned my project by following the instructions in the Deployment - Running Code Locally section below, you can run the Jasmine tests by completing the following steps:

Open the indexTesting.html file.
Run the file to view the results in your browser.
Create Jasmine Tests
Once you have my project running locally, you can create your own Jasmine tests by completing the following steps:

Open the script.js to view the existing code for my project.
Open the spec.js file.
Write your own tests using the Jasmine 3.3.0 framework.
Save the spec.js file.
Run or refresh the indexTesting.html.
Responsive Testing
I used Google Chrome's Development tools to constantly test each change that I made to my project and to ensure that it appeared in the desired way on different screen sizes. I also tested my game on different screen sizes (mobile, tablet and desktop) to ensure it appeared in the desired way on different devices.

To test my whole game (aspects that weren't automated), I went through each feature and documented the results on a spreadsheet. The spreadsheet also documents any responsive features and confirms that they work and appear as intended on different screen sizes. The link to the spreadsheet it below:

Testing Checklist
Additional Testing
In addition to my own testing, I also asked family members, friends and the Slack community to test my game and provide any feedback.

HTML and CSS Validation
I used the W3C HTML Validator tool to validate my HTML code.
I used the W3C CSS Validator tool to validate my CSS code.
I used the Esprima Syntax Validator tool to validate my JavaScript syntax.
Interesting Bugs Or Problems
CPU sequence wasn't playing - The automated CPU sequence wasn't playing. I spent some time trying to debug this and ultimately asked for help on the Slack community and was signposted to a Debugging video by @Anna_lead. After watching this video, I managed to used the Chrome debugger tool to identify the bug, which was a missing semicolon in one of the functions. This took me around 5 hours to debug, but I was able to ultimately resolve it myself, and I learnt how to use the Chrome debugger tool in the process.
Too many start button presses - If the 'START'/'RESET' button was pressed too many times in very quick succesion, it caused the game to break, and a refresh would be required to reload the game. To fix this bug, I used the setTimeout function to disable this button for 1 second after it was clicked, before enabling it again. This ensured that the game had a chance to start or reset before users could press the button again, ensuring the game ran smoothly.
Changing modes during CPU sequence - Changing game modes or restarting the game while the CPU sequence played caused the game to break, and a refresh would be required to reload the game. To fix this bug, I used the power = false; statement to effectively disable the game control buttons while the CPU sequence played. While this fixes the bug, this requires users to wait until the CPU sequence has finished playing before they can use these buttons again.
Quick button presses - During the user's turn to enter the sequence, users were able to repeatedly press the same game button in quick succession, which broke the game. To combat this, I disabled the game button for 300 milliseconds after users clicked/pressed it, to minimize the risk of them breaking the game.
Classes not being added - As part of my UX consideration, I have amended the CSS for the control buttons so that the colors are inverted when the buttons are in an active state. I initially tried to do this by using the .addClass() method in jQuery. However, although the classes were being added, the visual effects weren't updating in the game. I resolved this by using the .css() method in my script.js to directly amend the styles for the buttons, which resolved the bug.
Too many game button presses - After the last button press in a particular sequence, the game buttons are enabled for a short period of time after the 300 millisecond period that they are disabled for, before the next round initiates. This means that there is a small window of opportunity for users to click a game button, which registers an additional button press in that particular sequence. If this is done, it causes the game to break. Trying to resolve this bug was time consuming and I also noticed that this was an issue on the other renditions of the game that I played while conducting my research. Therefore, for the scope of this project, I left it unresolved so that I didn't spend too much time on it.
Game button sounds - Sometimes, the sounds don't always play when the corresponding game buttons flash, which is more noticeable on mobiles. I included a function to reset the audio clip to 0 seconds and restart it if the sound is already playing, in an attempt to resolve the sound issue. However, this didn't seem to resolve the issue. Again, trying to resolve this bug was time consuming and I also noticed that this was an issue on the other renditions of the game that I played while conducting my research. Therefore, for the scope of this project, I left it unresolved so that I didn't spend too much time on it.
Deployment
The hosting platform that I've used for my project is GitHub Pages. To deploy my website to GitHub pages, I used the following steps:

Loaded the terminal window in my Cloud9 workspace.

Initialised Git using the git init command.

Added all files to the Staging area (Git) using the git add . command.

Committed the files to Git using the git commit -m "Initial commit" command.

Created a new repository in GitHub called 'monkees-milestone-project-one'.

Copied the below code from GitHub into the terminal window in my Cloud9 workspace:

git remote add origin https://github.com/hebs87/simon-milestone-project-two.git

git push -u origin master

Entered my GitHub username and password to push the files from Git to GitHub.

Went into 'Settings' on my repository page in GitHub.

Selected the 'master branch' option under the 'GitHub Pages' section.

Ran several regular commits throughout my project.

Repository Link
Click the link below to run my project in the live environment:

Simon Game

Running Code Locally
To run my code locally, users can download a local copy of my code to their desktop by completing the following steps:

Go to my GitHub repository.

Click on 'Clone or download' under the repository name.

Copy the clone URL for the repository in the 'Clone with HTTPs section'.

Open 'Git Bash' in your local IDE.

Change the current working directory to the location where you want the cloned directory to be made.

Type git clone, then paste the URL you copied in Step 3:

git clone https://github.com/USERNAME/REPOSITORY

Press Enter to complete the process and create a your local clone.

Credits
Content
All of the code for my project was written by me.
I watched the Simon Game JavaScript Tutorial for Beginners video before starting my project to gain an understanding of the type of functions that I needed to include in my script.js file to ensure the game's functionality.
Media
Sounds
Game Button Sounds - I got the sounds for the game buttons from Free Code Camp, and assigned the url link to the relevant button in my script.js file.
Game Sounds - I downloaded the sounds for the game sounds and button clicks from Zapsplat and imported them into my workspace. I then created variables for these sound files in my script.js file.
Acknowledgements
I received inspiration for this project from searching for Simon games in Google and testing several of the renditions that were shown in the search results.
Thanks to the Slack community for their feedback, and for pointing me in the right direction of how to debug my JavaScript code.
A special mention to my mentor, Dick Vlaanderen, for his feedback on my project's scope, design and functionality, and for hints on what information to include in my README.md file to justify my stylistic choices and project choice.
Disclaimer
This project is for educational purposes only.
