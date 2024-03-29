# Phase 4 Ruby Project for Flatiron

# Video Game Library and Rating App

This is an app that allows you to keep track of all of the video games you own and rate/ review them. Users can see other reviews/ ratings to see what players think of a game.

# Why

The primary goal is to have all of your video games in one place to easily remember what you own as well as track your experience with the game. Users can also see the overall rating of a game to make purchasing decisions. .

# Build Status

Currently under development and deployed.

# Tech/ Framework used

- React
- Material UI
- Ruby on Rails
- NodeJS (v16), and npm
- Postgresql

# Installation

1. Install Ruby `npm install`

2. Start Ruby server `npm run server`

3. Add react `$ npm install react react-dom`

4. Add Material-UI `$ npm install @mui/material @emotion/react @emotion/styled`

5. Add MUI fonts `$ npm install @fontsource/roboto`

6. Add MUI icons `npm install @mui/icons-material`

7. Start React `npm start`

# DB Diagram

![Project DB Diagram](/client/public/db_diagram.png)

# Features

1. Login page

   - Used to either create an account or log into your account.

   ![Project Example Login](/client/public/phase4Login.png)

2. Find a game

   - Used to see all available games on the app. You can either view the reviews users have created for this game or make your own.
   - If the game you are looking for is not present, you have the option to add the game.

   ![Project Example Search](/client/public/phase4Search.png)

3. Library

- Used to view all of the games you have reviewed. Here you can edit or delete a review.

![Project Example Library](/client/public/phase4Library.png)

4. Stats

- Used to view fun stats about your gaming library such as number of games reviewed or whether you prefer a single player or multiplayer experience.

  ![Project Example Stats](/client/public/phase4Stats.png)

5. NavBar

- Used to navigate to the various pages within the app as well as logout when you are ready to end your sesssion.

# Future Roadmap

(in no particular order)

- Add search feature for games.

# Supplemental links

Project article: Using Ruby on Rails, React, and Material UI to build a Multi-select component (https://medium.com/@figueroarebekah/using-ruby-on-rails-react-and-material-ui-to-build-a-multi-select-component-639b99e2104b)
