# Food Log

### Site to track meals

#### By Minh Phuong

## Description

This website will track meal intake. Users should be able to log foods they've eaten each day, including details about the meal and its number of calories.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [PhantomJS](http://phantomjs.org/)
* [TypeScript]
* [Gulp]

## Installation

* `git clone <repository-url>` this repository
* `cd food-log`
* `npm install`
* `bower install`

## Running / Development

* `gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

### Building

* `gulp build` (development)
* `gulp build --environment production` (production)

## Specifications
* The user can add a new food log using the "Add Food Log" form.
  * Example Input:  
  "Hamburger" "Lunch" "365 calories"; *add Food Log*
  * Example Output:  
  Food Log: "Hamburger, Lunch, 365 calories"

* The user can view a list of all foods.
  * Example Input:  
  *View All Food Logs*
  * Example Output:  
  Food Log: "Hamburger, Lunch, 365 calories", "Hotdog, Dinner, 465 calories","Coke, Breakfast, 700 calories"

* The user can view a list of high calories food.
  * Example Input:  
  *View High Calories Logs*
  * Example Output:  
  Food Log: "Coke, Breakfast, 700 calories"

* The user can view a list of low calories food.
  * Example Input:  
  *View Low Calories Logs*
  * Example Output:  
  Food Log: "Hamburger, Lunch, 365 calories", "Hotdog, Dinner, 465 calories"

* The user can edit a food name, details or calories and see live change on the page:
  * Example Input:
  *Modify Hamburger*"Beef Burger", "200 calories"
  * Example Output:
  "Beef Burger, Lunch, 200 calories"

* The user can delete a food log see live change on the page:
  * Example Input:
  *Delete Hamburger*
  * Example Output:
  Food Log: "Hotdog, Dinner, 465 calories","Coke, Breakfast, 700 calories"

## Support and contact details

Please contact Minh Phuong mphuong@kent.edu with any questions, concerns, or suggestions.


## Technologies Used

This web application uses:
* Javascript
* TypeScript
* Gulp
* HTML
* CSS
* Angular 2

****

### License

*This project is licensed under the MIT license.*

Copyright (c) 2017 _**Minh Phuong**_
