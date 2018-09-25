# Dribble - WDI: Project 2

## Overview
Dribble is a not so serious, just for fun, application that allows you to track the stats of players in a pick-up basketball game. You can create games, add players and edit the stats for each player. This app uses 3 models shown in the Data Model link below. It has full CRUD on the two upper models and a update route on the last model. Dribble utilizes MongoDB as the database and Mongoose as middleware. 



## Project Links
* [Deployed Heroku](https://infinite-crag-33348.herokuapp.com/)
* [Trello Board](https://trello.com/b/L8qtemX6/unit-2-project )
* [Data Model](https://www.lucidchart.com/documents/edit/b7b6409d-5f17-43e6-95cd-ed10df2b13c7/0)
* [Wire Frame](https://www.figma.com/file/YLVMJTYhGOHsSUxQCW0YFjOA/Unit-2-Project---Wireframe?node-id=0%3A1)

---
## The Process

For me, the hardest part was coming up with an idea. I wasn't in love with this concept, but I didn't want to lose time on building the project so I just went with it (I did spend the majority of the first day building out the model, user stories and wire frame). A decision that I sort of regret, because it's difficult to work on a project that I'm not 100% invested in. I started with a functionality first, style later approach. The goal was to get to MVP - which was to get full CRUD on the first two models and an update on the last model. The project got more difficult as I went deeper into the models and I struggled with how to link the routes with the correct syntax and the best semantics to use. The update route on the final model came about through many trials and errors, talking with a classmate, and luck. I didn't get to style it as much as I would've liked and for this project I wanted to use raw CSS without the help of outside frameworks and get some experience with creating a responsive website from scratch. 


## Something Cool

I learned that you can use Mongoose default values to set default values or schemas within your schema so when a user creates new data, certain values can have a default. In this project, I found this useful when creating a new player and I didn't want to add a create and new route. I wanted stats to be added by default with the player so that I could edit them. 

> const PlayerSchema = new Schema ({
    name: String,
    position: String,
    stats: {type:StatSchema, default:StatSchema}
})

---
## Technologies Used
* HTML5
* CSS
* Javascript
* NodeJS
* Express
* Handlebars
* MongoDB
* Mongoose
----

## Final Thoughts

Getting help after being stuck on an issue after awhile, talking through the code with classmates, and not letting frustration deter me from 

There's a couple things I wished I could've gotten to. 
* For the adding a Game page - I would've liked to add a calender that the user can see and select the date for the game. 
* Adding more styles to make the app look a more modern and user-inviting (maybe some images, more colors, more design)
* Consolidate the stats data into a table

