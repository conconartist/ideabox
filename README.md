# Ideabox Group Project

Every developer has more ideas than time. As David Allen likes to say "the human brain is for creating ideas, not remembering them." In this project, we'll be building an application that records and archives our ideas (good and bad alike).

Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we'll rely on JavaScript to implement snappy filtering in the browser, and `localStorage` to persist our wonderful ideas between sessions.

## Learning Goals

* Gain an understanding of how to write clean HTML and CSS to match a provided comp
* Understand how to implement client-side data persistence using `localStorage`
* Understand what it looks like to have a separate data model (using a class) and DOM model
* Incorporate & iterate over arrays in order to filter what is being displayed
* Craft code with clean style, using small functions that show trends toward DRYness and SRP



## Contributers:

Joshua Aragon 
Connie Hong
Alia Peterson

*Mentor Reviews:* Cameron Romo, Tiffany Bacher

## Project Links:

Deployed Github page can be found [here](https://conconartist.github.io/hang-in-there-boilerplate/)

Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)

## Overview and Learning Goals:

Create functionality for a website that generates motivational posters with a random image, title, and quote, from given arrays of data.  Through the process of four progressive iterations, the developer will have written clean, DRY JavaScript to store the data, use a provided class by creating object instances with the keyword `new`. The developer is expected to manipulate the page by adding, removing, and updating elements on the DOM, as well as understand the connection between HTML, CSS, and JavaScript.

## Technologies Used:

* JavaScript

* CSS

* HTML

## How to Run and View:

* Go to the deployed [page](https://conconartist.github.io/hang-in-there-boilerplate/) and navigate through the buttons.
* "Save This Poster" should save the current poster to the array and later be displayed when "Show Saved Posters" is clicked.  

![](https://media.giphy.com/media/CfcBzSTkW1XeyvymFP/giphy.gif)

* "Show Another Random Poster" will display another poster with a random image, title, and quote.  
* The "Make Your Own Poster" button will take you to a form view that lets you enter your own image URL, title, and quote to generate a poster.  
* When "Show my poster" is clicked, it will display a poster with this user input. Or, "Nevermind, take me back" will take the user to the home page. 

![](https://media.giphy.com/media/b2QlT86RYmbOOlViku/giphy.gif)

* Once there are posters saved with the "Save This Poster" button, the user can go to the "Show Saved Posters" to view all saved posters and should be able to delete posters in the display with a double click on the poster image.

![](https://media.giphy.com/media/deaDPF4FWzZav736oB/giphy.gif)

![](https://media.giphy.com/media/K0oW6v5tPlBFO0wxwG/giphy.gif)

## Progression:

*Note from developer:* This was originally a partner project.  When my partner left, I decided to start over and complete the project on my own to better showcase my abilities.

**10/16/2020** - *Completed Iteration 0 and Iteration 1:* Accessed the DOM on the main.js by declaring variables using query selectors and set up event listeners for each button on the main page.  Created functionality for the randomize poster function.  

**10/17/2020** - *Completed Iteration 2 and Iteration 3:* Added functionality to the form to take user input values to generate a unique poster and display on screen.

**10/18/2020** - *Submitted PR request for mentor review from Cameron Romo*: Refactored Iteration 3 from "remove" and "add" from classList in separate function to consolidate to a toggle function with two parameters.

**10/19/2020** - *Worked on Iteration 4 with some difficulty.*  Submitted PR request for mentor review from Tiffany Bacher.  

**10/20-2020** - *With mentor review and previous work, was able to come up with a solution to Iteration 4.*  Refactored the completed project.  Project due at 9pm.

