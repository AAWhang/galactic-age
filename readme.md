# _Galactic Age Calculator_

#### _A web page using html, css, boostrap, jquery, javascript, webpack, karma and jasmine that will take user's birthday as input and will be able to calculate their current age on another planet, June 20, 2019_

#### By _**Aaron Whang**_

## Description

_This web page is created for the fifth Friday project assigned to the students of Epicodus Seattle May 28th class. This is a webpage that will take in a user input consisting of the user's age and the desired planet, then will calculate their age based on the year cycles of that planet._

## Setup/Installation Requirements

* _clone repository off of Github_
* _go to parent directory using terminal for Mac, git.bash for Windows_
* _type in 'npm install' to install the proper webpacks_
* _type in 'npm run build' to create the web page_
* _find ./dist/index.html to run the web page_
* _You may type npm run start on OSX to run the web page as well_



## Known Bugs



## Specifications

* ___Spec:___ The program returns the user's birthday as well as the current date
          * ___Input:___ user's birthday through calandar input
          * ___Output:___ "<user's birthday>, <current date>"

* ___Spec:___ The program returns the user's birthday as well as the current date and the user's age
          * ___Input:___ "jan 1, 2000"
          * ___Output:___ "jan 1, 2000, june 20, 2019, 19 years old"

* ___Spec:___ The program returns the user's age based on the planet they chose
          * ___Input:___ "jan 1, 2000" "mars"
          * ___Output:___ "jan 1, 2000, june 20, 2019,  10 years old"

* ___Spec:___ The program returns an estimated life expectancy date of death from hard coded variable
          * ___Input:___ "jan 1, 2000" "mars"
          * ___Output:___ "jan 1, 2000, june 20, 2019,  10 years old, You have 49 years left to live!"

* ___Spec:___ The program returns an estimated life expectancy date of death from user input
          * ___Input:___ "jan 1, 2000" "mars, life expectancy: 80"
          * ___Output:___ "jan 1, 2000, june 20, 2019,  10 years old, You have 30 years left to live!"

* ___Spec:___ The program returns an estimated life expectancy date of death from a servey
          * ___Input:___ "jan 1, 2000" "mars, survey result: life expectancy: 120"
          * ___Output:___ "jan 1, 2000, june 20, 2019,  10 years old, You have 50 years left to live!"

* ___Spec:___ The program will inform you if you should be dead based on life expectancy, got rid of current day and user's birth date.
          * ___Input:___ "jan 1, 1900" "mars, survey result: life expectancy: 100"
          * ___Output:___ "63 years old on mars, You are probably dead!"

## Support and contact details

_For any questions about the website, code or content, please contact me at tlbhibiki@gmail.com_

## Technologies Used

_Written in html, css, boostrap, jquery, javascript, webpack, karma and jasmine_

### License

_All code and assets are created and owned by Aaron Whang_

Copyright (c) 2019 **_Aaron Whang_**
