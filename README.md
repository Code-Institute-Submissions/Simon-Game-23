Hello all and welcome to my version of the Simon game

published site at https://effull.github.io/Simon-Game/

The goal of the game Simon is to remember and reproduce a sequence of panels/colours progressively increasing in difficulty after the correct sequence has been reproduce.    

Please see the Wikipedia page for more define rules of the Simon game.
https://en.wikipedia.org/wiki/Simon_(game) 

I chose this project for the Interactive Frontend Development project. The project scope was to create the game using HTML, CSS and JavaScript. due to the simple yet functional uses needed of JavaScript in this project.

There were 2 options to pick from and even throw I did struggle throw the JavaScript lessons I wanted to pick the Simon game as I believe the fundamentals of JavaScript needed for it will help with grasp the basics of JavaScript and how they are used in a full project.

UX
User Stories
First interactions with site
I want a simple layout which is easy to understand and navigate
I want simple colour and fonts to provide a focus on the game
I want simple and descriptive description of how the games played
I want to be able to play the game easily

Experience / Frequent user
Fast way to start the game
Easy way to increase the difficulty of the game
A simple focus on the game

Developer goals
I want a random selection of colours/panels to be highlighted,
I want the same series of colours/panels to be highlighted again in the next round, but with an additional colour/panel added to the sequence,
If I press the wrong colour/panel in the sequence I want to be notified of this and the random sequence to be repeated and after this has been competed I will be allowed to try again,
I want a counter showing the number of panels that will need to be selected in the round and this to be shown as the game level,
I want a ‘One Life’ option, which does not allow any incorrect panels to be selected or the game resets to the beginning,
I want a ‘super-speed’ option which increases the speed of highlighting the colours/panels in the sequence,
I want a ‘unlimited-rounds’ option which allows that game sequence to go on,
I want to be notified when I have compiled all set round in the sequence

Design

Colour and font styling

ace a light silver play area and font which allows the colours to be bold and seen and also allows the wait to be seen as well when flashing that is a white outer Edge just to have a border around to make it look a bit symmetrical
Typography
the Bold simple font in Black with the enlarge headers gives it a clear easy-to-read style which also does not distract attention when playing the game
Imagery
apart from the backgrounds and the game there is no distractions just to give full focus to it


Research

To see the different styles and functionality I had a look at some of the existing types of the Simon games and also some of the tutorials on how to build a Simon game which give me some understanding and insight into what I could implement with my Simon game.

Looking at the most of the Simon game the controls and level counters seem to be in the centre of the colours/panels which seemed to slow down the pace at some points of the game and could affect the ‘super-speed’ option which is my (UI) design dose not match the original Simon game.

Style Rationale
I have chosen to keep the style of my webpage simple and to allow the options to be selected before the game to simplify it for the end users I want the page to be simple and clean reduces and confuse or errors when playing the game.

Features

Functionality

A randomly generated sequence of colours/panels will be show to the user.
The user is the required to repeat the random sequence of colours/panels in the same order as displayed to them on screen by clicking on the relevant colours/panels (this can be done with a cursor on laptop/desktop devices, or a finger/thumb on touch devices) to proceed to the next level. A valid user input initiates the next round where the same sequence is replayed with an additional colours/panels add to the sequence.
When users click/press on any colours/panels, they will see the panels colour change to white and then back to the original colour that confirms the click/press on that colours/panels. 

If a user inputs the wrong sequence, a notification by all the colours/panels lighting up with a text message will appear in the level counter, after which the previous sequence replays and the user will be able to try again unless ‘One Life’ is checked then the game will reset to the beginning. ‘super-speed’ reduces the time between colours/panels lighting up. ‘unlimited-rounds’ will unlimited the set number of rounds the user can play.
The round number is the indication of how long the sequence is.
If the game is “failed” then the game will autumnally reset its-self and will indicate with a flashing of all colours/panels and reset according to whether ‘One Life’ is enabled
A user can play with no modifications/add-ons, in which a new step in the random sequence will be added every 800 milliseconds. The user can also play in 'super-speed’, in which the time between each step in a sequence will be every 400 milliseconds. ‘One Life’ & ‘unlimited-rounds’ are all compatible with each mode.

When the user successfully repeats the sequences correctly 20 times that means that the user has won the game (unless in ‘unlimited-rounds’ mode). When this happens, the colours/panels will flash 5 times and a message will say 'Winner’ in the level counter. 


Existing Features

Game Controls
One Life - is a checkbox and if checked and an error is made in the sequence of panels compared to the computer after all of the panels flash indicating an error then instead of the sequence being repeated then the game level will be reset to one and one panel will flash resetting the game.
Super Speed - is a checkbox and if checked then this will reduce the time of flashing from 800 milliseconds to 400 milliseconds when the player clicks the panel and when the panel flashes in the sequence
Unlimited Rounds - is a checkbox and if checked then instead of the game ending then the level counter goes past 20 it will continue on until the player stops
Start Button - this brings up all of the panels, level counter and change the level counter to one and flash a panel to begin the game this will also move the webpage to location of the panels
Level Counter – the black box above the panels and below the checkboxes will appear when the start button is pressed and will display one and increase when a Level is completed correctly  if the round has increased past 20 and ‘Unlimited Rounds’ is not checked then it will display Winner also if ‘One Life’ is checked and an error is made on any other round except 1 then the counter will always reset to 1.
Coloured Panels - There are four coloured Panels, which are green blue yellow and red. These can change colour to white either by the computer or the player. The computer can change the colour of the panels when displaying the sequence needed to complete the turn, if the player dose not match the computer sequence all the panels will change to white indicating an error and if ‘Unlimited Rounds’ is not on then after the game level goes past twenty then all the panels will change to white repeatedly for five times.
Footer Link - I have a link to directly link to my email and a link to my LinkedIn profile for my contact details.

Modes

Standard - with none of the checkboxes checked then when the Start Button is pressed a panel will change to white randomly for 800 milliseconds then change back to the original colour if the player clicks the same panel that flashed then the game level will change to two and the original panel from before will flash again at 800 milliseconds and then an additional random panel will flash for 800 milliseconds and then change back to the original colour this will continue on with adding another random panel on to the sequence as long as the player can repeat the computer sequence in order this will continue until the level counter reaches 20 then ones this round is completed then all the panels will change to white for 800 milliseconds and then back to the original colour for 800 milliseconds this will repeat five times whilst the level counter displays ‘Winner’.
Super Speed – If this checkbox is checked the change to white will decrease for 800 milliseconds to 400 milliseconds when the when the computer is flashing the first random panel change, when the player clicks a panel and when the sequence is being repeated.
One Life - If this checkbox is checked and the player dose not repeat the computer sequence correctly all the panels will change to white for 800 milliseconds indicating an error and the level counter will change to one and then a new random panel will flash while resting the game.
Unlimited Rounds - If this checkbox is checked instead of the game stopping at level 21 the rounds will continue on and will only stop when then the player stopes.
Incorrect Entry – If the player cannot match the same pattern as the computer there will be an indication in all of the panels flashing for 800 milliseconds with an post in the level counter saying incorrect and then return back to the original colours and then either repeat the sequence or restart and flash one panel.  
Completed Game – This can only be done if the checkbox for unlimited round is not checked when the game level goes past 20 all the panels will flash 5 times and display a message of winner in the level counter


Technologies Used

Bootstrap
I use bootstrap to create a two-column interface which split the game up and the rules/how to play
HTML
the HTML was very simple because I wanted the page to be simple and mostly focus on the game and information used simple colours, tones and font.
CSS
the CSS provides the simple colours, tones, font and also provides the flashing function for the JavaScript.
JavaScript
this provides the entire game function with using the CSS styles to flash the panels and making the checkboxes from the HTML function to impact the games functions.
jQuery
The project uses jQuery to simplify DOM manipulation. This is both the standard jQuery that is built with Bootstrap components, and my custom jQuery used in my script.js file.
Gitpod
This was the predominant development tool to see my website whilst coding
Github
I use Github for version controls and to previous versions to fix whenever I made an experimental error
Testing
Testing User Stories
I used my user stories and documented each of the steps that each user would need to complete to accomplish what they have stated. Below is the link to the document that contains this information:

Testing User Stories

Manual Testing
Due to my inexperience with both JavaScript and Jasmine and the time and difficulty taken to just complete the JavaScript all of the testing was done manually by trial and error and user experience I will need to develop on my Jasmine skills to have automated testing.


Responsive Testing

to physically test the game, I use the Google web Dev tools to monitor console logs changes to the starlings of the HTML and monitoring changes in code and how it affected the overall game and constantly playing through and checking what the changes worked
when going through the different scaling sizes for different devices developing the website on a laptop and a desktop which gave me a good difference between the two and because the design is very simple implementing at for mobile was not necessarily difficult especially with the talk with the mentor explaining beneficial styles for that platform

HTML

there was a difficulty making sure that the fitter would stay in place and scaling the back ground correctly this was noticed by using different platforms and scaling Tools on Google
currently when the Vue at the screen reaches 530 pixels wide the text will straight down ready for when the text needs to come above the game but the text is still shrunk to a size where it could be side to side with the panels

JavaScript

was going through I made sure that all of the features could work together by manipulating the round ending level to speed up the game and see different colours flash together
one of the notices points I found was colours could not flash together due to the time that I had for delays both with superspeed and as standard game so also adjusted to add a difference between New round starting with both of these to stop panels not flashing together and reduced double flashing problems.
also the initial flash was causing issues if a player would double click on a panel as it was not using the style tack of flashing it was just changing the panel to White so even if I use the function clear panels this would not affect it causing the game basically be unplayable so change the styling and also added clear panels throw a couple of functions through the game to reduce this and to only use one CSS element to change the colours of the panels and if a panel ever gets stuck on flashing then it will always clear correctly.

there were difficulties with the fast updating tag names for the checkboxes and not allowing the functions to correctly do the if statements later on in the game 
when developing the flashes throughout all of the panels the initial flash on the panel was simple to do with the just changing the style of 1 known panel and also to change the style of a panel Flash by the player with using for Loops too run through the arrays of the computer panel and applying the style individually allowed both a consistent checking point and also good timing changes to allowance superspeed to be implemented simply

most of the checkboxes are used in a similar fashion to show true or false depending on the checkboxes which also allowed easy implementation for all of them especially as the initial code was developed before the checkboxes were made


Credits
Code
The full-screen hero image code came from this StackOverflow post

Bootstrap4: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

Credits
Content
All of the code for my project was written by me.
I did watch multiple tutorials online and written content to figure out the best way to go about the project
Acknowledgements
I received inspiration for this project from youtube and Google with testing to see how best to start my project.
I use the styling from my initial master and project to build the footer
I also received help from student care for my JavaScript code.

