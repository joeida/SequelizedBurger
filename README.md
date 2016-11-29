# Burger Tracking Sequelize Application

### Overview
* Create a basic Burger Tracking Application using Sequelize ORM

### Objective
* Demonstrate use of node, express, html, css, routing, handlebars, MySQL, and Sequelize ORM in the creation of a basic burger tracking application.  Use MVC design pattern.
  1. Create database with burger table using following SQL schema.
    1. id: auto incrementing primar key.
    2. burger_name: string.
    3. devoured: boolean.
    4. date: timestamp.
  2. Populate database with default three entries using seeds file.
  3. Create Sequelize ORM model file with methods to control following database transactions.
    1. selectAll().
    2. insertOne().
    3. updateOne().
  4. Create Sequelize migration files using Schema and seed files so that the databases can be created from the command line.
  5. Create burger database model to keep track of database entry creation format in SQL Schema.
  6. Create burger controller to route endpoint requests to appropriate ORM database and handlebars render methods.
  7. Create handlebars views for front end render as follows:
    1. views directory.
      1. index.handlebars - template for handlebars to render onto.
    2. layouts directory.
      1. main.handlebars. - html layout for handlebars templates to be rendered onto.

* Game Logic
  1. When data inputted, a POST request is sent to /burgers/create endpoint.
  2. New burger object written to database.
  3. Burger database is re-rendered again via handlebars template (will show added content to burgers itinerary list).
  4. Data is rendered as a button with a devoured action.
  5. When a burger button pressed, a PUT request is sent to /burgers/update with the burger ID.
  6. Burger object updated in database with ’devoured’ status set to TRUE.
  7. Burger database is re-rendered again via handlebars template(devoured burger will now show in burgers eaten list.
  
### Screenshot
<img width="576" alt="burgersequelize" src="https://cloud.githubusercontent.com/assets/18523345/20692619/03ef7f48-b58e-11e6-81b7-37154f55ebe8.png">

### Links
[Burger Tracking Sequelize Application](https://fierce-dusk-20907.herokuapp.com)
